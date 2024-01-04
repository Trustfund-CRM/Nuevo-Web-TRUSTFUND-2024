import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useWindowWidth, useWindowHeight } from "@react-hook/window-size";
import {
    FlechaSolicita,
    ZapSign,
    seguridadFirma,
    legalidadFirma,
    integridadFirma,
    rapidezFirma,
} from "@/styles";
import style from './Firma.module.css';

export default function QuienesSomos() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const screenWidth = window.innerWidth;
        setIsMobile(screenWidth < 990);
        console.log(isMobile)
    }, []);

    const [calculador, setCalculador] = useState(false);

    const [open, setOpen] = useState(null);

    const handleSetOpen = () => {
        setOpen(!open);
    };

    const abrirModal = () => {
        if (isMobile) {
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
        <div id="firma">
            <div className={style.ContainerFirma}>
                <div className={style.HeaderFirma}>
                    <div className={style.ContainerTitle}>
                        <div className={style.preTitle}>Firma electrónica</div>
                        <div className={style.Title}>Hacé firmar tus documentos de manera rápida, simple y 100% digital.</div>
                    </div>
                </div>


                <div className={style.ContainerBody}>
                    <div className={style.ContainerSubTexts}>
                        <div className={style.subTextLeft}>Gestionamos la firma electrónica de tus documentos.</div>
                        <div className={style.subTextRight}>Simplificá los procesos de firma, ahorrá tiempo y digitalizate con Trust Fund.</div>
                    </div>

                    <div className={style.ContainerProceso}>
                        <div className={style.TitleProceso}>¿Cómo es el proceso?</div>

                        <div className={style.ContainerPasos}>

                            <div className={style.lineaItems}></div>

                            <div className={style.ContainerCardsPasos}>
                                <div className={style.ContainerPaso}>
                                    <div className={style.punto}></div>
                                    <div className={style.numeroPaso}>1</div>
                                    {isMobile ?
                                        <div className={style.textPaso}>Nos compartís en formato PDF el documento que necesitás que sea firmado electrónicamente.</div>
                                        : null
                                    }
                                </div>
                                {!isMobile ?
                                    <div className={style.textPaso}>Nos compartís en formato PDF el documento que necesitás que sea firmado electrónicamente.</div>
                                    : null
                                }

                                <div className={style.ContainerPaso}>
                                    <div className={style.punto}></div>
                                    <div className={style.numeroPaso}>2</div>
                                    {isMobile ?
                                        <div className={style.textPaso}>Desde Trust Fund te generamos links individuales por cada persona firmante.</div>
                                        : null
                                    }
                                </div>
                                {!isMobile ?
                                    <div className={style.textPaso}>Desde Trust Fund te generamos links individuales por cada persona firmante.</div>
                                    : null
                                }

                                <div className={style.ContainerPaso}>
                                    <div className={style.punto}></div>
                                    <div className={style.numeroPaso}>3</div>
                                    {isMobile ?
                                        <div className={style.textPaso}>Los firmantes concretan su firma, adjuntando foto del frente y dorso del DNI y una selfie para validar su identidad.</div>
                                        : null
                                    }
                                </div>
                                {!isMobile ?
                                    <div className={style.textPaso}>Los firmantes concretan su firma, adjuntando foto del frente y dorso del DNI y una selfie para validar su identidad.</div>
                                    : null
                                }

                                <div className={style.ContainerPaso}>
                                    <div className={style.punto}></div>
                                    <div className={style.numeroPaso}>4</div>
                                    {isMobile ?
                                        <div className={style.textPaso}>Finalizado el proceso, te compartimos el documento firmado, encriptado y validado por ZapSign.</div>
                                        : null
                                    }
                                </div>
                                {!isMobile ?
                                    <div className={style.textPaso}>Finalizado el proceso, te compartimos el documento firmado, encriptado y validado por ZapSign.</div>
                                    : null
                                }
                            </div>

                        </div>
                    </div>

                    <div className={style.DisclaimerFirma}>La firma electrónica tiene la misma validez que la firma tradicional.</div>

                    <div className={style.ContainerBottom}>
                        <div className={style.containerButtons}>
                            <div
                                className={style.ButtonHome}
                                onClick={() => abrirModal()}
                            >
                                Consultanos
                            </div>
                            <Image className={style.flecha} src={FlechaSolicita} onClick={() => abrirModal()} />

                        </div>

                        <div className={style.itemPregunta}>
                            <div className={style.TopPregunta}>
                                <div className={style.Pregunta}>Beneficios</div>
                                <div className={style.cruz} onClick={() => handleSetOpen()}>
                                    {open ? "-" : "+"}
                                </div>
                            </div>
                            {open && (
                                <div style={{ height: '300px' }} className={`${open ? style.containerAnswerOpen : style.containerAnswer}`}>
                                    <div className={style.ContainerCubrimos}>
                                        <div className={style.RowCubrimos}>
                                            <Image src={seguridadFirma} />
                                            Seguridad. Garantiza la autenticidad del firmante ya que se genera mediante un certificado digital único y no puede ser falsificado.
                                        </div>
                                        <div className={style.RowCubrimos}>
                                            <Image src={legalidadFirma} />
                                            Legalidad. La firma electrónica está avalada por la Ley 25.506, lo que permite cumplir con los requisitos jurídicos y reglamentarios.
                                        </div>
                                        <div className={style.RowCubrimos}>
                                            <Image src={integridadFirma} />
                                            Integridad. Asegura que el documento no ha sufrido manipulaciones ni fue alterado, proporcionando una prueba sólida de que el contenido es válido.
                                        </div>
                                        <div className={style.RowCubrimos}>
                                            <Image src={rapidezFirma} />
                                            Rapidez y eficiencia. Se eliminan los trámites engorrosos, las firmas manuales y la pérdida de tiempo, agilizando el proceso y garantizando la comodidad de las personas firmantes.
                                        </div>
                                    </div>
                                </div>
                            )
                            }
                        </div>
                    </div>

                    <div className={style.ContainerFirmaElectronica}>
                        <div className={style.TextFirmaElectronica}>Los usuarios firman documentos con validez legal, bajo la certificación de</div>

                        <Image src={ZapSign} className={style.logoZapSign} />
                    </div>

                </div>
            </div>
        </div>
    )
}