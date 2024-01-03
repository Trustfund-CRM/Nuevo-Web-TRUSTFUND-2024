import { CustomLine } from "@/components/CustomLine/CustomLine";
import { CustomContainerMaxWidth } from "@/components/CustomConteinerMaxWidth/CustomContainerMaxWidth";
import { CarrouselPartners } from "@/components/CarrouselPartners/CarrouselPartners";
import style from './styles/partners.module.css'
export default function SeccionPartners() {
  return (
    <div className={style.SeccionPartners}>
      <CustomContainerMaxWidth>
        <div className={style.TitleComentarios}>
          <div className={style.ContainerTitlePartners}>
            <div className={style.Title}>Nuestros partners</div>
          </div>
          <CustomLine color={"#004993"} />
        </div>
        <div className={style.ContainerSlidePartners}>
          <div className={style.ContainerSubText}>
            <div div className={style.SubTextLeft}>
              + de 220 inmobiliarias adheridas a nuestro sistema de garantías.
            </div>
            <div
              style={{
                fontSize: "20px",
              }}
            >
              Conocé a quienes trabajan con nosotros.
            </div>
            {/* <ButtonSlider
              text={"Ver más"}
              customBackground={{ background: "#004993", color: "#F9FAFB" }}
              suscribe={false}
            />{" "} */}
          </div>

          <div className={style.containerAuxPartners}>
            <CarrouselPartners />
          </div>

          {/* <div className={style.ContainerSlider}>
            <Image src={slider} alt="img" />
          </div> */}
        </div>
      </CustomContainerMaxWidth>
    </div>
  );
}
