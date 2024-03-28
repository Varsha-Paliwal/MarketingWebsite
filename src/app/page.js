import { Header } from "@/components/Header";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default page;
export function generateMetadata({ params }) {
  return {
    title: "Header",
  };
}
