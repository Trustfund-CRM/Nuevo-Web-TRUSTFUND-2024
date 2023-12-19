"use client";

import { SectionTop } from "@/components/nuestraGrantia";
import SectionBottom from "@/components/nuestraGrantia/SectionBottom/SectionBottom";
import SectionMid from "@/components/nuestraGrantia/SectionMid/SectionMid";
import { Footer, NavbarPrincipal } from "@/components";

import React from "react";

export default function page({}) {
  return (
    <>
      <SectionTop />

      <SectionMid />

      <SectionBottom />
    </>
  );
}
