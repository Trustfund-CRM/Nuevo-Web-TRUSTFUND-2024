"use client";

import '../utils/bootstrap';
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
//import { ParallaxProvider } from 'react-scroll-parallax';


export default function Home() {

  return (
      <main
      >
        <section>
          <ScrollPrincipal />
          <TextoSlide />
          <ScrollCards />
          <ScrollVentajas />
          <SeccionComentarios />
          <PreguntasFrecuentes />
          <ButtonWsp />
        </section>
      </main>
  )
}


