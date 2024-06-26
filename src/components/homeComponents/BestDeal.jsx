"use client";
import { bestDeal, bestRight, buttonName, buttonontent } from "@/staticData/HomeData";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const BestDeal = () => {
  const [selectedTab, setSelectedTab] = useState("Appartment");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div className="mb-16 p-14 w-[96%] mx-auto bg-[#dee2e647]">
      <div className="mb-12 text-lg font-semibold text-[#dc3545]">
        {bestDeal}
      </div>
      <div className="md:flex justify-around">
        <div className="mb-12 md:w-[30%] font-semibold text-4xl">
         {bestRight}
        </div>

        <div className="md:w-[40%] w-[100%] mx-auto grid gap-x-2 grid-cols-3 gap-8 md:gap-8 mb-16">
          {buttonName.map((item, i) => {
            return (
              
              <button
                key={i}
                onClick={() => handleTabClick(item.name)}
                className={`md:p-5 p-2  justify-center md:text-lg text-xs  text-[#ffffff] flex items-center  md:h-[50%]  ${
                  selectedTab == item.name ? "bg-[#f35525]" : "bg-[#1e1e1e]"
                }  `}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </div>

      {buttonontent
        .filter((item) => item.buttonName == selectedTab)
        .map((item, index) => {
          return (
            <div key={index} className=" md:justify-between md:flex mt-8">
              <div className="mb-8 md:w-[30%] p-4 shadow-xl">
                {item.content.map((data, index) => {
                  return (
                    <div
                      className="  p-4  justify-between md:space-x-8 flex"
                      key={index}
                    >
                      <div className=" text-xl text-[#aaa]">{data.name}</div>
                      <div className=" font-bold  text-xl ">
                        {data.numberData}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mb-8 md:w-[30%]">
                <Image alt="dealImage" src={item.image} />
              </div>

              <div className="md:w-[30%]">
                <div className=" mb-6 font-bold  text-1xl ">{item.title}</div>
                <p className="text-[#4a4a4a] mb-6">{item.paraFirst}</p>
                <p className=" text-[#4a4a4a] mb-6">{item.paraSecond}</p>

                <button className="justify-center text-sm text-[#ffffff] rounded-full w-1/2 mx-auto flex p-2 bg-[#1e1e1e]">
                <Link
                onClick={() => setActiveNavLink("/")}
                href="/"
                className="font-semibold"
              >
                Schedule a visit
              </Link>
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};
