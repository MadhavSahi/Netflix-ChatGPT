import React from "react";
import { TMDB_IMG_URL } from "../utilities/constants";

const MovieCard = ({movie}) => {
  return (
    <>
        {/* <p>hi</p> */}
      <img
        className="h-80 w-80 border-1 border-gray-800 rounded-sm"
        key={movie?.id}
        alt="movie-poster"
        src={TMDB_IMG_URL + movie?.poster_path}
      />
    </>
  );
};

export default MovieCard;
