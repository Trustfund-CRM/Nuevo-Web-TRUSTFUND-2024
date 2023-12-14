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

  return (
    <div
      className={`${resultadoCalc
        ? style.ContainerScrollVentajasResultados
        : style.ContainerScrollVentajas
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
