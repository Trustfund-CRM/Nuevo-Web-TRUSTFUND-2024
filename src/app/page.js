"use client";

import '../utils/bootstrap';
import { Footer, NavbarPrincipal } from '@/components';
import ScrollPrincipal from '@/components/Home/ScrollPrincipal/ScrollPrincipal';
import { CalculadorPrincipal } from '@/components/CalculadorPrincipal';
import { Conocenos } from '@/components/Conocenos';
import { Franquicia } from '@/components/Franquicia';
import ButtonWsp from '@/components/ButtonWsp/ButtonWsp';
import ScrollCards from '@/components/Home/ScrollCards/ScrollCards';
import TextoSlide from '@/components/Home/TextoSlide/TextoSlide';
import ScrollVentajas from '@/components/Home/ScrollVentajas/ScrollVentajas';
import SeccionComentarios from '@/components/Home/Comentarios/SeccionComentarios';
import PreguntasFrecuentes from '@/components/Home/FAQ/PreguntasFrecuentes';
import ModalCalculador from '@/components/ModalCalculador/ModalCalculador';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Home() {

  const [mobile, setMobile] = useState(false);
  const [calculador, setCalculador] = useState(false);


  useEffect(() => {
    if (typeof window !== 'undefined') {

      if (window?.innerWidth < 765) {
        setMobile(true)
      }
    }
  }, [])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
      }}
    >
      <NavbarPrincipal />
      <ScrollPrincipal />
      {
        mobile && <ModalCalculador setCalculador={setCalculador}/>
      }
      <TextoSlide />
      <ScrollCards />
      <ScrollVentajas />
      <SeccionComentarios />
      <PreguntasFrecuentes />
      <ButtonWsp />
      <Footer />
    </div>
  );
}
