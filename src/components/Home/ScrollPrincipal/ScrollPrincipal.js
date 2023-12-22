import Image from "next/image";
import style from "./ScrollPrincipal.module.css";
import { backgroundHome, flechaCirculo, scroll } from "@/styles";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import ModalCalculador from "@/components/ModalCalculador/ModalCalculador";
import { useSelector } from "react-redux";
import { CustomContainerMaxWidth } from "@/components/CustomConteinerMaxWidth/CustomContainerMaxWidth";

export default function ScrollPrincipal() {
  const [calculador, setCalculador] = useState(false);

  const resultadoCalc = useSelector(
    (state) => state.reducerInfoGarantia.calculador
  );

  const handleCalculador = () => {
    setCalculador(true);
  };
  const handleFormClick = (e) => {
    e.stopPropagation(); // Evita que el evento de clic se propague hacia arriba
  };
  return (
    <div className={`${style.ExtraContainerScrollPrincipal}`}>
      <div className={style.ContainerScrollPrincipal}>
        <div className={style.ContainerTitle}>
          <div className={style.Intro}>Somos Trust Fund</div>
          <div className={style.Titulo}>
            <div className={style.Text1}>Garantizamos</div>
            <div className={style.Text2}>tu alquiler</div>
          </div>
          <div className={style.subText}>
            Con mínimos requisitos. Obtené tu garantía de alquiler en tan solo
            24hs.
          </div>
          <div className={style.containerButtons}>
            <div
              className={style.ButtonHome}
              onClick={() => setCalculador(true)}
            >
              Cotizá tu garantía
            </div>
            <Image className={style.flecha} src={flechaCirculo} />
          </div>
        </div>
        <div className={style.contImage}>
          <Image
            className={style.FotoScrollPrincipal}
            alt="fotoPrincipal"
            src={backgroundHome}
          />
        </div>
      </div>
      <div className={style.footerHome}>
        <Image className={style.scrollFooter} src={scroll} alt="image" />
      </div>

      {calculador ? 
            <div className={style.ContainerModalCalculador}
         >

            <ModalCalculador  />
            </div>

     
       : null}
    </div>
  );
}
