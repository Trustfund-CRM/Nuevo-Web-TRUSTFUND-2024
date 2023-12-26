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
import FormNewsletter from "@/components/FormNewsletter/FormNewsletter";
import { useDispatch, useSelector } from "react-redux";
import { setCalculador } from "@/redux/Actions/actionCalculadorPrincipal";

export default function Home() {






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

      {/* <TextoSlide /> */}
      {/* <ScrollCards /> */}
      {/* <ScrollVentajas /> */}
      {/* <SeccionComentarios /> */}
      {/* <PreguntasFrecuentes /> */}
      {/* {modalSuscribe && (
        <FormNewsletter />
      )
      } */}
      {/* <ButtonWsp /> */}
    </div>
  );
}
