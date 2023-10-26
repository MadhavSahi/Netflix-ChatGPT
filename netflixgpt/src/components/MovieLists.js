import React from "react";
import MovieCard from "./MovieCard";

const MovieLists = ({ title, movies }) => {
  console.log(title, movies);
  if(!movies){
    return;
  }
  return (
    <>
      <div className="py-3 mx-2 flex flex-col gap-2">
        <p className="text-5xl text-white font-semibold p-3">{title}</p>
        <div className="flex flex-row gap-5 mx-4 overflow-x-scroll">
          {movies.map((each_movie, index) => {
            return (
            <MovieCard key={each_movie?.id} movie={each_movie} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MovieLists;
