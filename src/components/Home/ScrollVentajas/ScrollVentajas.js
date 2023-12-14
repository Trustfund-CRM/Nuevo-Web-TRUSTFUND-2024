import Image from "next/image";
import style from "./ScrollVentajas.module.css";
import { flechaModalBlue } from "@/styles";
import "./effectLetters.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

export default function ScrollVentajas() {

  const resultadoCalc = useSelector(
    (state) => state.reducerInfoGarantia.calculador
  );


  // const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect(() => {

  //   if (typeof window !== 'undefined') {

  //     const handleScroll = () => {
  //       const currentPosition = window?.scrollY;
  //       setScrollPosition(currentPosition);
  //     };

  //     // Attach the scroll event listener
  //     window?.addEventListener('scroll', handleScroll);

  //     // Clean up the event listener on component unmount
  //     return () => {
  //       window?.removeEventListener('scroll', handleScroll);
  //     };
  //   }

  // }, []);

  // Define a function to calculate the background color based on scroll position
  // const calculateBackgroundColor = () => {
  //   // Your logic to determine the background color based on scroll position
  //   // For example, you can use conditional statements or a mathematical formula
  //   // Here, we change the background color based on the scroll position
  //   const hue = (scrollPosition / window?.innerHeight) * 360;
  //   return `hsl(${hue}, 50%, 50%)`;
  // };

  return (
    <div
      className={`${
        style.ContainerScrollVentajas
        }`}
      // style={ `${scrollPosition > 3000 ? { backgroundColor: '#009FBB' } : { backgroundColor: '#FFFFFF' } }`}
    >
      <div className={style.ContainerTop}>
        <div className={style.TitleVentajas}>
          Ventajas de utilizar Trust Fund
        </div>
      </div>

      <div className={style.ContainerBottom}>
        <div className={style.subContainerBottom}>
          <div className={style.subTitle}>
            <div className={style.subTextLeft}>
              Rápido para el inquilino, seguro para el propietario, confiable
              para la inmobiliaria.
            </div>
            <div className={style.subTextRight}>
              Alquilá con tranquilidad, con Trust Fund estás protegido.
            </div>
          </div>
          <Image className={style.buttonVerMas} src={flechaModalBlue} />
        </div>

        <div className={style.ContainerScrollingText}>
          <div className={style.preText}>Tu garantía de alquiler</div>
          <div className="wrapper">
            <div className="words">
              <span className="word primary">con firma electrónica.</span>
              <span className="word secondary">100% Online.</span>
              <span className="word terciary">en menos de 24hs.</span>
              <span className="word fourty">con pagos a medida.</span>
              <span className="word primary">personalizada.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
