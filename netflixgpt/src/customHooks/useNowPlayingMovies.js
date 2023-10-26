import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utilities/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utilities/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const MOVIE_API_CALL = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&region=IN",
      API_OPTIONS
    );
    const json_Data = await data.json();
    // setMovieData(json_Data?.results);
    dispatch(addNowPlayingMovies(json_Data?.results));
  };
  useEffect(() => {
    MOVIE_API_CALL();
    // console.log(movieData);
    // eslint-disable-next-line
  }, []);
};
export default useNowPlayingMovies;