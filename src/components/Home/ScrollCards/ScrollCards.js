// import { Image } from 'react-bootstrap';
import { useState, useEffect } from "react";
import Image from "next/image";
import style from "./ScrollCards.module.css";
import {
  inquilinos,
  propietarios,
  inmobiliarias,
  flechaModal,
  flechaModalBlue,
} from "@/styles";
import { useSelector } from "react-redux";

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

  const [mouseOver, setMouseOver] = useState(false);
  const [imageFlecha1, setImageFlecha1] = useState(flechaModalBlue)
  const [imageFlecha2, setImageFlecha2] = useState(flechaModalBlue)
  const [imageFlecha3, setImageFlecha3] = useState(flechaModalBlue)

  // const [translateValue, setTranslateValue] = useState(200);
  // const maxVerticalCoordinate = 1500;

  const resultadoCalc = useSelector((state) => state.reducerInfoGarantia.calculador);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Update translate value based on scroll position or any other logic
  //     if (window.scrollY > 1080 && window.scrollY < maxVerticalCoordinate) {
  //       window.addEventListener(
  //         "scroll",
  //         function (e) {
  //           console.log("entra preventDefault");
  //           e.preventDefault();
  //         },
  //         false
  //       );

  //       const newTranslateValue = translateValue - window.scrollY * 0.5; // Adjust the multiplier as needed
  //       setTranslateValue(newTranslateValue);
  //       console.log(newTranslateValue);

  //       const scrollY = window.scrollY || window.pageYOffset;
  //       console.log(scrollY);
  //     }

  //     // Si las coordenadas del scroll exceden el límite, ajusta la posición

  //     if (scrollY > maxVerticalCoordinate) {
  //       window.removeEventListener("scroll", handleScroll);
  //       window.removeEventListener(
  //         "scroll",
  //         function (e) {
  //           console.log("sale preventDefault");
  //           e.preventDefault();
  //         },
  //         false
  //       );
  //     }
  //   };

  //   const isClient = typeof window !== "undefined";

  //   if (isClient) {
  //     // Add the scroll event listener if running on the client side
  //     window.addEventListener("scroll", handleScroll);

  //     // Clean up the event listener on component unmount
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }
  // }, []);


  const handleMouseOver = (value) => {
    setMouseOver(true)

    if (value === 'card1') {
      setImageFlecha1(flechaModal);
    }
    if (value === 'card2') {
      setImageFlecha2(flechaModal);
    }
    if (value === 'card3') {
      setImageFlecha3(flechaModal);
    }

  };

  const handleMouseOut = (value) => {
    setMouseOver(false)

    if (value === 'card1') {
      setImageFlecha1(flechaModalBlue);
    }
    if (value === 'card2') {
      setImageFlecha2(flechaModalBlue);
    }
    if (value === 'card3') {
      setImageFlecha3(flechaModalBlue);
    }
  };


  return (
    <div className={`${resultadoCalc ? style.ContainerGeneralResultados : style.ContainerGeneral}`}>
      <div className={`${resultadoCalc ? style.ExtraContainerHeaderResultados : style.ExtraContainerHeader}`}>
        <div className={style.ContainerHeader}>
          <div className={style.TextHeader}>Protegemos todas las necesidades
            en el proceso de alquiler. </div>
        </div>
      </div>

      <div id="carousel-container" className={`${resultadoCalc ? style.ScrollCardsResultados : style.ScrollCards}`}>
        <div id="carousel" className={style.Carrousel}>
          {cards?.map((c) => {
            return (
              <div
                id={c.id}
                className={style.Card}
                onMouseOver={() => handleMouseOver(c.id)}
                onMouseOut={() => handleMouseOut(c.id)}
              // style={{ transform: `translateY(${translateValue}px)` }}
              >
                <div className={style.TextoCard}>
                  <div className={style.TitleCard}>{c.title}</div>
                  <div className={style.DescripcionCard}>{c.descripcion}</div>
                  <div className={style.ContainerCardArrow}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <div className={style.TextCardArrow}>Ver</div>
                      <div className={style.TextCardArrow}>más</div>
                    </div>
                    <Image
                      className={style.ImagenCard}
                      src={c.id === 'card1' ? imageFlecha1 : c.id === 'card2' ? imageFlecha2 : imageFlecha3} />
                  </div>
                </div>
                <Image className={style.flechaFooterCard} src={c.image} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
