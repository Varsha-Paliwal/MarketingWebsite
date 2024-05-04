import { Home } from "@/pages/Home";
import React from "react";

const page = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default page;
export function generateMetadata({ params }) {
  return {
    title: "Live View Page -  591 villa agency Template",
  };
}
