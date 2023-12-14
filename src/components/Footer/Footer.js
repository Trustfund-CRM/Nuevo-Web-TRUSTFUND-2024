"use client";

import React from "react";
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
import { flechaModal } from "@/styles/assets";
import { ButtonSlider } from "../ButtonSlider/ButtonSlider";

export default function Footer() {
  return (
    <div className={style.boxPrincipal}>
      <div className={style.subContainerFooter}>
        <div className={style.ContainerIzqFooter}>
          <div className={style.Suscribite}>
            Suscribite a nuestro newsletter.
          </div>
          <ButtonSlider
            text={"Ver más"}
            customBackground={{ background: "#004993", color: "#F9FAFB" }}
          />
        </div>

        <div className={style.ContainerDerFooter}>
          <div className={style.ContainerRedes}>
            <div className={style.subContainerRedes}>
              <a
                className={style.iconRedes}
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
            <Button className={style.buttonSolicitar}>
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
        Trust Fund 2023©. Todos los derechos reservados. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Duis finibus malesuada eros, et
        posuere urna porta
      </div>

      <div className={style.bannerFooter}>
        <div className={style.subBannerFooter}>
          <div className={style.footerDelSud}>
            <div className={style.textoDelSud}>Una empresa de </div>
            <Image className={style.logoDelSud} src={FooterDelSud} />
          </div>

          <div className={style.botonesFooter}>
            <div className={style.botonFooter}>Términos y condiciones</div>
            <div className={style.botonFooter}>Ver modelo de contrato</div>
            <div className={style.botonFooter}>Acerca de Trust Fund</div>
          </div>
        </div>
      </div>
    </div>
  );
}
