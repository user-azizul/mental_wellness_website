import React from "react";
import heroImg from "../assets/hero.webp";
import { IoArrowForwardCircleSharp } from "react-icons/io5";

function Hero() {
  return (
    <section
      className="bg-heroBg text-white flex items-center py-10 md:py-16"
      id="home"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-8 gap-6 md:gap-12">
        {/* Left side */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-secondary font-bold mb-4 md:w-4/5 leading-snug">
            Start Your Journey To Mental Wellness
          </h1>
          <p className="text-sm md:text-base mb-4 md:pr-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            tempora praesentium illo minima minus animi.
          </p>
          <button
            className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded transition-all duration-200 mx-auto md:mx-0"
            aria-label="Get Started on your journey to mental wellness"
          >
            <a
              className="flex gap-1 items-center justify-center"
              href="#contact"
            >
              Get Started
              <span>
                <IoArrowForwardCircleSharp />
              </span>
            </a>
          </button>
        </div>
        {/* Right side */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={heroImg}
            alt="Illustration promoting mental wellness"
            className="w-full max-w-[350px] md:max-w-[500px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
