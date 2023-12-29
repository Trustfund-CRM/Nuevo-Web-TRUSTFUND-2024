import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useWindowWidth, useWindowHeight } from "@react-hook/window-size";
import {
    FlechaSolicita,
    casaPreguntas,
    serviciosPreguntas,
    dañosPreguntas,
    costosPreguntas,
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
            <div className={style.ContainerQuienesSomos}>
                <div className={style.HeaderQuienesSomos}>
                    <div className={style.ContainerTitle}>
                        <div className={style.preTitle}>Sitio Web</div>
                        <div className={style.Title}>Creamos la página web
                            de tu inmobiliaria</div>
                    </div>
                </div>


                <div className={style.ContainerBody}>
                    <div className={style.ContainerBlue}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}