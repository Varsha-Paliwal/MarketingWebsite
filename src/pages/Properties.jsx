"use client";
import PropertiesPartAll from "@/components/PropertiesPartAll";
import { ImageCenter } from "@/components/propertiesComponents/ImageCenter";
import { PropertiesButtonPart } from "@/components/propertiesComponents/PropertiesButtonPart";
import React, { useEffect, useState } from "react";

export const Properties = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      {!loading ? (
        <div className="mt-20">
          <ImageCenter />
          <PropertiesButtonPart />
          <PropertiesPartAll />
          <PropertiesPartAll />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
