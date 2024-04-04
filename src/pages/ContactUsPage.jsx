"use client";

import { ContactUsImagePage } from "@/components/ContactUs/ContactUsImagePage";
import { FormPart } from "@/components/ContactUs/FormPart";
import React, { useEffect, useState } from "react";

export const ContactUsPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      {!loading ? (
        <div className="mt-20">
          <ContactUsImagePage />
          <FormPart />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
