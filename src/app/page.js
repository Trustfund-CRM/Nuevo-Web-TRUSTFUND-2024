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

export default function Home() {

  return (

    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
      <NavbarPrincipal />
      <ScrollPrincipal />
      <TextoSlide />
      <ScrollCards />
      <ScrollVentajas />
      <SeccionComentarios />
      <PreguntasFrecuentes />
      <ButtonWsp />
      <Footer />
    </div>

  )
}


