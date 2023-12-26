import style from "./ScrollVentajas.module.css";
import "./effectLetters.css";
import { CustomContainerMaxWidth } from "@/components/CustomConteinerMaxWidth/CustomContainerMaxWidth";
import { ButtonSlider } from "@/components/ButtonSlider/ButtonSlider";
import { CustomLine } from "@/components/CustomLine/CustomLine";
import { useEffect, useState } from "react";
import { useWindowScroll } from "@uidotdev/usehooks";
import { useWindowHeight, useWindowWidth } from "@react-hook/window-size";
import { VectorVentajas, VectorVentajasBlue } from "@/styles";
import Image from "next/image";

export default function ScrollVentajas() {

  const onlyWidth = useWindowWidth()
  const onlyHeight = useWindowHeight()

  const [customStyle, setCustomStyle] = useState({
    background: '#F2F5FB',
    transition: 'background 1s ease'
  });

  const [customColor, setCustomColor] = useState({
    color: '#000000',
    transition: 'background 1s ease'
  });

  const [{ x, y }, scrollTo] = useWindowScroll();

  useEffect(() => {
    if (onlyWidth < 280 ? y > 2800 : onlyHeight < 800 ? y > 1800 : y > 2000) {
      setCustomStyle({
        ...customStyle,
        background: '#009FBB'
      });
      setCustomColor({
        ...customColor,
        color: '#ffffff'
      });
    }
    if (onlyWidth < 280 ? y < 2800 : onlyHeight < 800 ? y < 1800 : y < 2000) {
      setCustomStyle({
        ...customStyle,
        background: '#F2F5FB'
      });
      setCustomColor({
        ...customColor,
        color: '#000000'
      });
    }
  }, [y]);

  return (
    <div className={`${style.ContainerScrollVentajas}`} style={customStyle}>
      <CustomContainerMaxWidth ventajas={true}>
        <div className={style.ContainerTop}>
          <div className={style.TitleTop}>
            <Image className={style.ElementTop} src={VectorVentajas} />
            <div className={style.TitleVentajas} style={customColor}>
              Ventajas de utilizar Trust Fund
            </div>
          </div>
          <CustomLine color={"#d3d5da"} custom={{ bottom: "0px" }} />
        </div>

        <div className={style.ContainerBottom}>
          <div className={style.subContainerBottom}>
            <div className={style.subTitle}>
              <div className={style.subTextLeft} style={customColor}>
                Rápido para el inquilino, seguro para el propietario, confiable
                para la inmobiliaria.
              </div>
              <div className={style.subTextRight} style={customColor}>
                Alquilá con tranquilidad, con Trust Fund estás protegido.
              </div>
            </div>
            <ButtonSlider
              text={"Ver más"}
              customBackground={{ background: "#E6EAEE", color: "#004993" }}
              route={"/nuestra-garantia"}
              suscribe={false}
            />
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
        <Image className={style.ElementBottom} src={VectorVentajasBlue}/>
      </CustomContainerMaxWidth>
    </div>
  );
}
