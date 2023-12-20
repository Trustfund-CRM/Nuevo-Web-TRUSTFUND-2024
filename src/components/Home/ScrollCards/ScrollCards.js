"use client";
// import { Image } from 'react-bootstrap';
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import style from "./ScrollCards.module.css";
import {
  inquilinos,
  propietarios,
  inmobiliarias,
  flechaModalBlue,
} from "@/styles";
import { useSelector } from "react-redux";
import { CustomContainerMaxWidth } from "@/components/CustomConteinerMaxWidth/CustomContainerMaxWidth";
import { CustomLine } from "@/components/CustomLine/CustomLine";

export default function ScrollCards() {
  const cards = [
    {
      title: "Inquilinos",
      descripcion:
        "Somos tu mejor opción. Nuestra garantía de alquiler es rápida, accesible, segura y sin trámites engorrosos. Obtenela 100% online y en menos de 24hs.",
      image: inquilinos,
      id: "card1",
    },
    {
      title: "Propietarios",
      descripcion:
        "Te aseguramos el pago mensual del alquiler, expensas, servicios y el cuidado de tu propiedad. Cubrimos gastos legales de un posible desalojo del inquilino.",
      image: propietarios,
      id: "card2",
    },
    {
      title: "Inmobiliarias",
      descripcion:
        "Contamos con un protocolo de alto nivel, preparado para responder ágilmente ante posibles incumplimientos del inquilino en el contrato de alquiler.",
      image: inmobiliarias,
      id: "card3",
    },
  ];

  const resultadoCalc = useSelector(
    (state) => state.reducerInfoGarantia.resultado
  );

  const [isCarouselVisible, setIsCarouselVisible] = useState(false);
  const carouselRef = useRef();

  return (
    <div className={`${style.ContainerGeneral}`}>
      <CustomContainerMaxWidth>
        <div className={style.ExtraContainerHeader}>
          <div className={style.TextHeader}>
            Protegemos todas las necesidades en el proceso de alquiler.{" "}
          </div>
          <CustomLine color={'#333'} custom={{ bottom: '0px' }} />
        </div>
        <div id="carousel" className={style.Carrousel} ref={carouselRef}>
          {cards?.map((c, index) => {
            return (
              <div
                id={c.id}
                className={style.Card}
                style={{ transform: `translateY(${index}em)` }}
                key={index}
              >
                <div className={style.TextoCard}>
                  <div className={style.TitleCard}>{c.title}</div>
                  <div className={style.DescripcionCard}>{c.descripcion}</div>
                  {/* <Image className={style.ImagenCard} src={flechaModalBlue} /> */}
                </div>
                <Image className={style.cardImage} src={c.image} />
              </div>
            );
          })}
        </div>
      </CustomContainerMaxWidth>
    </div>
  );
}
