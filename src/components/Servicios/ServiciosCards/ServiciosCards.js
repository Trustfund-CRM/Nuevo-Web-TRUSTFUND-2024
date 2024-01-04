'use client'
import React, { useState, useEffect } from "react";
import style from './ServiciosCards.module.css';
import Image from "next/image";
import {
    VectorServiciosTop,
    HouseActivo,
    HouseInactivo,
    FireActivo,
    FireInactivo,
    PencilActivo,
    PencilInactivo,
    WebActivo,
    WebInactivo,
    VectorVentajasBlue,
} from "@/styles";
import { Link } from "react-scroll";
import { useWindowScroll } from "@uidotdev/usehooks";


export default function ServiciosCards() {

    const [isMobile, setIsMobile] = useState(false);


    useEffect(() => {
        const screenHeight = window.innerHeight;
        setIsMobile(screenHeight < 650);
        console.log(screenHeight)
    }, []);

    const [imgHouse, setImgHouse] = useState(HouseInactivo);
    const [imgFire, setImgFire] = useState(FireInactivo);
    const [imgPencil, setImgPencil] = useState(PencilInactivo);
    const [imgWeb, setImgWeb] = useState(WebInactivo);

    const [{ x, y }, scrollTo] = useWindowScroll();


    const handleMouseOver = (value) => {
        if (value === "House") {
            setImgHouse(HouseActivo);
        }
        if (value === "Fire") {
            setImgFire(FireActivo);
        }
        if (value === "Pencil") {
            setImgPencil(PencilActivo);
        }
        if (value === "Web") {
            setImgWeb(WebActivo);
        }
    };

    const handleMouseOut = (value) => {
        if (value === "House") {
            setImgHouse(HouseInactivo);
        }
        if (value === "Fire") {
            setImgFire(FireInactivo);
        }
        if (value === "Pencil") {
            setImgPencil(PencilInactivo);
        }
        if (value === "Web") {
            setImgWeb(WebInactivo);
        }
    };

    return (
        <div className={style.ContainerServiciosCards}>
            <div className={style.HeaderServiciosCards}>
                <Image src={VectorServiciosTop} className={style.VectorTop} />
                <div className={style.ContainerTitle}>
                    <div className={style.preTitle}>Trust Fund</div>
                    <div className={style.Title}>Nuestros servicios</div>
                </div>
            </div>
            <div className={style.ContainerCards}>

                <Link className={style.ServicioCard}
                    onMouseOver={() => handleMouseOver("House")}
                    onMouseOut={() => handleMouseOut("House")}
                    activeClass="active"
                    to="quienesSomos"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    style={{ textDecoration: 'none', cursor: 'pointer' }}
                >
                    <div className={style.cardImgContainer}>
                        <Image src={imgHouse} className={style.imgCard} />
                    </div>
                    <div className={style.TitleCard}>Garantías de
                        alquiler</div>
                </Link>

                <Link className={style.ServicioCard}
                    onMouseOver={() => handleMouseOver("Fire")}
                    onMouseOut={() => handleMouseOut("Fire")}
                    activeClass="active"
                    to="contrata"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    style={{ textDecoration: 'none', cursor: 'pointer' }}
                >
                    <div className={style.cardImgContainer}>
                        <Image src={imgFire} />
                    </div>
                    <div className={style.TitleCard}>Seguros
                        Hogar- Incendio</div>
                </Link>

                <Link className={style.ServicioCard}
                    onMouseOver={() => handleMouseOver("Pencil")}
                    onMouseOut={() => handleMouseOut("Pencil")}
                    activeClass="active"
                    to="firma"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    style={{ textDecoration: 'none', cursor: 'pointer' }}
                >
                    <div className={style.cardImgContainer}>
                        <Image src={imgPencil} />
                    </div>
                    <div className={style.TitleCard}>Gestión de
                        firma electrónica</div>
                </Link>

                <Link className={style.ServicioCard}
                    onMouseOver={() => handleMouseOver("Web")}
                    onMouseOut={() => handleMouseOut("Web")}
                    activeClass="active"
                    to="web"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    style={{ textDecoration: 'none', cursor: 'pointer' }}
                >
                    <div className={style.cardImgContainer}>
                        <Image src={imgWeb} />
                    </div>
                    <div className={style.TitleCard}>Creación de
                        Sitio Web</div>
                </Link>
            </div>
            <Image src={VectorVentajasBlue} className={style.VectorBottom} />
        </div>
    )
}