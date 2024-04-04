"use client";

import { FirstPropertyDetail } from "@/components/ propertyDetails/FirstPropertyDetail";
import { OtherPart } from "@/components/ propertyDetails/OtherPart";
import { BestDeal } from "@/components/homeComponents/BestDeal";
import React, { useEffect, useState } from "react";

export const PropertyDetailsPart = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      {!loading ? (
        <div className="mt-20">
          <FirstPropertyDetail />
          <OtherPart />
          <BestDeal />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
