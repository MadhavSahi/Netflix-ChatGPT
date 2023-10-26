import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utilities/constants";
import { addMovieTrailer } from "../utilities/moviesSlice";
import { useEffect } from "react";

const useGetMainTrailer=(movieId)=>{
    const dispatch = useDispatch();
    const MovieTrailer = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/" +
            movieId +
            "/videos?language=en-US",
          API_OPTIONS

        );
        const json = await data.json();
        const onlyVideosArray = json?.results;
        const onlyTrailers = onlyVideosArray.filter(
          (each_video) => each_video.type === "Trailer"
        );
        // console.log(onlyTrailers[0]);
        dispatch(addMovieTrailer(onlyTrailers));
      };
      useEffect(() => {
        MovieTrailer();
        // eslint-disable-next-line
      }, []);
}

export default useGetMainTrailer;