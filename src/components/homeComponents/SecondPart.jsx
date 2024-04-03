import Image from "next/image";
import React from "react";
import featured from "@/image/featured.jpg";
import banner from "@/image/banner-02.jpg";
import banner3 from "@/image/banner-03.jpg";
import Link from "next/link";
const SecondPart = () => {
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
        <button className="mb-8 text-[#f35525] bg-gray-100 outline-none">
          Best useful links ?
        </button>
        <h2 className=" mb-8">
          Get <span className=" font-semibold">the best villa</span> website
          template in HTML CSS and Bootstrap for your business. TemplateMo
          provides you the
          <Link
            className="text-[#ee626b]"
            href="https://www.google.com/search?q=best+free+css+templates"
          >
            best free CSS templates
          </Link>
          in the world. Please tell your friends about it.
        </h2>
        <button className="  mb-8 shadow-none text-xl font-medium text-[#1e1e1e]">
          How does this work ?
        </button>
        <button className="  mb-8 shadow-none text-xl font-medium text-[#1e1e1e]">
          Why is Villa Agency the best ?
        </button>
      </div>
      <div className="md:grid md:flex sm:justify-center mb-4 md:w-[28%] ">
        <Image alt="banner" className=" mb-6 " src={banner} />
        <Image alt="banner" src={banner3} />
      </div>
    </div>
  );
};

export default SecondPart;
