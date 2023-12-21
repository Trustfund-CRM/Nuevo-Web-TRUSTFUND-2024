import Image from "next/image";
import style from "./SeccionComentarios.module.css";
import { partner5, partner6, slider } from "@/styles";
import {
  Mamberto,
  OteroRossi,
  Libera,
  Yacoub,
} from "../../../../public/index.js";
import { ButtonSlider } from "@/components/ButtonSlider/ButtonSlider";
import { useState } from "react";
// import { CustomContainerMaxWidth } from "@/components/CustomConteinerMaxWidth/CustomContainerMaxWidth";
import { CustomLine } from "@/components/CustomLine/CustomLine";

export default function SeccionPartners() {
  const arrAssets = [Mamberto, OteroRossi, Libera, Yacoub, partner5, partner6];

  const [startIdx, setStartIdx] = useState(0);
  const cardsPerPage = 3;
  const gap = 32;

  const handleNextClick = () => {
    if (startIdx + cardsPerPage < dataCards.length) {
      setStartIdx(startIdx + 1);
    }
  };

  const handlePrevClick = () => {
    if (startIdx > 0) {
      setStartIdx(startIdx - 1);
    }
  };

  return (
    <div className={style.SeccionPartners}>
      <div className={style.TitleComentarios}>
        <div
          style={{ width: "84%", paddingBottom: "50px" }}
          className={style.ContainerTitlePartners}
        >
          <div className={style.Title}>Nuestros partners</div>
        </div>
        <CustomLine color={'#004993'} />
      </div>
      <div className={style.ContainerSlidePartners}>
        <div className={style.ContainerSubText}>
          <div className={style.SubTexts}>
            <div div className={style.SubTextLeft}>
              + de 220 inmobiliarias adheridas a nuestro sistema de garantías.
            </div>
            <div className={style.SubTextRight}>
              Conocé a quienes trabajan con nosotros.
            </div>
          </div>
          {/* <ButtonSlider
            text={"Ver más"}
            customBackground={{ background: "#004993", color: "#F9FAFB" }}
            suscribe={false}
          />{" "} */}
        </div>

        <div className={style.BottomPartners}>
          <div className={style.ContainerPartners}>
            {arrAssets.map((asset, index) => (
              <div className={style.contImagePartner} key={index}
              >
                <Image
                  src={asset}
                  alt="img"
                  className={style.imgPartner}
                />
              </div>
            ))}
          </div>
        </div>
        {/* <div className={style.ContainerSlider}>
          <Image src={slider} alt="img" />
        </div> */}
      </div>
    </div>
  );
}
