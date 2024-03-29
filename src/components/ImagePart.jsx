"use client";

import { slides } from "@/staticData/NavBarData";
import React, { useState } from "react";

export const ImagePart = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="w-[98%] mb-24 m-auto relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ${
            index === currentSlide
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`text-center bg-cover  ${slide.className} bg-center h-full flex flex-col justify-center items-center`}
          >
            <div className=" bg-white">
              <div className=" flex p-1">
                <p className="text-black mr-1.5 text-1xl font-bold">
                  {slide.city}
                </p>
                <p className="text-[#f35525] text-1xl font-bold">
                  {slide.country}
                </p>
              </div>
            </div>
            <div style={{ width: "70%", margin: "0px auto" }}>
              <div className="m-auto sm:w-[90%] md:w-[40%] lg:w-[40%] text-6xl font-bold text-[#ffffff] mt-4 text-lg">
                {slide.message}
              </div>

              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full text-[#1e1e1e] font-bold focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white stroke-current font-bold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full text-[#1e1e1e] font-bold focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white stroke-current font-bold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
