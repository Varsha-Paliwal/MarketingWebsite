"use client";
import Image from "next/image";
import React, { useState } from "react";
import featured from "@/image/featured.jpg";
import banner from "@/image/banner-02.jpg";
import banner3 from "@/image/banner-03.jpg";
import Link from "next/link";
import { questionAnswerData } from "@/staticData/HomeData";
const SecondPart = () => {
  const [selectedTab, setSelectedTab] = useState("Best");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div className=" mb-8 md:flex w-[80%] m-auto">
      <div className=" md:grid flex sm:justify-center mb-4 md:w-[28%] ">
        <Image src={featured} />
      </div>

      <div className=" md:w-[32%] m-auto">
        <h6 className="mb-4 text-[#ee626b] text-1xs uppercase font-semibold">
          | Featured
        </h6>
        <div className="mb-16 w-[95%] text-3xl  font-semibold">
          Best Appartment & Sea view
        </div>

        {questionAnswerData.map((item, index) => {
          return (
            <div key={index}>
              <button
                onClick={() => handleTabClick(item.buttonName)}
                className={`mb-8 bg-gray-100 outline-none ${
                  selectedTab == item.buttonName
                    ? "text-[#f35525]"
                    : "text-black"
                } `}
              >
                {item.question}
              </button>
              <h2
                className={`mb-8 ${
                  selectedTab == item.buttonName ? "" : "hidden"
                }`}
              >
                {item.answer1}{" "}
                <span className=" font-semibold"> {item.answer2}</span>
                {item.answer3}
                <Link
                  className="text-[#ee626b]"
                  href="https://www.google.com/search?q=best+free+css+templates"
                >
                  {item.answer4}
                </Link>
                {item.answer5}
              </h2>
            </div>
          );
        })}
      </div>
      <div className="md:grid md:flex sm:justify-center mb-4 md:w-[28%] ">
        <Image alt="banner" className=" mb-6 " src={banner} />
        <Image alt="banner" src={banner3} />
      </div>
    </div>
  );
};

export default SecondPart;
