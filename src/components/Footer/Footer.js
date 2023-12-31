"use client";

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Footer.module.css";
import Image from "next/image";
import {
  IconoFace,
  IconoIg,
  IconoYt,
  IconoLnkdn,
  FooterDelSud,
} from "@/styles/assets";
import { Button } from "react-bootstrap";
import { ButtonSlider } from "../ButtonSlider/ButtonSlider";
import Link from "next/link";
import { setCalculador } from '../../redux/Actions/actionCalculadorPrincipal';
import { useWindowScroll } from "@uidotdev/usehooks";


export default function Footer() {
  const [mobile, setMobile] = useState(false);

  const resultadoCalc = useSelector(
    (state) => state.reducerInfoGarantia.resultado
  );

  const dispatch = useDispatch();

  const [{ x, y }, scrollTo] = useWindowScroll();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window?.innerWidth < 1200) {
        setMobile(true);
      }

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    }
  }, []);

  const handleDownloadPDF = () => {
    const pdfURL =
      "/TRUST FUND  cuotas vivienda - sin co - solicitante.docx.pdf";

    const link = document.createElement("a");
    link.href = pdfURL;

    link.download =
      "TRUST FUND  cuotas vivienda - sin co - solicitante.docx.pdf";

    link.dispatchEvent(new MouseEvent("click"));
  };

  const handleSolicita = () => {
    dispatch(setCalculador());
    scrollTo({ left: 0, top: 0, behavior: "smooth" })
  }

  return (
    <div className={`${style.boxPrincipal}`}>
      <div className={style.subContainerFooter}>
        {/* <div className={style.ContainerIzqFooter}>
          <div className={style.Suscribite}>
            Suscribite a nuestro newsletter.
          </div>
          <ButtonSlider
            text={"Suscribirme"}
            customBackground={{ background: "#004993", color: "#F9FAFB" }}
            suscribe={true} //Debe mandar un mail a info@trustfund.com.ar y mostrar un modal informando eso
          />
        </div> */}

        <div className={style.ContainerDerFooter}>
          <div className={style.ContainerRedes}>
            <div className={style.ExtraSubContainerRedes}>
              <div className={style.subContainerRedes}>
                <a
                  className={style.iconFacebook}
                  // style={mobile ? { scale: "55%" } : { scale: "200%" }}
                  href="https://www.facebook.com/garantiastrustfund?ref=pages_you_manage%2F"
                >
                  <Image
                    className={style.FotoRedes}
                    alt="facebook"
                    src={IconoFace}
                  />
                </a>
                <a
                  className={style.iconRedes}
                  href="https://www.instagram.com/trustfundgarantias/"
                >
                  <Image
                    className={style.FotoRedes}
                    alt="instagram"
                    src={IconoIg}
                  />
                </a>
                <a
                  className={style.iconRedes}
                  href="https://www.youtube.com/@trustfundgarantias9186"
                >
                  <Image
                    className={style.FotoRedes}
                    alt="youtube"
                    src={IconoYt}
                  />
                </a>
                <a
                  className={style.iconRedes}
                  href="https://www.linkedin.com/company/trust-fund-garantias/"
                >
                  <Image
                    className={style.FotoRedes}
                    alt="linkedin"
                    src={IconoLnkdn}
                  />
                </a>
              </div>
            </div>
            <Button className={style.buttonSolicitar} onClick={() => handleSolicita()}>
              Solicitá tu garantía
            </Button>
          </div>

          <div className={style.ContainerContacto}>
            <div className={style.Direccion}>
              Calle 37 n° 125.<br></br>
              La Plata.<br></br>
              Buenos Aires
            </div>

            <div className={style.Contacto}>
              T: +54 (9) 221 - 3619465
              <br></br>
              M: info@trustfund.com.ar
            </div>
          </div>
        </div>
      </div>

      <div className={style.textoFooter}>
        Trust Fund 2023©. Todos los derechos reservados.
      </div>

      <div className={style.bannerFooter}>
        <div className={style.subBannerFooter}>
          <div className={style.footerDelSud}>
            <div className={style.textoDelSud}>Una empresa de </div>
            <Image className={style.logoDelSud} src={FooterDelSud} />
          </div>
          <div className={style.botonesFooter}>
            {/* <Link href="/" className={style.botonFooter}>Términos y condiciones</Link> */}
            <div onClick={handleDownloadPDF} className={style.botonFooter}>Ver modelo de contrato</div>
            <Link href="/nuestra-garantia" className={style.botonFooter}>Acerca de Trust Fund</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
