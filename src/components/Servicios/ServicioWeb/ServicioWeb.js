import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ButtonSlider } from "@/components/ButtonSlider/ButtonSlider";
import { useWindowWidth, useWindowHeight } from "@react-hook/window-size";
import {
    FlechaSolicita,
    imgTablet,
    starBeneficio,
    monitorBeneficio,
    codeBeneficio,
    globalBeneficio,
    searchBeneficio,
    buildingBeneficio,
    VectorAzul,
    logoFlexy,
} from "@/styles";
import style from './ServicioWeb.module.css';

export default function ServicioWeb() {

    const [calculador, setCalculador] = useState(false);

    const [open, setOpen] = useState(null);
    const [question, setQuestion] = useState(null);

    const handleSetOpen = (value) => {
        setOpen(!open);
        setQuestion(value)
    };

    const abrirModal = () => {
        if (mobile) {
            const scrollAmount = 380; // por ejemplo, 200 píxeles

            window.scrollTo({
                top: 400,
                behavior: 'smooth',
            });
            setCalculador(true)


        } else {
            setCalculador(true)
        }
    }

    return (
        <div>
            <div className={style.ContainerServicioWeb}>
                <div className={style.HeaderServicioWeb}>
                    <div className={style.ContainerTitle}>
                        <div className={style.preTitle}>Sitio Web</div>
                        <div className={style.Title}>Creamos la página web
                            de tu inmobiliaria</div>
                    </div>
                </div>


                <div className={style.ContainerBlue}>
                    <div className={style.ContainerSubTexts}>
                        <div className={style.subTextLeft}>Obtenela sin costos de programación ni diseño y
                            a sólo <span className={style.greenText}>$20.000 mensuales.</span>
                        </div>
                        <div className={style.subTextRight}>Potenciá el éxito de tu inmobiliaria con una página web propia, junto a un diseño atractivo y funcional.</div>

                        <ButtonSlider
                            text={"Ver más"}
                            customBackground={{ background: "#E6EAEE", color: "#004993" }}
                            route={"/ConsultasYReclamos"}
                            suscribe={false}
                        />
                    </div>
                </div>

                <Image className={style.imagenTablet} src={imgTablet} />

                <div className={style.Beneficios}>Beneficios de hacer tu sitio web con Trust Fund:</div>

                <div className={style.ContainerCardsBeneficios}>

                    <div className={style.subContainerCards}>
                        <div className={style.CardBeneficio}>
                            <Image src={starBeneficio} />
                            <div className={style.TitleBeneficio}>Diseño moderno</div>
                            <div className={style.DescBeneficio}>Fácil navegación para tus clientes.</div>
                        </div>
                        <div className={style.CardBeneficio}>
                            <Image src={monitorBeneficio} />
                            <div className={style.TitleBeneficio}>Diseño responsive</div>
                            <div className={style.DescBeneficio}>Adaptada a todos los dispositivos.</div>
                        </div>
                    </div>

                    <div className={style.subContainerCards}>
                        <div className={style.CardBeneficio}>
                            <Image src={codeBeneficio} />
                            <div className={style.TitleBeneficio}>Fácil navegación</div>
                            <div className={style.DescBeneficio}>Experiencia personalizada.</div>
                        </div>
                        <div className={style.CardBeneficio}>
                            <Image src={globalBeneficio} />
                            <div className={style.TitleBeneficio}>Motores de búsqueda</div>
                            <div className={style.DescBeneficio}>Optimizamos el posicionamiento web.</div>
                        </div>
                    </div>

                    <div className={style.subContainerCards}>
                        <div className={style.CardBeneficio}>
                            <Image src={searchBeneficio} />
                            <div className={style.TitleBeneficio}>Búsqueda inteligente</div>
                            <div className={style.DescBeneficio}>Una búsqueda fácil para tus clientes.</div>
                        </div>
                        <div className={style.CardBeneficio}>
                            <Image src={buildingBeneficio} />
                            <div className={style.TitleBeneficio}>Cualidades del inmueble</div>
                            <div className={style.DescBeneficio}>Descripciones, fotos, videos y más.</div>
                        </div>
                    </div>

                </div>

                <div className={style.ContainerVioleta}>
                    <div className={style.subContainerVioleta}>
                        <div className={style.textFlexy}>Las propiedades que subas aparecerán automáticamente en la plataforma de nuestro partner Flexy, llegando así a más personas.</div>

                        <Image src={logoFlexy} />
                    </div>

                    <Image src={VectorAzul} className={style.VectorAzul} />

                </div>

                <div className={style.ContainerDuda}>
                    <div className={style.textDuda}>¿Tenés alguna duda?</div>

                    <ButtonSlider
                        text={""}
                        customBackground={{ background: "#004993", color: "#F9FAFB" }}
                        suscribe={false}
                    />
                </div>

            </div>
        </div>
    )
}