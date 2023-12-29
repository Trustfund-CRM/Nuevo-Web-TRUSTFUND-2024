import Image from "next/image";
import style from "./SeccionComentarios.module.css";
import { partner5, partner6, slider } from "@/styles";
import {
  Mamberto,
  OteroRossi,
  Libera,
  Yacoub,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15,
  a16,
  a17,
  a18,
} from "../../../../public/index.js";
import { useState } from "react";
// import { CustomContainerMaxWidth } from "@/components/CustomConteinerMaxWidth/CustomContainerMaxWidth";
import { CustomLine } from "@/components/CustomLine/CustomLine";

export default function SeccionPartners() {
  const arrAssets = [
    a14,

    a18,

    a1,
    a2,

    a17,

    a3,
    a4,
    a13,
    a5,
    a6,

    a16,

    a7,
    a8,
    a9,
    a10,

    a15,

    a11,
    a12,
    




    
  ];

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
          className={style.ContainerTitlePartners}
        >
          <div className={style.Title}>Nuestros partners</div>
        </div>
        <CustomLine color={'#004993'} />
      </div>
      <div className={style.ContainerSlidePartners}>
        <div className={style.ContainerSubText}>

          <div div className={style.SubTextLeft}>
            + de 220 inmobiliarias adheridas a nuestro sistema de garantías.
          </div>
          <div style={{
            fontSize: '20px'
          }}>
            Conocé a quienes trabajan con nosotros.
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
