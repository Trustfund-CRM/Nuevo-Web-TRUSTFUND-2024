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
import style from './Firma.module.css';

export default function QuienesSomos() {

    const [calculador, setCalculador] = useState(false);

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
            <div className={style.ContainerFirma}>
                <div className={style.HeaderFirma}>
                    <div className={style.ContainerTitle}>
                        <div className={style.preTitle}>Firma electrónica</div>
                        <div className={style.Title}>Hacé firmar tus documentos de manera rápida, simple y 100% digital.</div>
                    </div>
                </div>


                <div className={style.ContainerBody}>
                    
                </div>
            </div>
        </div>
    )
}