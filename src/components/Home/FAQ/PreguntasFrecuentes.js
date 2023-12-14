import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import style from "./PreguntasFrecuentes.module.css";
import { Button } from "react-bootstrap";
import { imgInquilinos, imgPropietarios, flechaModalBlue } from "@/styles";
import { CustomAccordion } from "@/components/CustomAccordion/CustomAccordion";
import { Questions } from "./objectText";
import { ButtonSlider } from "@/components/ButtonSlider/ButtonSlider";

export default function PreguntasFrecuentes() {
  const [inquilinosOPropietarios, setInquilinosOPropietarios] =
    useState("inquilinos");
  const [displayRespuesta, setDisplayRespuesta] = useState(0);

  const resultadoCalc = useSelector(
    (state) => state.reducerInfoGarantia.calculador
  );

  const handleDisplayRespuesta = (value) => {
    if (displayRespuesta !== 0) {
      setDisplayRespuesta(0);
    } else {
      if (value === 1) {
        setDisplayRespuesta(1);
      }

      if (value === 2) {
        setDisplayRespuesta(2);
      }

      if (value === 3) {
        setDisplayRespuesta(3);
      }
    }
  };

  return (
    <div
      className={`${
        resultadoCalc ? style.ContainerFAQResultados : style.ContainerFAQ
      }`}
    >
      <div className={style.TitleFAQ}>
        <div style={{ width: "84%" }}>
          <div className={style.Title}>Preguntas frecuentes</div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className={style.ContainerSubTitle}>
          <div className={style.ButtonsInquiProp}>
            <div
              className={`${
                inquilinosOPropietarios === "inquilinos"
                  ? style.ButtonInquiActivo
                  : style.ButtonInqui
              }`}
              onClick={() => setInquilinosOPropietarios("inquilinos")}
            >
              Inquilinos
            </div>
            <div
              className={`${
                inquilinosOPropietarios === "propietarios"
                  ? style.ButtonPropActivo
                  : style.ButtonProp
              }`}
              onClick={() => setInquilinosOPropietarios("propietarios")}
            >
              Propietarios e Inmobiliarias
            </div>
          </div>

          <ButtonSlider
            text={"Ver más"}
            customBackground={{'background': '#E6EAEE', 'color': '#004993'}}
            isPrimary={false}
          />
        </div>

        <div className={style.ContainerBottom}>
          <div className={style.ContainerPreguntas}>
            {Questions.map((obj) => (
              <CustomAccordion object={obj} key={obj.id} />
            ))}
          </div>

          {inquilinosOPropietarios === "inquilinos" ? (
            <Image className={style.ImageInquilinoProp} src={imgInquilinos} />
          ) : (
            <Image className={style.ImageInquilinoProp} src={imgPropietarios} />
          )}
        </div>
      </div>
    </div>
  );
}
