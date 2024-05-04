import { contactName, contactus } from "@/staticData/ContactData";
import React from "react";

export const ContactUsImagePage = () => {
  return (
    <div>
      <div className=" mb-24 p-28 pageHeading-bg ">
        <div className=" md:w-[25%] mx-auto bg-white ">
          <p className="p-2 flex  justify-center  text-black mr-1.5 text-1xl font-bold">
            {contactName}
          </p>
        </div>
        <div className="mt-4 p-2 flex  justify-center  text-white mr-1.5 text-5xl font-black">
          {contactus}
        </div>
      </div>
    </div>
  );
};
