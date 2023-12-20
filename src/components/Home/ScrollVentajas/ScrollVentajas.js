import Image from "next/image";
import style from "./ScrollVentajas.module.css";
import "./effectLetters.css";
import { useSelector } from "react-redux";
import { CustomContainerMaxWidth } from "@/components/CustomConteinerMaxWidth/CustomContainerMaxWidth";
import { ButtonSlider } from "@/components/ButtonSlider/ButtonSlider";
import { CustomLine } from "@/components/CustomLine/CustomLine";
import { useEffect, useState } from "react";
import { useWindowScroll } from "@uidotdev/usehooks";

export default function ScrollVentajas() {
  const [customStyle, setCustomStyle] = useState({
    background: '#F2F5FB',
    transition: 'background 1s ease' 
  });

  const [{ x, y }, scrollTo] = useWindowScroll();

  useEffect(() => {
    if (y > 2000) {
      setCustomStyle({
        ...customStyle,
        background: '#009FBB'
      });
    } 
    if (y < 2000) {
      setCustomStyle({
        ...customStyle,
        background: '#F2F5FB'
      });
    }
  }, [y]);

  return (
    <div className={`${style.ContainerScrollVentajas}`} style={customStyle}>
      <CustomContainerMaxWidth>
        <div className={style.ContainerTop}>
          <div className={style.TitleVentajas}>
            Ventajas de utilizar Trust Fund
          </div>
          <CustomLine color={"#d3d5da"} custom={{ bottom: "0px" }} />
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
            <ButtonSlider
              text={"Ver más"}
              customBackground={{ background: "#E6EAEE", color: "#004993" }}
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
      </CustomContainerMaxWidth>
    </div>
  );
}
