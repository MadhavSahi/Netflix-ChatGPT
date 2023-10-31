import React from "react";
import { API_OPTIONS, TMDB_IMG_URL } from "../utilities/constants";
import {
  addClickedMovieDetails,
  addClickedMovieTrailerKey,
} from "../utilities/moviesSlice";
import { useDispatch } from "react-redux";

// import { useNavigate } from "react-router-dom";
import { gptBtnFalse } from "../utilities/gptSlice";

const MovieCardGPT = ({ movie }) => {
  // console.log(movie);
  const dispatch = useDispatch();
  const handleGPTMovieClicked = async () => {
    window.scroll(0, 0);
    // console.log(movie);

    //API call for getting movieID from name
    const result = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie?.title +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json0 = await result.json();
    // console.log(json0);
    const OBJ_WITH_EXACT_TITLE_NAME = json0.results.find(
      (obj) => obj.title === movie?.title
      // obj.name === "Final Trailer" ||
      // obj.name === "Official Teaser" ||
      // obj.type === "Trailer"
    );
    // console.log(OBJ_WITH_EXACT_TITLE_NAME);
    const final_movie_obj = OBJ_WITH_EXACT_TITLE_NAME || json0?.results[0];

    // console.log(json0?.results[0]?.id);
    // console.log(final_movie_obj);

    // API CALL for Clicked movie Videos
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        final_movie_obj?.id +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    if (json.results.length !== 0) {
      // console.log("result present");
    } else {
      //No Videos for this movie ID found hence we are displaying BLANK SCREEN VIDEO with hard coded Key
      dispatch(addClickedMovieTrailerKey("-Pg819il8lY?si=HuYfYE0TeyMN2YLT"));
      // console.log("result absent");
    }

    if (
      json.results &&
      Array.isArray(json.results) &&
      json.results.length > 0
    ) {
      const OBJ_WITH_TRAILER = json.results.find(
        (obj) =>
          obj.name === "Official Trailer" ||
          obj.name === "Final Trailer" ||
          obj.name === "Official Teaser" ||
          obj.type === "Trailer"
      );
      const Trailer_Key = OBJ_WITH_TRAILER?.key;
      // console.log(Trailer_Key);
      dispatch(addClickedMovieTrailerKey(Trailer_Key));
    } else {
      console.error("No video results found for the movie.");

      // dispatch(addClickedMovieTrailerKey("-Pg819il8lY?si=HuYfYE0TeyMN2YLT"));
    }

    // API CALL for Clicked movie details
    const data2 = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        final_movie_obj?.id +
        "?language=en-US",
      API_OPTIONS
    );

    const json2 = await data2.json();
    // console.log(json2);

    dispatch(
      addClickedMovieDetails({
        title: json2?.title,
        overview: json2?.overview,
      })
    );

    dispatch(gptBtnFalse());
  };
  return (
    <>
      {/* <p>hi</p> */}
      <img
        onClick={handleGPTMovieClicked}
        className="h-80 py-3 w-80 border-1 border-gray-800 rounded-sm hover:scale-95 hover:cursor-pointer"
        key={movie?.id}
        alt="movie-poster"
        src={TMDB_IMG_URL + movie?.poster_path}
      />
    </>
  );
};

export default MovieCardGPT;
