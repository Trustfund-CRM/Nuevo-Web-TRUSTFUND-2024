import React, { useState } from "react";
import style from './ServiciosCards.module.css';
import Image from "next/image";
import {
    VectorServiciosTop,
    House,
    FireInactivo,
    PencilInactivo,
    WebInactivo,
    VectorVentajasBlue,
} from "@/styles";

export default function ServiciosCards() {
    console.log('component Servicios')

    const [imgHouse, setImgHouse] = useState(House);
    const [imgFire, setImgFire] = useState(FireInactivo);
    const [imgPencil, setImgPencil] = useState(PencilInactivo);
    const [imgWeb, setImgWeb] = useState(WebInactivo);

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

                <div className={style.ServicioCard}>
                    <div className={style.cardImgContainer}>
                        <Image src={imgHouse} className={style.imgCard} />
                    </div>
                    <div className={style.TitleCard}>Garantías de
                        alquiler</div>
                </div>

                <div className={style.ServicioCard}>
                    <div className={style.cardImgContainer}>
                        <Image src={imgFire} />
                    </div>
                    <div className={style.TitleCard}>Seguros
                        Hogar- Incendio</div>
                </div>

                <div className={style.ServicioCard}>
                    <div className={style.cardImgContainer}>
                        <Image src={imgPencil} />
                    </div>
                    <div className={style.TitleCard}>Gestión de
                        firma electrónica</div>
                </div>

                <div className={style.ServicioCard}>
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