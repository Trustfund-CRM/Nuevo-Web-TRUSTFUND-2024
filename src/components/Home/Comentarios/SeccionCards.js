import style from "./SeccionComentarios.module.css";
import Image from "next/image";
import { calificacion, calificacionGris, flechaModal } from "@/styles";
import { useState } from "react";
import { dataCards } from "./dataCards";
import { RatingCard } from "@/components/Cards/RatingCard";
import { ButtonSlider } from "@/components/ButtonSlider/ButtonSlider";
import { CustomLine } from "@/components/CustomLine/CustomLine";

export default function SeccionCards() {
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
    <div className={style.ContainerComentarios}>
      <div className={style.TitleComentarios}>
        <div className={style.ContainerTitle}>
          <div className={style.Title}>Que dicen nuestros clientes</div>
        </div>
        <CustomLine color={'#004993'} />
      </div>

      <div className={style.ContainerSlideComentarios}>
        <div className={style.ContainerSubText}>
          <div className={style.SubTexts}>
            <div className={style.SubTextLeft}>
              Descubrí lo que piensan quienes confiaron en Trust Fund.
            </div>
            <div className={style.SubTextRight}>
              Tu experiencia nos importa. Dejanos tu comentario.
            </div>
          </div>
          <ButtonSlider
            text={"Ver más"}
            customBackground={{ background: "#004993", color: "#F9FAFB" }}
            route={"https://www.google.com/search?q=trust+fund+garantias+de+alquiler&sca_esv=592556902&rlz=1C1CHBD_esAR1004AR1004&sxsrf=AM9HkKnedIf0kop0t3X_LqRPLTsxEoDNCw%3A1703093481932&ei=6SSDZdazOJ_c1sQP3cSS0A8&ved=0ahUKEwiWzInQxZ6DAxUfrpUCHV2iBPoQ4dUDCBA&uact=5&oq=trust+fund+garantias+de+alquiler&gs_lp=Egxnd3Mtd2l6LXNlcnAiIHRydXN0IGZ1bmQgZ2FyYW50aWFzIGRlIGFscXVpbGVyMgQQIxgnMgIQJkj3PFDHDVjuO3AEeASQAQGYAb4BoAGKHaoBBTE2LjIwuAEDyAEA-AEBwgIEEAAYR8ICChAjGIAEGIoFGCfCAgoQABiABBiKBRhDwgILEAAYgAQYsQMYgwHCAgoQLhiABBiKBRhDwgIREC4YgAQYsQMYgwEYxwEY0QPCAhAQABiABBiKBRhDGLEDGIMBwgIQEC4YgAQYigUYQxjHARjRA8ICEBAuGIAEGIoFGEMYsQMYgwHCAgsQLhiABBixAxiDAcICChAAGIAEGBQYhwLCAhYQLhiABBiKBRhDGLEDGIMBGMcBGNEDwgINEAAYgAQYFBiHAhixA8ICDRAAGIAEGIoFGEMYsQPCAg4QLhiABBjHARivARiOBcICEhAuGIAEGIoFGEMYxwEY0QMYCsICCBAAGIAEGLEDwgIFEAAYgATCAgUQLhiABMICCxAuGIAEGMcBGK8BwgIHECMYsQIYJ8ICChAuGEMYgAQYigXCAgcQABiABBgKwgIHEC4YgAQYCsICBxAjGLACGCfCAgkQABiABBgNGBPCAgkQLhiABBgNGBPCAggQABgWGB4YE8ICChAAGBYYHhgPGBPCAgoQABgFGB4YDRgTwgIIEAAYgAQYywHCAggQLhiABBjLAcICCBAAGBYYHhgPwgIIEAAYFhgeGArCAgYQABgWGB7iAwQYACBBiAYBkAYI&sclient=gws-wiz-serp#lrd=0x95a2e707f0875b81:0x2cdea570f886d83,1,,,,"}
          />
        </div>

        <div className={style.ContainerSlideCards}>
          <div className={style.ContainerFlechas}>
            <Image
              className={style.FlechaLeft}
              src={flechaModal}
              alt="img"
              onClick={handlePrevClick}
            />
            <Image
              className={style.FlechaRight}
              src={flechaModal}
              alt="img"
              onClick={handleNextClick}
            />
          </div>
          <div className={style.containerAux}>
            <div
              className={style.SlideCards}
              style={{
                transition: "transform 0.3s ease-in-out",
                transform: `translateX(-${startIdx * (257 + gap)}px)`,
              }}
            >
              {dataCards.map((e, index) => (
                <RatingCard card={e} key={`${index + e.id}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
