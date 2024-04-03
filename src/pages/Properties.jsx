"use client";
import { ImageCenter } from "@/components/propertiesComponents/ImageCenter";
import React, { useEffect, useState } from "react";

export const Properties = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      {!loading ? (
        <div className="mt-20 z-50 relative">
          <ImageCenter />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
