import Image from "next/image";
import { useEffect, useState } from "react";
import { useWindowScroll } from "@uidotdev/usehooks";
import { VectorVentajas, VectorVentajasBlue } from "@/styles";
import { useWindowHeight, useWindowWidth } from "@react-hook/window-size";
import { CustomTitleSection } from "@/components/CustomTitleSection/CustomTitleSection";
import { CustomContainerMaxWidth } from "@/components/CustomConteinerMaxWidth/CustomContainerMaxWidth";
import style from "./ScrollVentajas.module.css";
import "./effectLetters.css";

export default function ScrollVentajas() {
  const onlyWidth = useWindowWidth();
  const onlyHeight = useWindowHeight();

  const [customStyle, setCustomStyle] = useState({
    background: "#F2F5FB",
    transition: "background 1s ease",
  });

  const [{ x, y }, scrollTo] = useWindowScroll();

  useEffect(() => {
    if (onlyWidth < 480 ? y > 1900 : onlyHeight < 800 ? y > 1400 : y > 1400) {
      // console.log('ENTRE')

      setCustomStyle({
        ...customStyle,
        background: "#009FBB",
      });
    }
    if (onlyWidth < 480 ? y < 1900 : onlyHeight < 800 ? y < 1400 : y < 1400) {
      // console.log('ENTRE')
      setCustomStyle({
        ...customStyle,
        background: "#F2F5FB",
      });
    }
  }, [y]);

  console.log("Y", y);

  return (
    <div
      className={`${style.ContainerScrollVentajas}`}
      style={customStyle}
      id="miComponenteVisible"
    >
      <CustomTitleSection
        title={"Ventajas de utilizar Trust Fund"}
        textColor={"#ffffff"}
        bgLine={"#ffffff"}
      />
      <CustomContainerMaxWidth ventajas={true}>
        <Image className={style.ElementTop} src={VectorVentajas} />
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
            {/* <ButtonSlider
              text={"Ver más"}
              customBackground={{ background: "#E6EAEE", color: "#004993" }}
              route={"/nuestra-garantia"}
              suscribe={false}
            /> */}
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
        <Image className={style.ElementBottom} src={VectorVentajasBlue} />
      </CustomContainerMaxWidth>
    </div>
  );
}
