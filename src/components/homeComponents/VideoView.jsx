import Image from "next/image";
import React from "react";
import videoFrame from "@/image/video-frame.jpg";

export const VideoView = () => {
  return (
    <div className="w-[98%] mb-24 m-auto">
      <div className=" px-[85px] py-[39px] pb-[196px] text-center bg-cover video-bg bg-center h-full flex flex-col justify-center items-center">
        <div>
          <p className="text-[#ee626b] text-lg font-bold">| Video View</p>
        </div>
        <div style={{ width: "70%", margin: "0px auto" }}>
          <div className=" leading-normal m-auto sm:w-[90%] md:w-[40%] lg:w-[40%] text-4xl font-bold text-[#ffffff] mt-4">
            Get Closer View & Different Feeling
          </div>
        </div>
      </div>

      <div className="w-3/4 mx-auto mt-[-3rem] md:mt-[-7rem]">
        <Image src={videoFrame} />

        {/* <div className=" -mt-[236px] m-auto z-50 relative w-20 h-20 bg-[#f355257a] rounded-full flex justify-center items-center">
          <div className="w-14 h-14 bg-[#ffffff] rounded-full flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-orange-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 8a1 1 0 011-1h2a1 1 0 010 2H9a1 1 0 01-1-1zm0 4a1 1 0 011-1h2a1 1 0 010 2H9a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div> */}
      </div>
    </div>
  );
};
