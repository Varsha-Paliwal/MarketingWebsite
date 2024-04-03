import Image from "next/image";
import React from "react";
import { propertyDetails } from "@/staticData/HomeData";

export const PropertiesPart = () => {
  return (
    <div>
      <div className="mb-12 w-[30%] mx-auto text-center">
        <div className="mb-4 text-lg text-[#ee626b] font-bold">
          | Properties
        </div>
        <div className="text-4xl leading-tight font-bold">
          We Provide The Best Property You Like
        </div>
      </div>

      <div className="mb-8 w-[90%] mx-auto grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {propertyDetails.map((item, index) => {
          return (
            <div key={index}>
              <Image
                className="rounded-lg mb-8 "
                alt="property01"
                src={item.image}
              />
              <div className="w-[75%] mb-4 flex justify-between ">
                <div className="p-2 text-sm  font-semibold bg-[#fbd9cf]">
                  {item.title}
                </div>
                <div className="text-[#f35525] md:text-lg text-xl font-bold">
                  {item.prize}
                </div>
              </div>

              <div className=" mb-8 text-xl font-bold">{item.description}</div>

              {item.otherDetails.map((data, index) => {
                return (
                  <div key={index} className="mb-2 flex gap-4">
                    <div className=" text-[#4a4a4a] text-xl  font-bold">
                      {data.name}
                    </div>
                    <div className=" text-xl  font-bold">
                      {data.totalNumber}
                    </div>
                  </div>
                );
              })}

              <button className=" mt-8 mb-8   justify-center text-sm text-[#ffffff] rounded-full  mx-auto flex p-2 bg-[#1e1e1e]">
                Schedule a visit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
