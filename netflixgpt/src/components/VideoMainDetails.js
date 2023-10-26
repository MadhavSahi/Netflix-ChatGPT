import React from "react";

const VideoMainDetails = ({title,overview}) => {
    // console.log(title,overview);
  
  return (
    <>
      <div className="absolute mt-[10%] flex flex-col gap-4 ml-[5%] w-1/4  bg-gradient-to-r from-gray-900 ">
        <p className="text-5xl text-white font-bold">{title}</p>
        <p className="w-full text-white text-2xl font-medium">{overview}</p>
        <div>
            <button className="bg-white text-black p-4 px-12 text-xl font-semibold rounded-md hover:bg-opacity-90">Play</button>
            <button className="bg-gray-500 ml-4 text-black p-4 px-12 text-xl font-semibold rounded-md hover:bg-opacity-90">More Info</button>
        </div>
      </div>
    </>
  );
};

export default VideoMainDetails;
