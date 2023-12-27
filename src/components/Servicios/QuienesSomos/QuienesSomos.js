import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useWindowWidth, useWindowHeight } from "@react-hook/window-size";
import { FlechaSolicita } from "@/styles";
import style from './QuienesSomos.module.css';
import { CustomAccordion } from "@/components/CustomAccordion/CustomAccordion";
import { handleQuestions } from "./PreguntasQuienesSomos";

export default function QuienesSomos() {

    const onlyWidth = useWindowWidth();
    const onlyHeight = useWindowHeight();

    const { Questions } = handleQuestions(onlyWidth);

    const [calculador, setCalculador] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (window?.innerWidth < 1017) {
                setMobile(true);
                // setCalculador(true)
            }
        }
    }, []);

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
                        <div className={style.preTitle}>Garantías de alquiler</div>
                        <div className={style.Title}>Trust Fund, tu mejor opción.</div>
                    </div>
                </div>


                <div className={style.ContainerBody}>
                    <div className={style.LeftBlock}>
                        <div className={style.textGarantia}>
                            Nuestra garantía de alquiler
                            resguarda los intereses de todas las partes involucradas en un contrato de locación.
                        </div>
                        <div className={style.containerButtons}>
                            <div
                                className={style.ButtonHome}
                                onClick={() => abrirModal()}
                            >
                                Solicitá tu garantía
                            </div>
                            <Image className={style.flecha} src={FlechaSolicita} onClick={() => abrirModal()} />

                        </div>
                    </div>

                    <div className={style.RightBlock}>
                        {/* <div className={style.itemPregunta}>
                            <div className={style.Pregunta}>¿Quiénes somos?</div>
                            <div className={style.cruz}></div>
                        </div>
                        <div className={style.itemPregunta}>
                            <div className={style.Pregunta}>¿Qué cubrimos?</div>
                            <div className={style.cruz}></div>
                        </div>
                        <div className={style.itemPregunta}>
                            <div className={style.Pregunta}>Requisitos para obtener nuestra garantía</div>
                            <div className={style.cruz}></div>
                        </div>
                        <div className={style.itemPregunta}>
                            <div className={style.Pregunta}>¿Cómo la obtengo?</div>
                            <div className={style.cruz}></div>
                        </div> */}
                        {Questions.map((obj, index) => (
                            <CustomAccordion object={obj} key={index} route={'QuienesSomos'} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}