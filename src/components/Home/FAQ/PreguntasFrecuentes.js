import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import style from "./PreguntasFrecuentes.module.css";
import { Button } from "react-bootstrap";
import { imgInquilinos, imgPropietarios, flechaModalBlue } from "@/styles";
import { CustomAccordion } from "@/components/CustomAccordion/CustomAccordion";
import { ButtonSlider } from "@/components/ButtonSlider/ButtonSlider";
import { CustomContainerMaxWidth } from "@/components/CustomConteinerMaxWidth/CustomContainerMaxWidth";
import { handleQuestions } from "./objectText";
import { CustomLine } from "@/components/CustomLine/CustomLine";

export default function PreguntasFrecuentes() {
  const [inquilinosOPropietarios, setInquilinosOPropietarios] =
    useState("inquilinos");
  const [displayRespuesta, setDisplayRespuesta] = useState(0);

  const resultadoCalc = useSelector(
    (state) => state.reducerInfoGarantia.calculador
  );

  const { QuestionsInqui, QuestionsProp } = handleQuestions();

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
    <div className={`${style.ContainerFAQ}`}>
      <CustomContainerMaxWidth>
        <div className={style.TitleFAQ}>
          <div style={{ width: "84%" }}>
            <p className={style.Title}>Preguntas frecuentes</p>
          </div>
          <CustomLine color={'#ffffff'} />
        </div>

        <div className={style.SubTitleFAQ}>
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
              <div className={style.line}></div>
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
              customBackground={{ background: "#E6EAEE", color: "#004993" }}
              isPrimary={false}
            />
          </div>

          <div className={style.ContainerBottom}>
            <div
              className={style.ContainerPreguntas}
              key={inquilinosOPropietarios}
            >
              {inquilinosOPropietarios === "inquilinos"
                ? QuestionsInqui.map((obj) => <CustomAccordion object={obj} />)
                : QuestionsProp.map((obj) => <CustomAccordion object={obj} />)}
            </div>

            {inquilinosOPropietarios === "inquilinos" ? (
              <Image
                className={style.ImageInquilinoProp}
                src={imgInquilinos}
                key={"ImgInqui"}
              />
            ) : (
              <Image
                className={style.ImageInquilinoProp}
                src={imgPropietarios}
                key={"ImgProp"}
              />
            )}
          </div>
        </div>
      </CustomContainerMaxWidth>
    </div>
  );
}
