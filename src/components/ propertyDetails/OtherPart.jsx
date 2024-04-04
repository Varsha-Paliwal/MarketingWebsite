"use client"
import Image from "next/image";
import React, { useState } from "react";
import singleProperty from "@/image/single-property.jpg";
import { contractData } from "@/staticData/PropertiesData";
import Link from "next/link";
import { questionAnswerData } from "@/staticData/HomeData";
export const OtherPart = () => {

    const [selectedTab, setSelectedTab] = useState("");

    const handleTabClick = (tab) => {
      setSelectedTab(tab);
    };
  return (
    <>
      <div className=" w-[95%] mx-auto grid  grid-cols-1 md:grid-cols-2">
        <div className="w-[100%] mx-auto">
          <Image src={singleProperty} alt="singleProperty" />

          <div className="mt-8 p-2 justify-center flex text-sm w-[20%] text-[#1e1e1e] font-medium bg-[#fbd9cf]">
            Apparment
          </div>
          <div className="mt-8 text-2xl font-bold">
            24 New Street Miami, OR 24560
          </div>
          <div className="mt-16 leading-7 text-[#4a4a4a] text-sm">
            Get the best villa agency HTML CSS Bootstrap Template for your
            company website. TemplateMo provides you the best free CSS templates
            in the world. Please tell your friends about it. Thank you. Cloud
            bread kogi bitters pitchfork shoreditch tumblr yr succulents
            single-origin coffee schlitz enamel pin you probably haven't heard
            of them ugh hella.
          </div>
          <div className="  leading-7  mt-8 text-[#4a4a4a] text-sm">
            When you look for free CSS templates, you can simply type TemplateMo
            in any search engine website. In addition, you can type TemplateMo
            Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse
            +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard
            PBR&B DSA poutine neutra cardigan hoodie pop-up.
          </div>

          <div className="w-[90%] mx-auto mt-8">
            {questionAnswerData.map((item, index) => {
              return (
                <div key={index}>
                  <button
                    onClick={() => handleTabClick(item.buttonName)}
                    className={`mb-8 bg-gray-100 outline-none  font-bold ${
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
        </div>

        <div>
          {contractData.map((item, index) => {
            return (
              <div key={index} className="w-[50%] mt-16 md:mt-0 mb-16 mx-auto">
                <div className=" grid grid-cols-2">
                  <Image src={item.image} alt="infoIcon1" />
                  <div>
                    <div className=" font-bold text-xl"> {item.title}</div>
                    <div className=" font-bold text-[#aaa]">{item.other}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
