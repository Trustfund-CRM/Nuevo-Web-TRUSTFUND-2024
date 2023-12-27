import React, { useState, useEffect } from 'react';
import styles from './VerticalCarousel.module.css';
import style from "./ScrollCards.module.css";
import Image from "next/image";
import {
  inquilinos,
  propietarios,
  inmobiliarias,
  flechaModalBlue,
} from "@/styles";
import ScrollCards1 from "./ScrollCards"

const VerticalCarousel = () => {
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

  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseEnter = () => {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '23px'; // Ajusta el espacio del scroll
  };

  const handleMouseLeave = () => {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '0';
  };

  const handleWheel = (event) => {
    if (event.deltaY > 300) {
      // Scrolling down
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    } else {
      // Scrolling up
      setActiveIndex((prevIndex) => {
        const nextIndex = prevIndex - 1;
        return nextIndex < 0 ? cards.length - 1 : nextIndex;
      });
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <div
        className={styles.carousel}
        style={{ transform: `translateY(${-activeIndex * 350}px)` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${styles.card} ${index === activeIndex && styles.active}`}
          >
            <div className={style.TextoCard}>
              <div className={style.TitleCard}>{card.title}</div>
              <div className={style.DescripcionCard}>{card.descripcion}</div>
              <Image className={style.ImagenCard} src={flechaModalBlue} alt="image"/>
            </div>
            <Image className={style.flechaFooterCard} src={card.image} alt="image"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalCarousel;
