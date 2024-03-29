import { CenterPart } from "@/pages/CenterPart";
import { Footer } from "@/pages/Footer";
import { Header } from "@/pages/Header";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <CenterPart />
    
    </>
  );
};

export default page;
export function generateMetadata({ params }) {
  return {
    title: "Header",
  };
}
