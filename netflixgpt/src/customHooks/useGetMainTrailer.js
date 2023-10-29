import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utilities/constants";
import { addMovieTrailer } from "../utilities/moviesSlice";
import { useEffect } from "react";

const useGetMainTrailer = (movieId) => {
  const MEMO_MAIN_TRAILER = useSelector((store) => store?.movies?.movieTrailer);
  const dispatch = useDispatch();
  const MovieTrailer = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();

      if (json && json.results && Array.isArray(json.results)) {
        const onlyVideosArray = json.results;
        const onlyTrailers = onlyVideosArray.filter(
          (each_video) => each_video.type === "Trailer"
        );

        // Dispatch the trailers to the store
        dispatch(addMovieTrailer(onlyTrailers));
      }
    } catch (error) {
      console.error("Error fetching movie trailers:", error);
    }
  };

  useEffect(() => {
    if (!MEMO_MAIN_TRAILER) {
      MovieTrailer();
    }
    // eslint-disable-next-line
  }, []);
};

export default useGetMainTrailer;
