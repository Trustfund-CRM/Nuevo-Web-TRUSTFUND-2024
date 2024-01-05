import Image from "next/image";
import style from "./ScrollPrincipal.module.css";
import { backgroundHome, flechaCirculo, scroll } from "@/styles";
import { Button } from "react-bootstrap";
import { useEffect, useState, useRef } from "react";
import ModalCalculador from "@/components/ModalCalculador/ModalCalculador";
import { useDispatch, useSelector } from "react-redux";
import { CustomContainerMaxWidth } from "@/components/CustomConteinerMaxWidth/CustomContainerMaxWidth";
import { setCalculador } from "@/redux/Actions/actionCalculadorPrincipal";

export default function ScrollPrincipal() {
  const [calculador, setCalculador] = useState(false);
  const [mobile, setMobile] = useState(false);
  const miIdRef = useRef(null);

  const dispatch = useDispatch();
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window?.innerWidth < 1017) {
        setMobile(true);
        // setCalculador(true)
      }
    }
  }, []);

  const abrirModal = () => {
    if (mobile) {
      const scrollAmount = 380; // por ejemplo, 200 píxeles

      window.scrollTo({
        top: 400,
        behavior: "smooth",
      });
      setCalculador(true);
    } else {
      setCalculador(true);
    }
  };

  return (
    <div className={`${style.ExtraContainerScrollPrincipal}`}>
      <div className={style.ContainerScrollPrincipal}>
        <div className={style.ContainerTitle}>
          <div className={style.Intro}>Somos Trust Fund</div>
          <div className={style.Titulo}>
            <div className={style.Text1}>Garantizamos</div>
            <div className={style.Text2}>tu alquiler</div>
          </div>
          <div className={style.subText}>
            Con mínimos requisitos. Obtené tu garantía de alquiler en tan solo
            24hs.
          </div>

          <div className={style.containerButtons}>
            <div className={style.ButtonHome} onClick={() => abrirModal()}>
              Cotizá tu garantía
            </div>
            <Image
              className={style.flecha}
              src={flechaCirculo}
              onClick={() => abrirModal()}
            />
          </div>
        </div>
        <div className={style.footerHome}>
          <Image className={style.scrollFooter} src={scroll} alt="image" />
        </div>

        {calculador ? (
          <ModalCalculador
            ref={miIdRef}
            id="miId"
            setCalculador={setCalculador}
          />
        ) : null}
      </div>
    </div>
  );
}
