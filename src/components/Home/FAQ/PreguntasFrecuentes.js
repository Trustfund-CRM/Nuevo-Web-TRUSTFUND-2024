import Image from "next/image";
import { useEffect, useState } from "react";
import style from "./PreguntasFrecuentes.module.css";
import { imgInquilino, imgPropietario, flechaModalBlue } from "@/styles";
import { CustomAccordion } from "@/components/CustomAccordion/CustomAccordion";
import { ButtonSlider } from "@/components/ButtonSlider/ButtonSlider";
import { CustomContainerMaxWidth } from "@/components/CustomConteinerMaxWidth/CustomContainerMaxWidth";
import { handleQuestions } from "./objectText";
import { CustomLine } from "@/components/CustomLine/CustomLine";
import { useWindowHeight, useWindowWidth } from "@react-hook/window-size";
import { useWindowScroll } from "@uidotdev/usehooks";

export default function PreguntasFrecuentes() {
  const onlyWidth = useWindowWidth();
  const onlyHeight = useWindowHeight();

  const [inquilinosOPropietarios, setInquilinosOPropietarios] =
    useState("inquilinos");

  const { QuestionsInqui, QuestionsProp } = handleQuestions(onlyWidth);

  const [customStyle, setCustomStyle] = useState({
    background: "#F2F5FB",
    transition: "background 1s ease",
  });

  const [customColor, setCustomColor] = useState({
    color: "#000000",
    transition: "background 1s ease",
  });

  const [{ x, y }, scrollTo] = useWindowScroll();

  useEffect(() => {
    if (onlyWidth < 480 ? y > 3200 : onlyHeight < 800 ? y > 3600 : y > 4200) {
      setCustomStyle({
        ...customStyle,
        background: "#0076b9",
      });
      setCustomColor({
        ...customColor,
        color: "#ffffff",
      });
    }
    if (onlyWidth < 480 ? y < 3200 : onlyHeight < 800 ? y < 3600 : y < 4200) {
      setCustomStyle({
        ...customStyle,
        background: "#F2F5FB",
      });
      setCustomColor({
        ...customColor,
        color: "#000000",
      });
    }
  }, [y]);

  return (
    <div className={`${style.ContainerFAQ}`} style={customStyle}>
      <CustomContainerMaxWidth FAQ={true}>
        <div className={style.TitleFAQ}>
          <div className={style.contTitle}>
            <p className={style.Title} style={customColor}>
              Preguntas frecuentes
            </p>
          </div>
          <CustomLine color={"#ffffff"} />
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
              route={"/ConsultasYReclamos"}
              suscribe={false}
            />
          </div>

          <div className={style.ContainerBottom}>
            <div
              className={style.ContainerPreguntas}
              key={inquilinosOPropietarios}
            >
              {inquilinosOPropietarios === "inquilinos"
                ? QuestionsInqui.map((obj, index) => (
                    <CustomAccordion object={obj} key={index} />
                  ))
                : QuestionsProp.map((obj, index) => (
                    <CustomAccordion object={obj} key={index} />
                  ))}
            </div>

            {inquilinosOPropietarios === "inquilinos" ? (
              <Image
                className={style.ImageInquilinoProp}
                src={imgInquilino}
                key={"ImgInqui"}
              />
            ) : (
              <Image
                className={style.ImageInquilinoProp}
                src={imgPropietario}
                key={"ImgProp"}
              />
            )}
          </div>
        </div>
      </CustomContainerMaxWidth>
    </div>
  );
}
