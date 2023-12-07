import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import style from './PreguntasFrecuentes.module.css'
import { Button } from "react-bootstrap";
import { imgInquilinos, imgPropietarios, flechaModalBlue } from "@/styles";

export default function PreguntasFrecuentes() {

    const [inquilinosOPropietarios, setInquilinosOPropietarios] = useState('inquilinos');
    const [displayRespuesta, setDisplayRespuesta] = useState(0);

    const resultadoCalc = useSelector((state) => state.reducerInfoGarantia.calculador);

    const handleDisplayRespuesta = (value) => {
        if (displayRespuesta !== 0) {
            setDisplayRespuesta(0)
        }
        else {
            if (value === 1) {
                setDisplayRespuesta(1)
            }

            if (value === 2) {
                setDisplayRespuesta(2)
            }

            if (value === 3) {
                setDisplayRespuesta(3)
            }
        }
    }

    return (
        <div className={`${resultadoCalc ? style.ContainerFAQResultados : style.ContainerFAQ}`}>
            <div className={style.TitleFAQ}>
                <div className={style.ContainerTitleFAQ}>
                    <div className={style.Title}>Preguntas frecuentes</div>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className={style.ContainerSubTitle}>
                    <div className={style.ButtonsInquiProp}>
                        <div className={`${inquilinosOPropietarios === 'inquilinos' ? style.ButtonInquiActivo : style.ButtonInqui}`} onClick={() => setInquilinosOPropietarios('inquilinos')}>Inquilinos</div>
                        <div className={`${inquilinosOPropietarios === 'propietarios' ? style.ButtonPropActivo : style.ButtonProp}`} onClick={() => setInquilinosOPropietarios('propietarios')}>Propietarios e Inmobiliarias</div>
                    </div>

                    <Image className={style.flechaInquiProp} src={flechaModalBlue} />
                </div>

                <div className={style.ContainerBottom}>
                    <div className={style.ContainerPreguntas}>
                        <div className={style.ContainerPregunta}>
                            <div className={style.FAQ}>
                                <div className={style.Pregunta}>¿Cuáles son los requisitos para solicitar la garantía?</div>
                                {displayRespuesta === 1 ?
                                    <div className={style.Respuesta} >Para adquirir tu garantía solo necesitás una foto de frente y dorso de tu DNI y completar el formulario online con los datos solicitados.</div>
                                    : null
                                }
                            </div>
                            <div className={style.VerRespuesta} onClick={() => handleDisplayRespuesta(1)}>{displayRespuesta === 1 ? '-' : '+'} </div>
                        </div>

                        <div className={style.ContainerPregunta}>
                            <div className={style.FAQ}>
                                <div className={style.Pregunta}>¿Pueden no aceptarme la garantía de alquiler?</div>
                                {displayRespuesta === 2 ?
                                    <div className={style.Respuesta}></div>
                                    : null
                                }
                            </div>
                            <div className={style.VerRespuesta} onClick={() => handleDisplayRespuesta(2)}>{displayRespuesta === 2 ? '-' : '+'} </div>
                        </div>

                        <div className={style.ContainerPregunta}>
                            <div className={style.FAQ}>
                                <div className={style.Pregunta}>¿Qué es una Garantía Pre-aprobada?</div>
                                {displayRespuesta === 3 ?
                                    <div className={style.Respuesta}></div>
                                    : null
                                }
                            </div>
                            <div className={style.VerRespuesta} onClick={() => handleDisplayRespuesta(3)}>{displayRespuesta === 3 ? '-' : '+'} </div>
                        </div>
                    </div>

                    {inquilinosOPropietarios === 'inquilinos' ?
                        <Image className={style.ImageInquilinoProp} src={imgInquilinos} />
                        :
                        <Image className={style.ImageInquilinoProp} src={imgPropietarios} />
                    }
                </div>
            </div>
        </div>
    )
}