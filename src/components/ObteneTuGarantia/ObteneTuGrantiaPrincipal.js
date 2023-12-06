import React, { useState } from 'react'
import style2 from "./obteneTuGarantia.module.css";
import style3 from "../../components/nuestraGrantia/nuestraGarantia.module.css"
import style from "../CalculadorPrincipal/Calculador.module.css";
import '../nuestraGrantia/stylesInputs.css';
import { Button, Modal } from 'react-bootstrap';
import { IconPesosAzul, CruzModal, ModalReclamoNuevo } from '@/styles';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { sendContactForm } from '../../../lib/api';
import ButtonWsp from '../ButtonWsp/ButtonWsp';


const inputs = [
    { label: 'Nombre/s', name: 'Nombre', type: 'text', required: true },
    { label: 'Apellido/s', name: 'Apellido', type: 'text', required: true },
    { label: 'Email', name: 'Email', type: 'text', required: true },
    { label: 'DNI/Pasaporte/Cédula', name: 'Dni', type: 'text', required: true },
    { label: 'Teléfono de contacto', name: 'Telefono', type: 'text', required: true },
    { label: 'Localidad', name: 'Localidad', type: 'text', required: true }
];




export default function ObteneTuGrantiaPrincipal() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [modalShow, setModalShow] = useState(false);

    var datosStepPrincipal = {}

    if (typeof window !== 'undefined') {
        datosStepPrincipal = JSON.parse(localStorage.getItem('datosLocalStorage'));
    }


    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body >
                    <div className={style3.CerrarIconModal}>
                        <Image alt='--' src={CruzModal} onClick={props.onHide} style={{ cursor: 'pointer' }} />
                    </div>
                    <div className={style3.ContenedorModal}>
                        <div className={style3.BoxModalImagen}>
                            <Image alt='FotoModal' className={style3.FotoModalReclamo} src={ModalReclamoNuevo} />
                        </div>
                        <div className={style3.BoxModalInfo}>
                            <div className={style3.SubBoxInfoModal}>
                                <h3 className={style3.TituloModal}>¡Tu solicitud se generó con éxito!</h3>
                                <p className={style3.SubtituloModal}>En 24hs hábiles nuestros asesores
                                    se pondrán en contacto</p>
                                <p className={style3.SubtituloModal}>Muchas gracias</p>
                                <Button href='/' onClick={props.onHide}>OK</Button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }


    const onSubmit = async (data) => {
        console.log('data: ', data)
        console.log('datosStepPrincipal : ', datosStepPrincipal)
        await sendContactForm({
            ...data,
            ...datosStepPrincipal,
            subject: 'Formulario - Obtené tu garantía'
        })
        // reset()
        setModalShow(true)
    };

    return (
        <div className={style2.ContainerObteneTuGarantia}>
            <form className={style2.SubContainerObteneTuGarantia} onSubmit={handleSubmit(onSubmit)}>
                <div className={style2.BoxObteneTuGarantia}>
                    <div className={`${datosStepPrincipal.pago === 'Promocion' ? style2.SubBoxDerecha : style2.subBoxDrechaObteneTuGarantia}`}>
                        <div className={`${datosStepPrincipal.pago !== 'Promocion' ? style2.boxTitulosObteneTuGarantia : style2.boxTitulosObteneTuGarantiaPromo}`}>
                            <h1 className={style2.TituloObteneTuGarantia}>Obtené tu garantía</h1>
                            <p className={style2.SubtituloObteneTuGarantia}>Completá tus datos personales para <b>solicitar tu garantía</b></p>
                        </div>
                        <div className={`${datosStepPrincipal.pago !== 'Promocion' ? style2.BoxIputsObteneTuGarantia : style2.BoxIputsObteneTuGarantiaPromo }`}>
                            {inputs.map((input, index) => (
                                <div key={index} className="input-wrapper">
                                    <label className='label-accordion' htmlFor={input.name} style={{ width: "max-content" }}>
                                        {input.label}
                                    </label>
                                    <input
                                        className='input-ObteneTuGarantia'
                                        name={input.name}
                                        type={input.type}
                                        {...register(input.name, { required: input.required })}

                                    />
                                </div>
                            ))}
                        </div>
                        <div className={`${datosStepPrincipal.pago !== 'Promocion' ? style2.BoxButtonObtene : style2.BoxButtonObtenePromo }`}>
                            <Button type='submit' className={style.buttonCalculador}>SOLICITAR</Button>
                        </div>
                    </div>
                </div>
                {
                    datosStepPrincipal.pago !== 'Promocion' &&
                    <div className={style2.BoxObteneTuGarantia}>
                        <div className={style2.subBoxDrechaObteneTuGarantiaDos}>
                            <div>
                                <p className={style2.SubtituloObteneTuGarantia}>Datos del alquiler y garantía</p>
                                <div className={style2.BoxMobileInfo}>
                                    <div className={style2.ContenedorDatosObtenerGarantia}>
                                        <div className={style.BoxDatosGarantía}>
                                            <p className={style.labelCalculador}>TIPO DE PROPIEDAD</p><p className={style.InfoAzul}>{datosStepPrincipal != null && datosStepPrincipal.tipoDePropiedad}</p>
                                        </div>
                                        <div className={style.BoxDatosGarantía}>
                                            <p className={style.labelCalculador}>DURACIÓN</p><p className={style.InfoAzul}>{datosStepPrincipal != null && datosStepPrincipal.Duracion}</p>
                                        </div>
                                        <div className={style.BoxDatosGarantía}>
                                            <p className={style.labelCalculador}>VALOR ALQUILER</p><p className={style.InfoAzul}><Image alt='iconoPesosAzul' src={IconPesosAzul} />{datosStepPrincipal != null && datosStepPrincipal.valorAlquiler}</p>
                                        </div>
                                        <div className={style.BoxDatosGarantía}>
                                            <p className={style.labelCalculador}>VALOR EXPENSAS</p><p className={style.InfoAzul}><Image alt='iconoPesosAzul' src={IconPesosAzul} />{datosStepPrincipal != null && datosStepPrincipal.valorExpensas}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style2.BoxMobileInfo}>
                                {/* {
                                datosStepPrincipal.pago === 'Promocion' &&
                                <div className={style.BoxCalculadorGarantía}>
                                    <div className={style.boxResultadoCalculador} >
                                        <p className={style2.labelCalculadorGarantiaEspeacial}>VALOR DE GARANTÍA</p>
                                        <p className={style2.InfoAzul}><Image alt='iconoPesosAzul' src={IconPesosAzul} /><s>{datosStepPrincipal != null && datosStepPrincipal.resultado}</s></p>
                                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '14px', width: '75px' }}>50% off</p>
                                    </div>
                                    <div className={style2.BoxTituLoCuotasObteneTuGarantia}>
                                        <p className={style.labelCalculador}>AL CONTADO</p>
                                    </div>
                                    <div className={style.boxResultadoCuotas}>
                                        <div style={{ display: 'flex', flexDirection: 'row', columnGap: '20px', width: '-webkit-fill-available', justifyContent: 'space-between' }}>
                                            <p style={{ display: 'flex', alignItems: 'center' }}>En 1 pago de </p>
                                            <p className={style2.InfoAzul}><Image alt='iconoPesosAzul' src={IconPesosAzul} />{datosStepPrincipal != null && datosStepPrincipal.contado}</p>
                                        </div>
                                    </div>
                                </div>
                            } */}
                                {
                                    datosStepPrincipal.pago === 'Contado' &&
                                    <div className={style.BoxCalculadorGarantía}>
                                        <div className={style.boxResultadoCalculador} >
                                            <p className={style2.labelCalculadorGarantiaEspeacial}>VALOR DE GARANTÍA</p>
                                            <p className={style2.InfoAzul}><Image alt='iconoPesosAzul' src={IconPesosAzul} /><s>{datosStepPrincipal != null && datosStepPrincipal.resultado}</s></p>
                                            <p style={{ display: 'flex', alignItems: 'center', fontSize: '14px', width: '75px' }}>15% off</p>
                                        </div>
                                        <div className={style2.BoxTituLoCuotasObteneTuGarantia}>
                                            <p className={style.labelCalculador}>AL CONTADO</p>
                                        </div>
                                        <div className={style.boxResultadoCuotas}>
                                            <div style={{ display: 'flex', flexDirection: 'row', columnGap: '20px', width: '-webkit-fill-available', justifyContent: 'space-between' }}>
                                                <p style={{ display: 'flex', alignItems: 'center' }}>En 1 pago de </p>
                                                <p className={style2.InfoAzul}><Image alt='iconoPesosAzul' src={IconPesosAzul} />{datosStepPrincipal != null && datosStepPrincipal.contado}</p>
                                            </div>
                                        </div>
                                    </div>
                                }

                                {
                                    datosStepPrincipal.pago === '3 Cuotas' &&
                                    <div className={style.BoxCalculadorGarantía}>
                                        <div className={style.boxResultadoCalculador} >
                                            <p className={style2.labelCalculadorGarantiaEspeacial}>VALOR DE GARANTÍA</p>
                                            <p className={style2.InfoAzul}><Image alt='iconoPesosAzul' src={IconPesosAzul} />{datosStepPrincipal != null && datosStepPrincipal.resultado}</p>
                                        </div>
                                        <div className={style2.BoxTituLoCuotasObteneTuGarantia}>
                                            <p className={style.labelCalculador}>3 CUOTAS SIN INTERÉS</p>
                                        </div>
                                        <div className={style.boxResultadoCuotas}>
                                            <div style={{ display: 'flex', flexDirection: 'row', columnGap: '20px', width: '-webkit-fill-available', justifyContent: 'space-between' }}>
                                                <p style={{ display: 'flex', alignItems: 'center' }}>Anticipo del 15%</p>
                                                <p className={style2.InfoAzul}><Image alt='iconoPesosAzul' src={IconPesosAzul} />{datosStepPrincipal != null && datosStepPrincipal.anticipo}</p>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'row', columnGap: '20px', width: '-webkit-fill-available', justifyContent: 'space-between' }}>
                                                <p style={{ display: 'flex', alignItems: 'center' }}>+2 cuotas de </p>
                                                <p className={style2.InfoAzul}><Image alt='iconoPesosAzul' src={IconPesosAzul} />{datosStepPrincipal != null && datosStepPrincipal.cuotas}</p>
                                            </div>
                                        </div>
                                    </div>
                                }

                                {
                                    datosStepPrincipal.pago === '6 Cuotas' &&
                                    <div className={style.BoxCalculadorGarantía}>
                                        <div className={style.boxResultadoCalculador} >
                                            <p className={style2.labelCalculadorGarantiaEspeacial}>VALOR DE GARANTÍA</p>
                                            <p className={style2.InfoAzul}><Image alt='iconoPesosAzul' src={IconPesosAzul} />{datosStepPrincipal != null && datosStepPrincipal.resultado}</p>
                                        </div>
                                        <div className={style2.BoxTituLoCuotasObteneTuGarantia}>
                                            <p className={style.labelCalculador}>6 CUOTAS SIN INTERÉS</p>
                                        </div>
                                        <div className={style.boxResultadoCuotas}>
                                            <div style={{ display: 'flex', flexDirection: 'row', columnGap: '20px', width: '-webkit-fill-available', justifyContent: 'space-between' }}>
                                                <p style={{ display: 'flex', alignItems: 'center' }}>Anticipo del 15%</p>
                                                <p className={style2.InfoAzul}><Image alt='iconoPesosAzul' src={IconPesosAzul} />{datosStepPrincipal != null && datosStepPrincipal.anticipo}</p>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'row', columnGap: '20px', width: '-webkit-fill-available', justifyContent: 'space-between' }}>
                                                <p style={{ display: 'flex', alignItems: 'center' }}>+5 cuotas de </p>
                                                <p className={style2.InfoAzul}><Image alt='iconoPesosAzul' src={IconPesosAzul} />{datosStepPrincipal != null && datosStepPrincipal.cuotas}</p>
                                            </div>
                                        </div>
                                    </div>
                                }

                                {
                                    datosStepPrincipal.pago === '12 Cuotas' &&
                                    <div className={style.BoxCalculadorGarantía}>
                                        <div className={style.boxResultadoCalculador} >
                                            <p className={style2.labelCalculadorGarantiaEspeacial}>VALOR DE GARANTÍA</p>
                                            <p className={style.InfoAzul}><Image alt='iconoPesosAzul' src={IconPesosAzul} />{datosStepPrincipal != null && datosStepPrincipal.resultado}</p>
                                        </div>
                                        <div className={style2.BoxTituLoCuotasObteneTuGarantia}>
                                            <p className={style.labelCalculador}>12 CUOTAS SIN INTERÉS</p>
                                        </div>
                                        <div className={style.boxResultadoCuotas}>
                                            <div style={{ display: 'flex', flexDirection: 'row', columnGap: '20px', width: '-webkit-fill-available', justifyContent: 'space-between' }}>
                                                <p>Anticipo del 15%</p>
                                                <p className={style2.InfoAzul}><Image alt='iconoPesosAzul' src={IconPesosAzul} />{datosStepPrincipal != null && datosStepPrincipal.anticipo}</p>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'row', columnGap: '20px', width: '-webkit-fill-available', justifyContent: 'space-between' }}>
                                                <p style={{ display: 'flex', alignItems: 'center' }}>+11 cuotas de </p>
                                                <p className={style2.InfoAzul}><Image alt='iconoPesosAzul' src={IconPesosAzul} />{datosStepPrincipal != null && datosStepPrincipal.cuotas}</p>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {
                                    datosStepPrincipal.pago !== 'Promocion' &&
                                    <div className={style2.contenedorButtonsTuGarantia}>
                                        <Button className={style.ButtonTextVolverCalcular} href='/' >
                                            VOLVER A CALCULAR
                                        </Button>
                                    </div>
                                }
                            </div>
                            {
                                datosStepPrincipal.pago !== 'Promocion' &&
                                <div className=''>
                                    <p className={style.ParrafoCelesteCalculador}>
                                        El resultado que surja del presente simulador es meramente referencial,
                                        no reviste carácter contractual ni constituye una oferta o
                                        aceptación de la solicitud que presente el cliente.
                                        El valor arrojado corresponde al método de pago.
                                    </p>
                                </div>
                            }
                        </div>
                    </div>
                }
            </form>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <ButtonWsp />
        </div>
    )
}
