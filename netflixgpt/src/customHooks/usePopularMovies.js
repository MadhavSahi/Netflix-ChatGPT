import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utilities/constants";
import { addPopularMovies } from "../utilities/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const POPULAR_MOVIES_API_CALL = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)

    const json_Data = await data.json();
    // setMovieData(json_Data?.results);
    dispatch(addPopularMovies(json_Data?.results));
  };
  useEffect(() => {
    POPULAR_MOVIES_API_CALL();
    // console.log(movieData);
    // eslint-disable-next-line
  }, []);
};
export default usePopularMovies;