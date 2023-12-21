import Image from "next/image";
import style from "./ScrollPrincipal.module.css";
import { backgroundHome, flechaCirculo, scroll } from "@/styles";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import ModalCalculador from "@/components/ModalCalculador/ModalCalculador";
import { useDispatch, useSelector } from "react-redux";
import { CustomContainerMaxWidth } from "@/components/CustomConteinerMaxWidth/CustomContainerMaxWidth";
import { setCalculador } from "@/redux/Actions/actionCalculadorPrincipal";

export default function ScrollPrincipal() {
  // const [calculador, setCalculador] = useState(false);

  const settedCalculador = useSelector(
    (state) => state.reducerInfoGarantia.calculador
  );

  const resultadoCalc = useSelector(
    (state) => state.reducerInfoGarantia.resultado
  );

  const dispatch = useDispatch();

  const handleCalculador = () => {
    dispatch(setCalculador());
  };

  return (
    <div className={`${style.ExtraContainerScrollPrincipal}`}>
      <CustomContainerMaxWidth>
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
            <div
              className={style.containerButtons}
              onClick={() => handleCalculador()}
            >
              <Button className={style.ButtonHome}>Cotizá tu garantía</Button>
              <Image className={style.flecha} src={flechaCirculo} />
            </div>
          </div>
        </div>
        <div className={style.footerHome}>
          <Image className={style.scrollFooter} src={scroll} alt="image" />
        </div>

        {settedCalculador ? (
          <div
            className={`${
              resultadoCalc
                ? style.ContainerSubFooterCalculador
                : style.ContainerSubFooter
            }`}
          >
            <ModalCalculador setCalculador={setCalculador} />
          </div>
        ) : null}
      </CustomContainerMaxWidth>

      <div className={style.contImage}>
        <Image
          className={style.FotoScrollPrincipal}
          alt="fotoPrincipal"
          src={backgroundHome}
        />
      </div>
    </div>
  );
}
