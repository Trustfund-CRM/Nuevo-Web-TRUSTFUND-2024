"use client";
import { useState, useEffect } from "react";

import "../utils/bootstrap";

import ButtonWsp from "@/components/ButtonWsp/ButtonWsp";
import SeccionComentarios from "@/components/Home/Comentarios/SeccionComentarios";
import PreguntasFrecuentes from "@/components/Home/FAQ/PreguntasFrecuentes";
import ScrollCards from "@/components/Home/ScrollCards/ScrollCards";
import ScrollPrincipal from "@/components/Home/ScrollPrincipal/ScrollPrincipal";
import ScrollVentajas from "@/components/Home/ScrollVentajas/ScrollVentajas";
import TextoSlide from "@/components/Home/TextoSlide/TextoSlide";
import ModalCalculador from "@/components/ModalCalculador/ModalCalculador";


export default function Home() {
  const [mobile, setMobile] = useState(false);
  const [calculador, setCalculador] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window?.innerWidth < 765) {
        setMobile(true);
      }
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
      }}
    >
      <ScrollPrincipal />
      {mobile && <ModalCalculador setCalculador={setCalculador} calculador={calculador} />}
      <TextoSlide />
      <ScrollCards />
      <ScrollVentajas />
      <SeccionComentarios />
      <PreguntasFrecuentes />
      <ButtonWsp />
    </div>
  );
}
