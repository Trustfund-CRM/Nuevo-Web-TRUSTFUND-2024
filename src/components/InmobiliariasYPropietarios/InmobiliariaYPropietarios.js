import React, { useState } from 'react'
import style from ".././nuestraGrantia/nuestraGarantia.module.css";
import Image from 'next/image';
import { Inmobiliarias, Localidades, InmobiliariaIconCeleste1, InmobiliariaIconCeleste2, InmobiliariaIconCeleste3, InmobiliariaIconCeleste4, PropietarioIcon1, PropietarioIcon2, PropietarioIcon3, PropietarioIcon4, RespuestaRapidaIcon, nuestraGarantiaIcon2, nuestraGarantiaIcon3, nuestraGarantiaIcon4 } from '@/styles/assets';
import { Accordion, Button, Collapse } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import '../nuestraGrantia/stylesInputs.css';

import FormularioGarantiza from './FormularioGarantiza';
import FormularioInmobiliaria from './FormularioInmobiliaria';
import ButtonWsp from '../ButtonWsp/ButtonWsp';


export default function InmobiliariaYPropietarios() {

    const [openPropietarios, setOpenPropietarios] = useState(false);
    const [openInmobiliarios, setOpenInmobiliarios] = useState(false);


        
    return (
        <div className={style.containerPrincipalInmoYPropietarios} >
            <div className={style.subContenedorPrincipalGarantia}>
                <div className={style.BoxComentsGoogle}>
                    <div className={style.Box1}>
                        <p className={style.ParrafoGarantia}>
                            <b>Trust Fund</b> nació con la misión de facilitar la concreción de alquileres en todas las provincias de Argentina.
                            A través de nuestro sistema de garantías, tenemos como objetivo brindar tranquilidad y garantizar condiciones
                            seguras para todas las partes, al momento de firmar un contrato de locación.
                        </p>

                        <p className={style.ParrafoGarantia}> Conocemos los riesgos y problemáticas a los que propietarios e inmobiliarias se exponen al concretar un alquiler,
                            por lo que nos proponemos dar respuesta y encargarnos de cada una de ellas.
                        </p>

                        <p className={style.ParrafoGarantia}>¡Estos son los beneficios!</p>
                    </div>
                    <div className={style.Box2}>
                        
                        <Swiper 
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, Pagination,]}
                            className={style.Swiper}
                        >
                            <SwiperSlide className={style.SwiperSlide}>
                                <Image className={style.swiperImg} src={Localidades} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image className={style.swiperImg} src={Inmobiliarias} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className={style.containerPrincipalGarantia}>
                <div className={style.subContenedorPrincipalInmobiliariaYPropietarios}>
                    <div className={style.BoxBeneficios}>
                        <div className={style.contenedorTituloBeneficios}>
                            <h3 className={style.TituloBeneficios}>Beneficios para propietarios</h3>
                        </div>
                        <div className={style.boxCardsCollapseInmoYPropietarios}>
                            <div className={style.CardBeneficiosInmoYPropie}>
                                <Image alt='icon' src={PropietarioIcon1} />
                                <div className={style.boxInfoCards}>
                                    <p className={style.tituloBeneficioPropie}>Inquilinos confiables.
                                    </p>
                                    <p className={style.parrafoCardBeneficioPropie}>
                                        Nos aseguramos que el solicitante tenga un historial crediticio favorable, de no ser así,
                                        pediremos al mismo reforzar su solicitud de garantía presentando mínimo un Co-Solicitante
                                        adicional para cumplir los requisitos.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Collapse in={openPropietarios}>
                            <div id="example-collapse-text" className={style.boxCardsCollapseInmoYPropietarios}>
                                <div className={style.CardBeneficiosInmoYPropie}>
                                    <Image alt='icon' src={PropietarioIcon2} />
                                    <div className={style.boxInfoCards}>
                                        <p className={style.tituloBeneficioPropie}>Pago garantizado por incumplimiento.
                                        </p>
                                        <p className={style.parrafoCardBeneficioPropie}>Garantizamos el pago mensual del monto pactado en el contrato ante incumplimiento, incluyendo servicios y expensas.</p>
                                    </div>
                                </div>
                                <div className={style.CardBeneficiosInmoYPropie}>
                                    <Image alt='icon' src={nuestraGarantiaIcon2} />
                                    <div className={style.boxInfoCards}>
                                        <p className={style.tituloBeneficioPropie}>Resguardamos tu propiedad.
                                        </p>
                                        <p className={style.parrafoCardBeneficioPropie}>Te aseguramos una solución integral para los problemas existentes al momento de alquilar tu inmueble: falta de pagos en tiempo y forma, daños y desgaste en la propiedad, usurpación, etc. La vigencia se mantiene hasta el momento mismo de la desocupación del inmueble.</p>
                                    </div>
                                </div>
                                <div className={style.CardBeneficiosInmoYPropie}>
                                    <Image alt='icon' src={nuestraGarantiaIcon3} />
                                    <div className={style.boxInfoCards}>
                                        <p className={style.tituloBeneficioPropie}>Comunicación honesta y transparente.
                                        </p>
                                        <p className={style.parrafoCardBeneficioPropie}>Te mantenemos al tanto de todo el proceso sin sorpresas ni requisitos nuevos, todo estará contemplado en el contrato de la garantía.</p>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                        <div className={style.boxButton}>
                            <Button
                                className={style.ButtonAzul}
                                onClick={() => setOpenPropietarios(!openPropietarios)}
                                aria-controls="example-collapse-text"
                                aria-expanded={openPropietarios}
                            >
                                {openPropietarios === true ? 'VER MENOS' : 'VER MÁS'}
                            </Button>
                        </div>
                    </div>
                    <div className={style.BoxBeneficios}>
                        <div className={style.contenedorTituloBeneficios}>
                            <h3 className={style.TituloBeneficiosCeleste}>Beneficios para inmobiliarias</h3>
                        </div>
                        <div className={style.boxCardsCollapseInmoYPropietarios}>
                            <div className={style.CardBeneficiosInmoYPropie}>
                                <Image alt='icon' src={InmobiliariaIconCeleste1} />
                                <div className={style.boxInfoCards}>
                                    <p className={style.parrafoCardBeneficioPropieCeleste}>Aprobación inmediata de garantías.
                                    </p>
                                    <p className={style.parrafoCardBeneficioPropie}>El inquilino obtiene su garantía en 24hs hábiles por lo que restamos a tus clientes la preocupación por su garantía de alquiler. Concretarás así más operaciones.</p>
                                </div>
                            </div>
                        </div>
                        <Collapse in={openInmobiliarios}>
                            <div id="example-collapse-text" className={style.boxCardsCollapseInmoYPropietarios}>
                                <div className={style.CardBeneficiosInmoYPropie}>
                                    <Image alt='icon' src={InmobiliariaIconCeleste2} />
                                    <div className={style.boxInfoCards}>
                                        <p className={style.parrafoCardBeneficioPropieCeleste}>Visibilidad. 
                                        </p>
                                        <p className={style.parrafoCardBeneficioPropie}>Adherite a nuestro sistema, trabajá con nosotros y figurá en nuestro buscador de inmobiliarias donde los usuarios que visitan la página podrán encontrarte.</p>
                                    </div>
                                </div>
                                <div className={style.CardBeneficiosInmoYPropie}>
                                    <Image alt='icon' src={InmobiliariaIconCeleste3} />
                                    <div className={style.boxInfoCards}>
                                        <p className={style.parrafoCardBeneficioPropieCeleste}>Rápida respuesta ante incumplimientos.
                                        </p>
                                        <p className={style.parrafoCardBeneficioPropie}>Contamos con un protocolo de alta calidad y preparado para responder ágilmente ante posibles incumplimientos en el contrato de alquiler por parte del inquilino.</p>
                                    </div>
                                </div>
                                <div className={style.CardBeneficiosInmoYPropie}>
                                    <Image alt='icon' src={InmobiliariaIconCeleste4} />
                                    <div className={style.boxInfoCards}>
                                        <p className={style.parrafoCardBeneficioPropieCeleste}>Gestión 100% online. 
                                        </p>
                                        <p className={style.parrafoCardBeneficioPropie}>Contamos con un CRM para inmobiliarias donde podrás realizar solicitudes de garantías y seguimientos sin moverte de tu trabajo</p>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                        <div className={style.boxButton}>
                            <Button
                                className={style.ButtonAzul}
                                onClick={() => setOpenInmobiliarios(!openInmobiliarios)}
                                aria-controls="example-collapse-text"
                                aria-expanded={openInmobiliarios}
                            >

                                {openInmobiliarios === true ? 'VER MENOS' : 'VER MÁS'}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.containerPrincipalGarantia}>
                <div className={style.subContenedorPrincipalGarantia}>
                    <div className={style.BoxFormAccordion}>
                        <div className={style.ContainerPadreAccordionInmobiYPropietarios}>
                        <FormularioGarantiza/>
                        <FormularioInmobiliaria/>    
                        </div>
                    </div>
                </div>
                <ButtonWsp />
            </div>
        </div>

    )
}
