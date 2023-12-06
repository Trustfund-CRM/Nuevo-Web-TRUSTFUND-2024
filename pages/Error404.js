import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { imagen404, logo404, fondo404, face404, wpp404, insta404, linkedin404 } from '@/styles';
import style from '../src/styles/error.module.css';
import styleMobile from '../src/styles/errorMobile.module.css';
import { userAgent } from "next/server";

const Error404 = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const screenWidth = window.innerWidth;
        setIsMobile(screenWidth < 768);
        console.log(isMobile, userAgent)
    }, []);

    return (
        <div className={`${isMobile ? styleMobile.container404 : style.container404}`} >
            <div className={`${isMobile ? styleMobile.containerFondo : style.containerFondo}`}>
                <Image className={`${isMobile ? styleMobile.fondo404 : style.fondo404}`} alt="fondo404" src={fondo404} />
            </div>
            <div className={`${isMobile ? styleMobile.subContainer404 : style.subContainer404}`}>
                <Image className={`${isMobile ? styleMobile.img4042 : style.img4042}`} alt="imagen404" src={imagen404} />
                <div className={`${isMobile ? styleMobile.titulo404 : style.titulo404}`}>Ups... Estamos haciendo mejoras en el sitio. </div>
                <div className={`${isMobile ? styleMobile.subtitulo404 : style.subtitulo404}`}>¡Volvemos pronto!</div>
                <div className={`${isMobile ? styleMobile.redesContainer : style.redesContainer}`}>
                    <a href="https://www.facebook.com/garantiastrustfund?ref=pages_you_manage%2F">
                        <Image className={`${isMobile ? styleMobile.redesImg : style.redesImg}`} alt="redes404" src={face404} />
                    </a>
                    <a href="https://www.instagram.com/trustfundgarantias/">
                        <Image className={`${isMobile ? styleMobile.redesImg : style.redesImg}`} alt="redes404" src={insta404} />
                    </a>
                    <a href="https://www.linkedin.com/company/trust-fund-garantias/">
                        <Image className={`${isMobile ? styleMobile.redesImg : style.redesImg}`} alt="redes404" src={linkedin404} />
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=542213619465&text=¡Hola!%20Quiero%20más%20información%20sobre%20las%20garantías%20de%20alquiler%20🙌🏼&app_absent=0">
                        <Image className={`${isMobile ? styleMobile.redesImg : style.redesImg}`} alt="redes404" src={wpp404} />
                    </a>
                </div>
                <Image className={`${isMobile ? styleMobile.img404 : style.img404}`} alt="logo404" src={logo404} />
            </div>
        </div>
    );

};

export default Error404;
