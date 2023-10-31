import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utilities/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utilities/constants";

const useNowPlayingMovies = () => {
  const MEMO_NOW_PLAYING_MOVIES = useSelector(
    (store) => store?.movies?.nowPlayingMovies
  );
  const dispatch = useDispatch();
  const NOW_PLAYING_MOVIES_API_CALL = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json_Data = await data.json();
    // console.log(json_Data);
    // setMovieData(json_Data?.results);
    dispatch(addNowPlayingMovies(json_Data?.results));
  };
  useEffect(() => {
    if (!MEMO_NOW_PLAYING_MOVIES) {
      NOW_PLAYING_MOVIES_API_CALL();
    }
    // console.log(movieData);
    // eslint-disable-next-line
  }, []);
};
export default useNowPlayingMovies;
