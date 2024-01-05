"use client";
import style from "./styles/ScrollCards.module.css";
import { inquilinos, propietarios, inmobiliarias } from "@/styles";
import { CustomContainerMaxWidth } from "@/components/CustomConteinerMaxWidth/CustomContainerMaxWidth";
import { CustomLine } from "@/components/CustomLine/CustomLine";
import NonScrollingCard from "./Components/NonScrollingCard";
import { useWindowHeight, useWindowWidth } from "@react-hook/window-size";
import { ScrollAnimatedDesktop } from "./Components/ScrollAnimatedDesktop";

export default function ScrollCards() {
  const onlyWidth = useWindowWidth();

  const cards = [
    {
      title: "Inquilinos",
      descripcion:
        "Somos tu mejor opción. Nuestra garantía de alquiler es rápida, accesible, segura y sin trámites engorrosos. Obtenela 100% online y en menos de 24hs.",
      image: inquilinos,
      id: "card1",
    },
    {
      title: "Propietarios",
      descripcion:
        "Te aseguramos el pago mensual del alquiler, expensas, servicios y el cuidado de tu propiedad. Cubrimos gastos legales de un posible desalojo del inquilino.",
      image: propietarios,
      id: "card2",
    },
    {
      title: "Inmobiliarias",
      descripcion:
        "Contamos con un protocolo de alto nivel, preparado para responder ágilmente ante posibles incumplimientos del inquilino en el contrato de alquiler.",
      image: inmobiliarias,
      id: "card3",
    },
  ];

  return (
    <div className={`${style.ContainerGeneral}`} id="carousel">
      <CustomContainerMaxWidth>
        <div className={style.ExtraContainerHeader}>
          <div className={style.TextHeader}>
            Protegemos todas las necesidades en el proceso de alquiler.{" "}
          </div>
          <CustomLine color={"#333"} custom={{ bottom: "0px" }} />
        </div>
        <div id="carousel" className={style.Carrousel}>
          {onlyWidth > 766 ? <ScrollAnimatedDesktop cards={cards} /> : null}
          {onlyWidth < 765 &&
            cards.map((card, index) => (
              <NonScrollingCard card={card} key={index} />
            ))}
        </div>
      </CustomContainerMaxWidth>
    </div>
  );
}
