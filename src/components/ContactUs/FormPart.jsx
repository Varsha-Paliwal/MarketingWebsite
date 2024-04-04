import React from "react";
import phoneIcon from "@/image/phone-icon.png";
import Image from "next/image";
import emailIcon from "@/image/email-icon.png";

export const FormPart = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div>
          <div className="mb-8 text-xl text-[#ee626b] font-bold">
            | Contact Us
          </div>
          <div className="mb-8  text-4xl  font-bold">
            Get In Touch <br /> With Our Agents
          </div>
          <div className="mb-8 leading-8 text-[#4a4a4a] text-lg">
            When you really need to download free CSS templates, please remember
            our website TemplateMo. Also, tell your friends about our website.
            Thank you for visiting. There is a variety of Bootstrap HTML CSS
            templates on our website. If you need more information, please
            contact us.
          </div>

          <div className=" p-8 mb-8 shadow-xl md:w-[70%] grid grid-cols-2 mx-auto">
            <Image src={phoneIcon} alt="phoneIcon" />
            <div>
              <div className="text-xl text-[#1e1e1e] font-bold">
                010-020-0340
              </div>
              <div className="text-[#aaaaaa]"> Phone Number</div>
            </div>
          </div>

          <div className=" p-8 mb-8 shadow-xl md:w-[70%] grid grid-cols-2 mx-auto">
            <Image src={emailIcon} alt="phoneIcon" />
            <div>
              <div className="text-xl text-[#1e1e1e] font-bold">
                info@villa.co
              </div>
              <div className="text-[#aaaaaa]"> Business Email</div>
            </div>
          </div>
        </div>

        <div className="w-[90%] mx-auto shadow-xl p-16 mb-16 ">
          <form>
            <div className="mb-6">
              <label for="full-name" className=" mb-6 text-xl block">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="rounded-full w-[90%] bg-[#f6f6f6] border  px-4 py-2"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-6">
              <label for="Email" className=" mb-6 text-xl block">
                Email Address
              </label>
              <input
                type="text"
                id="Email"
                name="Email"
                className="rounded-full w-[90%] bg-[#f6f6f6] border  px-4 py-2"
                placeholder="Your Email.."
              />
            </div>

            <div className="mb-6">
              <label for="Subject" className=" mb-6 text-xl block">
                Subject
              </label>
              <input
                type="text"
                id="Subject"
                name="Subject"
                className="rounded-full w-[90%] bg-[#f6f6f6] border  px-4 py-2"
                placeholder="Subject.."
              />
            </div>

            <div className="mb-6">
              <label for="Message" className=" mb-6 text-xl block">
                Message
              </label>
              <input
                type="text"
                id="Message"
                name="Message"
                className="rounded-full w-[90%] bg-[#f6f6f6] border  px-4 py-2"
                placeholder="Your Message"
              />
            </div>

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
