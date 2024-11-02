import React, { useState } from "react";
import videoImg from "../assets/video-thumbnail.webp";
import { FaCirclePlay } from "react-icons/fa6";
import { IoArrowForwardCircleSharp } from "react-icons/io5";

function About() {
  const [isVideo, setIsVideo] = useState(false);
  function handlePlay() {}
  function handleClose() {}
  return (
    <div id="about" className="bg-[#f7f8fc]  ">
      <div className="container mx-auto">
        <div className=" py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className=" w-full md:w-1/2 mb-8 md:mb-0">
            {!isVideo ? (
              <div onClick={() => setIsVideo(true)} className=" relative">
                <img
                  src={videoImg}
                  alt=""
                  className="w-full md:h-[446px] h-auto rounded-lg object-cover"
                />
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white rounded-full shadow-lg cursor-pointer">
                  <FaCirclePlay className="size-10 " />
                </button>
              </div>
            ) : null}
          </div>
          <div className="md:w-1/2 w-full text-gray-600">
            <h1 className="text-xl font-secondary font-bold mb-4 leading-snug">
              Individual Consult And Therapy
            </h1>
            <p className="text-base mb-4 md:pr-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              tempora praesentium illo minima minus animi.
            </p>
            <button
              className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded transition-all duration-200"
              aria-label="Get Started on your journey to mental wellness"
            >
              <a className="flex gap-1 items-center" href="#contact">
                Get Started
                <span>
                  <IoArrowForwardCircleSharp />
                </span>
              </a>
            </button>
          </div>
        </div>
        {isVideo ? (
          <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
            <div className="relative w-full h-full flex items-center justify-center">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/NQcYZplTXnQ?si=8uhAFnaXFMYU6a-h"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <button
                onClick={() => setIsVideo(false)}
                className="absolute  top-4 right-4 text-white cursor-pointer text-2xl"
              >
                x
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default About;
