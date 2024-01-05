import React, { useState, useEffect } from "react";
import style from './Contrata.module.css'
import Image from "next/image";
import {
    ssn,
    FlechaSolicita,
    casaCubrimos,
    incendioCubrimos,
    incendioBlanco,
    roboBlanco,
    electroBlanco,
    civilBlanco,
    explosionBlanca,
    cablesBlanco,
    corazonBlanco,
} from "@/styles";

export default function Contrata() {

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
        <div id="contrata" className={style.ContainerContrata}>
            <div className={style.HeaderContrata}>
                <div className={style.ContainerTitle}>
                    <div className={style.preTitle}>Seguros</div>
                    <div className={style.Title}>¡Contratá tu <b>seguro de hogar y contra incendios</b> de manera fácil, rápida
                        y accedé a beneficios!
                    </div>
                </div>
            </div>


            <div className={style.ContainerBody}>
                <div className={style.LeftBlock}>
                    <div className={style.textGarantia}>
                        Ofrecemos coberturas pensadas a medida y beneficiosas tanto para inquilinos como para propietarios de viviendas.
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
                    <div className={style.subButtonText}>Solicitá tu seguro con nuestro partner oficial MERCI PRODUCTORES ASESORES DE SEGUROS S.A. </div>
                </div>
                {
                    //las preguntas deberian ser componentes separados que reciben open por props
                }
                <div className={style.RightBlock}>
                    <div className={style.itemPregunta}>
                        <div className={style.TopPregunta}>
                            <div className={style.ContainerHeaderPregunta}>
                                <Image src={casaCubrimos} className={style.imgCubrimos} />
                                <div className={style.HeaderPregunta}>
                                    <div className={style.TitlePregunta}>Hogar.</div>
                                    <div className={style.sideText}>Combinado Familiar</div>
                                </div>
                            </div>
                            <div className={style.SlidePregunta}>
                                <div className={style.Pregunta}>¿Qué cubrimos?</div>
                                <div className={style.cruz} onClick={() => handleSetOpen(1)}>
                                    {open && question === 1 ? "-" : "+"}
                                </div>
                            </div>
                        </div>
                        {open && question === 1 && (
                            <div className={`${question === 1 ? style.containerAnswerHogarOpen : style.containerAnswer}`}>
                                <div className={style.ContainerCubrimos}>
                                    <div className={style.RowCubrimos}>
                                        <Image src={incendioBlanco} />
                                        Incendio: El riesgo de incendio para la vivienda y los bienes que contenga tu hogar. Incluye huracán, ciclón y tornado.
                                    </div>
                                    <div className={style.RowCubrimos}>
                                        <Image src={roboBlanco} />
                                        Robo: Robo o hurto de los bienes que conforman tu mobiliario.
                                    </div>
                                    <div className={style.RowCubrimos}>
                                        <Image src={electroBlanco} />
                                        Electro: Robo o rotura de electrodomésticos que forman parte de tu hogar.
                                    </div>
                                    <div className={style.RowCubrimos}>
                                        <Image src={civilBlanco} />
                                        Responsabilidad civil: Daños que puedas ocasionar a terceros por hechos privados o como consecuencia de incendio o explosión en tu hogar.
                                    </div>
                                </div>
                            </div>
                        )
                        }
                    </div>
                    <div className={style.itemPregunta}>
                        <div className={style.TopPregunta}>
                            <div className={style.ContainerHeaderPregunta}>
                                <Image src={incendioCubrimos} className={style.imgCubrimos} />
                                <div className={style.HeaderPregunta}>
                                    <div className={style.TitlePregunta}>Incendio.</div>
                                </div>
                            </div>
                            <div className={style.SlidePregunta}>
                                <div className={style.Pregunta}>Coberturas</div>
                                <div className={style.cruz} onClick={() => handleSetOpen(2)}>
                                    {open && question === 2 ? "-" : "+"}
                                </div>
                            </div>
                        </div>
                        {open && question === 2 && (
                            <div className={`${question === 2 ? style.containerAnswerIncendioOpen : style.containerAnswer}`}>
                                <div className={style.ContainerCubrimos}>
                                    <div className={style.RowCubrimos}>
                                        <Image src={explosionBlanca} />
                                        Daños directos: Impactos de aeronaves, vehículos terrestres, humo que provenga de desperfectos en el funcionamiento de cualquier aparato de calefacción ambiental y/o cocina instalados en el bien asegurado.
                                    </div>
                                    <div className={style.RowCubrimos}>
                                        <Image src={cablesBlanco} />
                                        Daños indirectos: Cualquier medio empleado para extinguir, evitar o circunscribir la propagación del daño, salvamento, evacuación inevitable por el siniestro y demolición ordenada por autoridad competente.
                                    </div>
                                    <div className={style.RowCubrimos}>
                                        <Image src={corazonBlanco} />
                                        Cobertura adicional: Granizo, terremoto, remoción de escombros y gastos de limpieza, gastos de extinción de incendios, responsabilidad civil a consecuencia de incendio y/o explosión.
                                    </div>
                                </div>
                            </div>
                        )
                        }
                    </div>
                </div>
            </div>
            <div className={style.ContainerBottomContrata}>
                <div className={style.TextProveedor}>
                    *Proveedor de seguros MERCI PRODUCTORES ASESORES DE SEGUROS S.A Matrícula N°1722 – Grupo Delsud Administración financiera e inmobiliaria S.R.L (Letra chica)
                </div>
                <Image src={ssn} className={style.logoSSN}/>
            </div>
        </div>
    )
}