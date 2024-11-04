import React, { useState } from "react";
import videoImg from "../assets/video-thumbnail.webp";
import { FaCirclePlay } from "react-icons/fa6";
import { IoArrowForwardCircleSharp } from "react-icons/io5";

function About() {
  const [isVideo, setIsVideo] = useState(false);

  // Disable scroll when modal is open
  React.useEffect(() => {
    if (isVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isVideo]);

  return (
    <div id="about" className="bg-[#f7f8fc] py-12">
      <div className="container mx-auto">
        <div className="px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            {!isVideo ? (
              <div
                onClick={() => setIsVideo(true)}
                className="relative cursor-pointer"
              >
                <img
                  src={videoImg}
                  alt="Video thumbnail"
                  className="w-full md:h-[446px] h-auto rounded-lg object-cover"
                />
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white p-4 rounded-full shadow-lg">
                  <FaCirclePlay className="w-8 h-8 md:w-10 md:h-10" />
                </button>
              </div>
            ) : null}
          </div>
          <div className="md:w-1/2 w-full text-gray-600">
            <h1 className="text-xl md:text-2xl font-secondary font-bold mb-4 leading-snug">
              Individual Consult And Therapy
            </h1>
            <p className="text-sm md:text-base mb-4 md:pr-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              tempora praesentium illo minima minus animi.
            </p>
            <button
              className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded transition-all duration-200 mx-auto md:mx-0"
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

        {/* Video Modal */}
        {isVideo && (
          <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
            <div className="relative w-[90%] max-w-3xl h-auto">
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/NQcYZplTXnQ?si=8uhAFnaXFMYU6a-h"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <button
                onClick={() => setIsVideo(false)}
                className="absolute top-2 right-2 text-white text-3xl cursor-pointer bg-black bg-opacity-50 rounded-full p-1"
                aria-label="Close video"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
