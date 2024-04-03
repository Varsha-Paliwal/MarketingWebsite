import Image from "next/image";
import React from "react";
import { PropertiesPart } from "../homeComponents/PropertiesPart";
export const ImageCenter = () => {
  return (
    <div>
      <div className=" p-28 pageHeading-bg ">
        <div className=" md:w-[25%] mx-auto bg-white ">
          <p className="p-2 flex  justify-center  text-black mr-1.5 text-1xl font-bold">
            Home / Properties
          </p>
        </div>
        <div className="mt-4 p-2 flex  justify-center  text-white mr-1.5 text-5xl font-extrabold">
          PROPERTIES
        </div>
      </div>


      {/* <PropertiesPart /> */}
    </div>
  );
};
