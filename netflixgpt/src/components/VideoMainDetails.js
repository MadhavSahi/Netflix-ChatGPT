import React from "react";
import { useSelector } from "react-redux";

const VideoMainDetails = ({ title, overview }) => {
  // console.log(title,overview);
  const clickedMovieDetailsSelector = useSelector(
    (store) => store?.movies?.clickedMovieDetails
  );
  // console.log(clickedMovieDetailsSelector);

  // Define a maximum length for the overview text
  const maxOverviewLength = 500;

  // Function to truncate the overview text
  const truncateOverview = (text) => {
    if (typeof text === "string" && text.length > maxOverviewLength) {
      return text.slice(0, maxOverviewLength) + " ...";
    }
    return text;
  };
  return (
    <>
      {clickedMovieDetailsSelector ? (
        <>
          <div className="absolute md:mt-[10%] mt-[20%] md:flex md:flex-col md:gap-4 ml-[5%] w-1/2 md:w-1/3 bg-none md:bg-gradient-to-r from-gray-900 ">
            <p className="text-3xl md:text-5xl text-white sm:font-semibold md:font-bold">
              {clickedMovieDetailsSelector?.title}
            </p>
            <p className="hidden lg:inline-block md:w-full text-white text-2xl font-medium">
              {/* {clickedMovieDetailsSelector?.overview} */}
              {truncateOverview(clickedMovieDetailsSelector?.overview)}
            </p>
            <div className=" hidden lg:flex flex-row">
              <button className="bg-white text-black p-4 md:px-12 md:text-xl md:font-semibold rounded-md hover:bg-opacity-90">
                Play
              </button>
              <button className="bg-gray-500 md:ml-4 text-black md:p-4 md:px-12 md:text-xl md:font-semibold rounded-md hover:bg-opacity-90">
                More Info
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="absolute md:mt-[10%] mt-[20%] md:flex md:flex-col md:gap-4 ml-[5%] w-1/2 md:w-1/3 bg-none md:bg-gradient-to-r from-gray-900 ">
            <p className="text-3xl md:text-5xl text-white sm:font-semibold md:font-bold">
              {title}
            </p>
            <p className="hidden lg:inline-block md:w-full text-white text-2xl font-medium">
              {truncateOverview(overview)}
            </p>
            <div className=" hidden lg:flex flex-row">
              <button className="bg-white text-black p-4 md:px-12 md:text-xl md:font-semibold rounded-md hover:bg-opacity-90">
                Play
              </button>
              <button className="bg-gray-500 md:ml-4 text-black md:p-4 md:px-12 md:text-xl md:font-semibold rounded-md hover:bg-opacity-90">
                More Info
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default VideoMainDetails;
