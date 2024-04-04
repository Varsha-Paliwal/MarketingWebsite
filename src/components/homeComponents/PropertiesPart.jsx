import Image from "next/image";
import React from "react";
import { propertyDetails } from "@/staticData/HomeData";
import PropertiesPartAll from "../PropertiesPartAll";

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

     <PropertiesPartAll/>
    </div>
  );
};
