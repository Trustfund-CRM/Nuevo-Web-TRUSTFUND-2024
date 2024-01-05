import { CustomLine } from "@/components/CustomLine/CustomLine";
import { CustomContainerMaxWidth } from "@/components/CustomConteinerMaxWidth/CustomContainerMaxWidth";
import { CarrouselPartners } from "@/components/CarrouselPartners/CarrouselPartners";
import { CustomTitleSection } from "@/components/CustomTitleSection/CustomTitleSection";
import style from "./styles/partners.module.css";
export default function SeccionPartners() {
  return (
    <div className={style.SeccionPartners}>
      <CustomTitleSection
        title={"Nuestros partners"}
        textColor={"#1A1A1A"}
        bgLine={"#004993"}
      />
      <CustomContainerMaxWidth>
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
