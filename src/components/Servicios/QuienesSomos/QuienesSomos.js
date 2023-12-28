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
import style from './QuienesSomos.module.css';

export default function QuienesSomos() {

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
                        <div className={style.itemPregunta}>
                            <div className={style.TopPregunta}>
                                <div className={style.Pregunta}>¿Quiénes somos?</div>
                                <div className={style.cruz} onClick={() => handleSetOpen(1)}>
                                    {open && question === 1 ? "-" : "+"}
                                </div>
                            </div>
                            {open && question === 1 && (
                                <div className={`${question === 1 ? style.containerAnswerOpen : style.containerAnswer}`}>
                                    Nuestra <b>garantía de alquiler</b> cubre las <b>obligaciones establecidas en un contrato de locación</b>, siendo el respaldo más completo para resguardar los intereses de todas las partes involucradas: inquilinos, propietarios e inmobiliarias.<br></br> Otorgamos <b>garantías de fianza en todo el territorio nacional</b> con el aval de Delsud, lo que nos permite contar con un respaldo económico amplio, ya que poseemos fondos para financiar garantías de manera segura y flexible.
                                </div>
                            )
                            }
                        </div>
                        <div className={style.itemPregunta}>
                            <div className={style.TopPregunta}>
                                <div className={style.Pregunta}>¿Qué cubrimos?</div>
                                <div className={style.cruz} onClick={() => handleSetOpen(2)}>
                                    {open && question === 2 ? "-" : "+"}
                                </div>
                            </div>
                            {open && question === 2 && (
                                <div className={`${question === 2 ? style.containerAnswerOpen : style.containerAnswer}`}>
                                    <div className={style.ContainerCubrimos}>
                                        <div className={style.RowCubrimos}>
                                            <Image src={casaPreguntas} />
                                            <b>Alquiler y expensas.</b>
                                        </div>
                                        <div className={style.RowCubrimos}>
                                            <Image src={serviciosPreguntas} />
                                            <b>Servicios</b> (Luz, agua, electricidad y SUM).
                                        </div>
                                        <div className={style.RowCubrimos}>
                                            <Image src={dañosPreguntas} />
                                            <b>Daños y roturas en el inmueble</b> (vidrios, cerraduras, grifería, calefactores y/o artefactos de aire acondicionado).
                                        </div>
                                        <div className={style.RowCubrimos}>
                                            <Image src={costosPreguntas} />
                                            <b>Costos de desalojo ante posible usurpación</b> del inquilino.
                                        </div>
                                    </div>
                                </div>
                            )
                            }
                        </div>
                        <div className={style.itemPregunta}>
                            <div className={style.TopPregunta}>
                                <div className={style.Pregunta}>Requisitos para obtener nuestra garantía</div>
                                <div className={style.cruz} onClick={() => handleSetOpen(3)}>
                                    {open && question === 3 ? "-" : "+"}
                                </div>
                            </div>
                            {open && question === 3 && (
                                <div className={`${question === 3 ? style.containerAnswerOpen : style.containerAnswer}`}>
                                    <div><b>DNI - Historial crediticio favorable</b></div>
                                    <div>*En caso que tu historial crediticio sea desfavorable, te solicitaremos la inclusión de un co-solicitante.
                                    </div>
                                </div>
                            )
                            }
                        </div>
                        <div className={style.itemPregunta}>
                            <div className={style.TopPregunta}>
                                <div className={style.Pregunta}>¿Cómo la obtengo?</div>
                                <div className={style.cruz} onClick={() => handleSetOpen(4)}>
                                    {open && question === 4 ? "-" : "+"}
                                </div>
                            </div>
                            {open && question === 4 && (
                                <div className={`${question === 4 ? style.containerAnswerOpen : style.containerAnswer}`}>
                                    <div>• Foto del <b>frente y dorso de tu DNI.</b></div>
                                    <div>• Elegís el <b>método de pago: </b>Descuentos de contado - Financiación en cuotas.</div>
                                    <div>• <b>¡Listo! </b>En menos de 24hs tendrás tu garantía de alquiler.</div>
                                </div>
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}