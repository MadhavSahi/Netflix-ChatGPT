import React, { useEffect, useState } from "react";
import VideoMainDetails from "./VideoMainDetails";
import VideoMainContainer from "./VideoMainContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const moviesArray = useSelector((store) => store?.movies?.nowPlayingMovies);
  const [randomIndex, setRandomIndex] = useState(null);

  useEffect(() => {
    if (moviesArray && moviesArray.length > 0) {
      const newRandomIndex = Math.floor(Math.random() * moviesArray.length);
      setRandomIndex(newRandomIndex);
    }
  }, [moviesArray]);

  // Check if mainMovie is defined before destructuring
  // const mainMovie = moviesArray && randomIndex !== null ? moviesArray[randomIndex] : null;
  const mainMovie = moviesArray && moviesArray[randomIndex];

  if (!mainMovie) {
    return null;
  }

  // Render VideoMainDetails and VideoMainContainer components if mainMovie is defined
  return (
    <div>
      <VideoMainDetails title={mainMovie.original_title} overview={mainMovie.overview} />
      <VideoMainContainer movieId={mainMovie.id} />
    </div>
  );
};

export default MainContainer;
