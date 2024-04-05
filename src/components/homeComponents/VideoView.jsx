import Image from "next/image";
import React from "react";
import videoFrame from "@/image/video-frame.jpg";
import { videoData, videoText } from "@/staticData/HomeData";

export const VideoView = () => {
  return (
    <div className="w-[98%] mb-24 m-auto">
      <div className=" px-[85px] py-[39px] pb-[196px] text-center bg-cover video-bg bg-center h-full flex flex-col justify-center items-center">
        <div>
          <p className="text-[#ee626b] text-lg font-bold">{videoData}</p>
        </div>
        <div style={{ width: "70%", margin: "0px auto" }}>
          <div className=" leading-normal m-auto sm:w-[90%] md:w-[40%] lg:w-[40%] text-4xl font-bold text-[#ffffff] mt-4">
            {videoText}
          </div>
        </div>
      </div>

      <div className="w-3/4 mx-auto mt-[-3rem] md:mt-[-7rem]">
        <Image src={videoFrame} />
      </div>
    </div>
  );
};
