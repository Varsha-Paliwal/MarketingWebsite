"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { navBarArray, navBarLogoName } from "@/staticData/NavBarData";
import MenuButton from "../image/MenuButton.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState("/");
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    setActiveNavLink(pathname);
    setLoading(false);
  }, []);
  return (
    <>
      {!loading ? (
        <nav className="fixed inset-x-0 top-0 z-50 bg-white py-4 ">
          <div className="container mx-auto px-4 lg:px-0">
            <div className="flex justify-between items-center">
              <div className="ml-4">
                <Link href="/" className="text-[#1e1e1e] text-xl font-semibold">
                  {navBarLogoName}
                </Link>
              </div>

              <div className="hidden md:flex items-center space-x-8">
                {navBarArray.map((item) => (
                  <Link
                    href={item.link}
                    key={item.id}
                    className={`${
                      activeNavLink === item.link
                        ? "text-[#f35525]"
                        : "text-[#1e1e1e] font-medium"
                    } hover:text-[#f35525] transition duration-300`}
                    onClick={() => setActiveNavLink(item.link)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              <div className="md:hidden">
                {!isModalOpen ? (
                  <button
                    onClick={toggleModal}
                    className="text-[#1e1e1e] font-medium focus:outline-none"
                  >
                    <Image src={MenuButton} alt="Menu" className="h-6 w-6" />
                  </button>
                ) : (
                  <button
                    onClick={toggleModal}
                    className="text-black font-normal text-4xl "
                  >
                    x
                  </button>
                )}
              </div>
            </div>

            {isModalOpen && (
              <div className="-mt-8 absolute flex justify-center items-center w-full top-full transform translate-y-2">
                <div
                  className="relative bg-white p-4 w-[50%] rounded-lg shadow-lg"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex flex-col items-center space-y-4">
                    {navBarArray.map((item) => (
                      <Link
                        href={item.link}
                        key={item.id}
                        className={`${
                          activeNavLink === item.link
                            ? "text-[#f35525]"
                            : "text-[#1e1e1e] font-medium"
                        } text-center hover:text-[#f35525] transition duration-300`}
                        onClick={() => {
                          setActiveNavLink(item.link);
                          toggleModal();
                        }}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      ) : (
        <div>loading</div>
      )}
    </>
  );
};
