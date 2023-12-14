import Image from "next/image";
import style from "./SeccionComentarios.module.css";
import {
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  flechaModal,
  slider,
} from "@/styles";
import { ButtonSlider } from "@/components/ButtonSlider/ButtonSlider";

export default function SeccionPartners() {

    return (
        <div className={style.SeccionPartners}>
            <div className={style.TitleComentarios}>
                <div style={{ width: '84%', paddingBottom: '50px' }} className={style.ContainerTitlePartners}>
                    <div className={style.Title}>Nuestros partners</div>
                </div>
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
          <ButtonSlider
            text={"Ver más"}
            customBackground={{ background: "#004993", color: "#F9FAFB" }}
          />{" "}
        </div>

        <div className={style.BottomPartners}>
          <div className={style.ContainerPartners}>
            <Image className={style.Partner} src={partner1} />
            <Image className={style.Partner} src={partner2} />
            <Image className={style.Partner} src={partner3} />
            <Image className={style.Partner} src={partner4} />
            <Image className={style.Partner} src={partner5} />
            <Image className={style.Partner} src={partner6} />
          </div>

          <div className={style.ContainerSlider}>
            <Image src={slider} />
          </div>
        </div>
      </div>
    </div>
  );
}
