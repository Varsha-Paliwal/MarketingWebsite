import React from "react";
import phoneIcon from "@/image/phone-icon.png";
import Image from "next/image";
import emailIcon from "@/image/email-icon.png";
import {
  contactus,
  formData,
  para,
  phoneEmail,
} from "@/staticData/ContactData";

export const FormPart = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div>
          <div className="mb-8 text-xl text-[#ee626b] font-bold">
            | {contactus}
          </div>
          <div className="mb-8  text-4xl  font-bold">
            Get In Touch <br /> With Our Agents
          </div>
          <div className="mb-8 leading-8 text-[#4a4a4a] text-lg">{para}</div>

          {phoneEmail.map((item, index) => {
            return (
              <div
                key={index}
                className=" p-8 mb-8 shadow-xl md:w-[70%] grid grid-cols-2 mx-auto"
              >
                <Image src={item.image} alt="phoneIcon" />
                <div>
                  <div className="text-xl text-[#1e1e1e] font-bold">
                    {item.data}
                  </div>
                  <div className="text-[#aaaaaa]">{item.text}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-[90%] mx-auto shadow-xl p-16 mb-16 ">
          <form>
            {formData.map((item, index) => {
              return (
                <div className="mb-6">
                  <label for={item.name} className=" mb-6 text-xl block">
                    {item.name}
                  </label>
                  <input
                    type="text"
                    id={item.name}
                    name={item.name}
                    className="rounded-full w-[90%] bg-[#f6f6f6] border  px-4 py-2"
                    placeholder={item.placeholder}
                  />
                </div>
              );
            })}

            <div className="mt-8 mb-8">
              <button className="ml-2 mr-2 justify-center text-sm text-[#ffffff] rounded-full flex p-2 bg-[#1e1e1e]">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
