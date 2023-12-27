'use client'
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

const ScrollCards1 = () => {
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



  return (
    <div>
       {/*  {cards.map((c, index) => {
          return (
            <div
              id={c.id}
              className={style.Card}
           
              key={index}
            >
              <div className={style.TextoCard}>
                <div className={style.TitleCard}>{c.title}</div>
                <div className={style.DescripcionCard}>{c.descripcion}</div>
                <Image className={style.ImagenCard} src={flechaModalBlue} alt="image"/>
              </div>
              <Image className={style.flechaFooterCard} src={c.image} alt="image"/>
            </div>
          );
        })} */}
        hola
    </div>

    
  );
}

export default ScrollCards1