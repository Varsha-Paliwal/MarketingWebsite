import Image from "next/image";
import React from "react";
import { homeProperties, homePropertiesText, propertyDetails } from "@/staticData/HomeData";
import PropertiesPartAll from "../PropertiesPartAll";

export const PropertiesPart = () => {
  return (
    <div>
      <div className="mb-12 w-[30%] mx-auto text-center">
        <div className="mb-4 text-lg text-[#ee626b] font-bold">
          {homeProperties}
        </div>
        <div className="text-4xl leading-tight font-bold">
        {homePropertiesText}
        </div>
      </div>

     <PropertiesPartAll/>
    </div>
  );
};
