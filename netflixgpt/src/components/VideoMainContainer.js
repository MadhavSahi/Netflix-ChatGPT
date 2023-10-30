import React from "react";
import { useSelector } from "react-redux";
import useGetMainTrailer from "../customHooks/useGetMainTrailer";

const VideoMainContainer = ({ movieId }) => {
  //   console.log(movieId);
  const movieTrailerSelector = useSelector(
    (store) => store?.movies?.movieTrailer
  );
  const clickedMovieTrailerKeySelector = useSelector(
    (store) => store?.movies?.clickedMovieTrailerKey
  );
  // console.log(clickedMovieTrailerKeySelector);
  //addClickedMovieTrailerKey
  // console.log(movieTrailerSelector[0]?.id);
  //   const moviesArray = useSelector((store) => store?.movies?.nowPlayingMovies);
  //   const mainMovie = moviesArray ? moviesArray[0] : null;
  //   const mainMovie = moviesArray[0];

  useGetMainTrailer(movieId);
  if (!movieTrailerSelector) {
    return;
  }
  return (
    <>
      {clickedMovieTrailerKeySelector ? (
        <>
          <div className="">
            <iframe
              className="aspect-video w-full"
              src={
                "https://www.youtube.com/embed/" +
                clickedMovieTrailerKeySelector +
                "?autoplay=1&mute=1"
              }
              //   src="https://www.youtube.com/embed/IcAV5qiko8M?si=5hoiMGt7Q8hGTjZO"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              //   allowFullScreen
            ></iframe>
          </div>
        </>
      ) : (
        <>
          <div className="">
            <iframe
              className="aspect-video w-full"
              src={
                "https://www.youtube.com/embed/" +
                movieTrailerSelector[0]?.key +
                "?autoplay=1&mute=1"
              }
              //   src="https://www.youtube.com/embed/IcAV5qiko8M?si=5hoiMGt7Q8hGTjZO"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              //   allowFullScreen
            ></iframe>
          </div>
        </>
      )}
    </>
  );
};

export default VideoMainContainer;
