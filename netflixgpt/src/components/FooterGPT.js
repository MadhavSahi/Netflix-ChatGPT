import React from "react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { SiHashnode } from "react-icons/si";

const Footer2 = () => {
  return (
    <>
      <div className="flex flex-row justify-around flex-wrap bg-black w-full fixed bottom-0">
        {/* <div className="flex flex-row justify-around flex-wrap bg-black h-screen fixed mt-32 w-full"> */}
        <p className="text-white text-xl md:text-3xl pt-2 md:pt-4">
          Created with Love By :{" "}
          <span className="md:ml-0"> &copy; "Madhav Sahi"</span>
        </p>
        <div className="flex flex-row justify-around ">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/madhav-sahi-6a2305161/"
            className="text-white text-2xl mr-5 mt-1 p-5 hover:scale-x-125 hover:scale-y-105"
          >
            <BsLinkedin />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/Madhavvv_"
            className="text-white text-2xl mr-5 mt-1 p-5 hover:scale-x-125 hover:scale-y-105"
          >
            <BsGithub />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/MadhavSahi"
            className="text-white text-2xl mr-5 mt-1 p-5 hover:scale-x-125 hover:scale-y-105"
          >
            <BsTwitter />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://madhavsahi.hashnode.dev/"
            className="text-white text-2xl mr-5 mt-1 p-5 hover:scale-x-125 hover:scale-y-105"
          >
            <SiHashnode />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer2;
