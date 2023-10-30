import React from "react";
import { API_OPTIONS, TMDB_IMG_URL } from "../utilities/constants";
import { useDispatch } from "react-redux";
import {
  addClickedMovieDetails,
  addClickedMovieTrailerKey,
} from "../utilities/moviesSlice";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  // console.log(movie.id);
  // useEffect(() => {
  //   handlePosterClick();
  //   // eslint-disable-next-line
  // }, []);
  const handlePosterClick = async () => {
    try {
      // console.log(movie);
      // API CALL for Clicked movie Videos
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movie.id +
          "/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();

      if (
        json.results &&
        Array.isArray(json.results) &&
        json.results.length > 0
      ) {
        const OBJ_WITH_TRAILER = json.results.find(
          (obj) =>
            obj.name === "Official Trailer" ||
            obj.name === "Final Trailer" ||
            obj.name === "Official Teaser"
        );
        const Trailer_Key = OBJ_WITH_TRAILER?.key;
        dispatch(addClickedMovieTrailerKey(Trailer_Key));
      } else {
        console.error("No video results found for the movie.");
      }

      // API CALL for Clicked movie details
      const data2 = await fetch(
        "https://api.themoviedb.org/3/movie/" + movie.id + "?language=en-US",
        API_OPTIONS
      );

      const json2 = await data2.json();

      dispatch(
        addClickedMovieDetails({
          title: json2?.title,
          overview: json2?.overview,
        })
      );
    } catch (error) {
      console.error("Error while fetching movie data:", error);
    }
  };

  return (
    <>
      {/* <p>hi</p> */}
      <img
        onClick={handlePosterClick}
        className="h-80 w-40 md:w-80 border-1 border-gray-800 rounded-sm hover:scale-95 hover:cursor-pointer"
        key={movie?.id}
        alt="movie-poster"
        src={TMDB_IMG_URL + movie?.poster_path}
      />
    </>
  );
};

export default MovieCard;
