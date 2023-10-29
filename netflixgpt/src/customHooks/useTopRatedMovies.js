import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utilities/constants";
import { addTopRatedMovies } from "../utilities/moviesSlice";

const useTopRatedMovies = () => {
  const MEMO_TOP_RATED_MOVIES = useSelector(
    (store) => store?.movies?.topRatedMovies
  );
  const dispatch = useDispatch();
  const TOP_RATED_MOVIES_API_CALL = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );

    const json_Data = await data.json();
    // setMovieData(json_Data?.results);
    dispatch(addTopRatedMovies(json_Data?.results));
  };
  useEffect(() => {
    if (!MEMO_TOP_RATED_MOVIES) {
      TOP_RATED_MOVIES_API_CALL();
    }
    // console.log(movieData);
    // eslint-disable-next-line
  }, []);
};
export default useTopRatedMovies;
