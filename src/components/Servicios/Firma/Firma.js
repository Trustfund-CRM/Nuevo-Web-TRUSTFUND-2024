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
                    <div className={style.ContainerSubTexts}>
                        <div className={style.subTextLeft}>Gestionamos la firma electrónica de tus documentos. </div>
                        <div className={style.subTextRight}>Simplificá los procesos de firma, ahorrá tiempo y digitalizate con Trust Fund. </div>
                    </div>

                    <div className={style.ContainerProceso}>
                        <div className={style.TitleProceso}>¿Cómo es el proceso?</div>

                        <div className={style.lineaitems}></div>

                        <div className={style.ContainerPasos}>

                            <div className={style.CardPaso}>
                                <div className={style.numeroPaso}>1</div>
                                <div className={style.textPaso}>Nos compartís en formato PDF el documento que necesitás que sea firmado electrónicamente.</div>
                            </div>

                            <div className={style.CardPaso}>
                                <div className={style.numeroPaso}>2</div>
                                <div className={style.textPaso}>Desde Trust Fund te generamos links individuales por cada persona firmante.</div>
                            </div>

                            <div className={style.CardPaso}>
                                <div className={style.numeroPaso}>3</div>
                                <div className={style.textPaso}>Los firmantes concretan su firma, adjuntando foto del frente y dorso del DNI y una selfie para validar su identidad.</div>
                            </div>
                            
                            <div className={style.CardPaso}>
                                <div className={style.numeroPaso}>4</div>
                                <div className={style.textPaso}>Finalizado el proceso, te compartimos el documento firmado, encriptado y validado por ZapSign. </div>
                            </div>

                        </div>

                        <div className={style.DisclaimerFirma}>La firma electrónica tiene la misma validez que la firma tradicional.</div>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}