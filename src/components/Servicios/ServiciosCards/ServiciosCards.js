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
import { useWindowScroll } from "@uidotdev/usehooks";


export default function ServiciosCards() {

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

    const scrollDown = (section) => {

        if (section === "House") {
            scrollTo({ left: 0, top: 1000, behavior: "smooth" })
        }

        if(section === "Fire") {
            scrollTo({ left: 0, top: 2000, behavior: "smooth" })
        }

        if(section === "Pencil") {
            scrollTo({ left: 0, top: 3200, behavior: "smooth" })
        }

        if(section === "Web") {
            scrollTo({ left: 0, top: 4750, behavior: "smooth" })
        }
    }

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

                <div className={style.ServicioCard}
                    onMouseOver={() => handleMouseOver("House")}
                    onMouseOut={() => handleMouseOut("House")}
                    onClick={() => scrollDown("House")}
                >
                    <div className={style.cardImgContainer}>
                        <Image src={imgHouse} className={style.imgCard} />
                    </div>
                    <div className={style.TitleCard}>Garantías de
                        alquiler</div>
                </div>

                <div className={style.ServicioCard}
                    onMouseOver={() => handleMouseOver("Fire")}
                    onMouseOut={() => handleMouseOut("Fire")}
                    onClick={() => scrollDown("Fire")}
                >
                    <div className={style.cardImgContainer}>
                        <Image src={imgFire} />
                    </div>
                    <div className={style.TitleCard}>Seguros
                        Hogar- Incendio</div>
                </div>

                <div className={style.ServicioCard}
                    onMouseOver={() => handleMouseOver("Pencil")}
                    onMouseOut={() => handleMouseOut("Pencil")}
                    onClick={() => scrollDown("Pencil")}
                >
                    <div className={style.cardImgContainer}>
                        <Image src={imgPencil} />
                    </div>
                    <div className={style.TitleCard}>Gestión de
                        firma electrónica</div>
                </div>

                <div className={style.ServicioCard}
                    onMouseOver={() => handleMouseOver("Web")}
                    onMouseOut={() => handleMouseOut("Web")}
                    onClick={() => scrollDown("Web")}
                >
                    <div className={style.cardImgContainer}>
                        <Image src={imgWeb} />
                    </div>
                    <div className={style.TitleCard}>Creación de
                        Sitio Web</div>
                </div>
            </div>
            <Image src={VectorVentajasBlue} className={style.VectorBottom} />
        </div>
    )
}