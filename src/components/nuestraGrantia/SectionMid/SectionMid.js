import React, { useState } from 'react'
import style from "../nuestraGarantia.module.css";
import { RespuestaRapidaIcon, nuestraGarantiaIcon2, nuestraGarantiaIcon3, nuestraGarantiaIcon4, nuestraGarantiaIcon5, nuestraGarantiaIcon6 } from '@/styles';
import Image from 'next/image';
import { Button, Collapse } from 'react-bootstrap';


export default function SectionMid() {

    const [open, setOpen] = useState(false);

    return (
        <div className={style.containerPrincipalGarantia}>
            <div className={style.subContenedorPrincipalGarantia}>
                <div className={style.BoxBeneficios}>
                    <div className={style.contenedorTituloBeneficios}>
                        <h3 className={style.TituloBeneficios}>Beneficios para Inquilinos</h3>
                        <p className={style.ParrafoGarantia}>Te contamos por qué somos tu mejor opción:</p>
                    </div>
                    <div className={style.ContenedorCardsBeneficios}>
                        <div className={style.CardBeneficios}>
                            <Image className={style.FotoIconosBeneficios} alt='icon' src={RespuestaRapidaIcon} />
                            <div>
                                <p className={style.tituloBeneficioPropie}>Respuesta rápida.
                                </p>
                                <p className={style.parrafoCardBeneficioPropie}>Una vez hecha la solicitud y recolectada la documentación requerida, se obtiene la resolución de la garantía en sólo 24 hs hábiles.</p>
                            </div>
                        </div>
                        <div className={style.CardBeneficios}>
                            <Image className={style.FotoIconosBeneficios} alt='icon' src={nuestraGarantiaIcon4} />
                            <div>
                                <p className={style.tituloBeneficioPropie}>Financiación flexible.
                                </p>
                                <p className={style.parrafoCardBeneficioPropie}>El costo del servicio se abona por única vez cuando se firma el contrato de fianza.</p>
                            </div>
                        </div>
                    </div>
                    <Collapse in={open}>
                        <div id="example-collapse-text" className={style.boxCardsCollapse}>
                        <div className={style.CardBeneficios}>
                            <Image className={style.FotoIconosBeneficios} alt='icon' src={nuestraGarantiaIcon2} />
                            <div style={{width:'50%'}}>
                                <p className={style.tituloBeneficioPropie}>Sin límites de edad ni de monto del bien a alquilar.
                                </p>
                                <p className={style.parrafoCardBeneficioPropie}>Ya que todas las personas mayores de 18 años pueden solicitar una garantía Trust Fund sin límites de monto.</p>
                            </div>
                        </div>
                        <div className={style.CardBeneficios}>
                            <Image className={style.FotoIconosBeneficios} alt='icon' src={nuestraGarantiaIcon5} />
                            <div style={{width:'80%'}}>
                                <p className={style.tituloBeneficioPropie}>Súper accesible.
                                </p>
                                <p className={style.parrafoCardBeneficioPropie}>Los inquilinos pueden obtenerla solo presentando su DNI.</p>
                            </div>
                        </div><div className={style.CardBeneficios}>
                            <Image className={style.FotoIconosBeneficios} alt='icon' src={nuestraGarantiaIcon3} />
                            <div style={{width:'80%'}}>
                                <p className={style.tituloBeneficioPropie}>Sin costos de gestión.
                                </p>
                                <p className={style.parrafoCardBeneficioPropie}>Solicitar una garantía Trust Fund no tiene asociado ningún tipo de gasto. Se deberá abonar únicamente el servicio en el momento en que se obtiene la garantía.</p>
                            </div>
                        </div>
                        <div className={style.CardBeneficios}>
                            <Image className={style.FotoIconosBeneficios} alt='icon' src={nuestraGarantiaIcon6} />
                            <div style={{width:'80%'}}>
                                <p className={style.tituloBeneficioPropie}>No estás solo.
                                </p>
                                <p className={style.parrafoCardBeneficioPropie}>Si tus ingresos no son suficientes para aplicar a la garantía podés hacerlo de todas formas junto a un Co-Garante.</p>
                            </div>
                        </div>
                        </div>
                    </Collapse>
                    <div className={style.boxButton}>
                        <Button
                            className={style.ButtonAzul}
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                        >
                            {open === true ? 'VER MENOS' : 'VER MÁS'}
                        </Button>
                    </div>
                  
                </div>
            </div>
        </div>
    )
}
