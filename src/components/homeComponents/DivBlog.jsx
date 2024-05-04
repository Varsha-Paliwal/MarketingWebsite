import { devBlobPart } from "@/staticData/HomeData";
import React from "react";

function DivBlog() {
  return (
    <div className="mb-[20px] md:w-[80%] md:flex mx-auto">
      {devBlobPart.map((item, index) => {
        return (
          <div
            key={index}
            className=" mb-4  items-center text-center p-[10px] flex bg-[#f7d8ce] w-[70%] md:w-[30%] mx-auto"
          >
            <div className=" w-[30%] text-[#f35525] text-3xl  font-bold text-center ">
              {item.number}
            </div>
            <div className=" w-[70%] text-center font-bold  ">{item.title}</div>

            <div className="relative right-[-8%] top-[-30px] md:top-[-60%]  w-16 h-12 bg-[#f35525] rounded-full  "></div>
          </div>
        );
      })}
    </div>
  );
}

export default DivBlog;
