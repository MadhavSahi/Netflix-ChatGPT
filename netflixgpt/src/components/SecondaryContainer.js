import React from "react";
import MovieLists from "./MovieLists";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const AllMoviesSelector = useSelector((store) => store?.movies);
  if (!AllMoviesSelector) {
    return;
  }
  //   console.log(AllMoviesSelector);
  return (
    <>
      <div className="bg-black flex flex-col gap-4">
        <MovieLists
          title="Now Playing"
          movies={AllMoviesSelector?.nowPlayingMovies}
        />
        <MovieLists title="Popular" movies={AllMoviesSelector?.popularMovies} />
        <MovieLists
          title="Top Rated"
          movies={AllMoviesSelector?.topRatedMovies}
        />
      </div>
      {/* <MovieLists title="Trending" />
        <MovieLists title="Comedy " /> */}
    </>
  );
};

export default SecondaryContainer;
