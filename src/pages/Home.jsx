"use client";
import React, { useEffect, useState } from "react";
import { BestDeal } from "@/components/homeComponents/BestDeal";
import DivBlog from "@/components/homeComponents/DivBlog";
import SecondPart from "@/components/homeComponents/SecondPart";
import { VideoView } from "@/components/homeComponents/VideoView";
import { PropertiesPart } from "@/components/homeComponents/PropertiesPart";
import { ImagePart } from "@/components/homeComponents/ImagePart";

export const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      {!loading ? (
        <>
          <ImagePart />
          <SecondPart />
          <VideoView />
          <DivBlog />
          <BestDeal />
          <PropertiesPart />
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};
