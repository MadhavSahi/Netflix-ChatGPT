import React, { useEffect, useState } from "react";
import VideoMainDetails from "./VideoMainDetails";
import VideoMainContainer from "./VideoMainContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const moviesArray = useSelector((store) => store?.movies?.nowPlayingMovies);

  const [randomIndex, setRandomIndex] = useState(null);

  useEffect(() => {
    if (moviesArray) {
      const newRandomIndex = Math.floor(Math.random() * moviesArray.length);
      setRandomIndex(newRandomIndex);
    }
  }, [moviesArray]);

  if (!moviesArray || randomIndex === null) {
    return null;
  }

  const mainMovie = moviesArray[randomIndex];
  const { id, original_title, overview } = mainMovie;

  return (
    <>
      <VideoMainDetails title={original_title} overview={overview} />
      <VideoMainContainer movieId={id} />
    </>
  );
};

export default MainContainer;
