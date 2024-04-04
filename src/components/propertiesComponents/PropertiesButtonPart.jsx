import React, { useState } from "react";

export const PropertiesButtonPart = () => {
  const [selectedTab, setSelectedTab] = useState("Show All");
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div className="md:w-[60%] w-[70%] mx-auto grid gap-x-2  grid-cols-2 md:grid-cols-4 gap-8 md:gap-8 mb-16">
      <button
        // key={i}
        onClick={() => handleTabClick("Show All")}
        className={`md:p-5  justify-center md:text-lg text-xs  text-[#ffffff] flex items-center w-[70%] md:w-full h-[200%] md:h-[50%] ${
          selectedTab == "Show All" ? "bg-[#f35525]" : "bg-[#1e1e1e]"
        }  `}
      >
        Show All
      </button>

      <button
        // key={i}
        onClick={() => handleTabClick("Apartment")}
        className={`md:p-5  justify-center md:text-lg text-xs  text-[#ffffff] flex items-center w-[70%] md:w-full h-[200%] md:h-[50%] ${
          selectedTab == "Apartment" ? "bg-[#f35525]" : "bg-[#1e1e1e]"
        }  `}
      >
        Apartment
      </button>
      <button
        // key={i}
        onClick={() => handleTabClick("Villa House")}
        className={`md:p-5  justify-center md:text-lg text-xs  text-[#ffffff] flex items-center w-[70%] md:w-full h-[200%] md:h-[50%] ${
          selectedTab == "Villa House" ? "bg-[#f35525]" : "bg-[#1e1e1e]"
        }  `}
      >
        Villa House
      </button>
      <button
        // key={i}
        onClick={() => handleTabClick("Penthouse")}
        className={`md:p-5  justify-center md:text-lg text-xs  text-[#ffffff] flex items-center w-[70%] md:w-full h-[200%] md:h-[50%] ${
          selectedTab == "Penthouse" ? "bg-[#f35525]" : "bg-[#1e1e1e]"
        }  `}
      >
        Penthouse
      </button>
    </div>
  );
};
