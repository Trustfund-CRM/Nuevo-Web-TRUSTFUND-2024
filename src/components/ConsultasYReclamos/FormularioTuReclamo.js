import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import style from "../../components/nuestraGrantia/nuestraGarantia.module.css";
import { Accordion, Button, Modal  } from 'react-bootstrap';
import { sendContactForm } from '../../../lib/api';
import { CruzModal, ModalReclamoNuevo } from '@/styles';
import Image from 'next/image';

export default function FormularioTuReclamo() {

    const [message, setMessage] = useState('');
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [modalShow, setModalShow] = useState(false);



    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body >
                    <div className={style.CerrarIconModal}>
                        <Image alt='--' src={CruzModal} onClick={props.onHide} style={{ cursor: 'pointer' }} />
                    </div>
                    <div className={style.ContenedorModal}>
                        <div className={style.BoxModalImagen}>
                            <Image alt='FotoModal' className={style.FotoModalReclamo} src={ModalReclamoNuevo} />
                        </div>
                        <div className={style.BoxModalInfo}>
                            <div className={style.SubBoxInfoModal}>
                                <h3 className={style.TituloModal}>Tu reclamo fue enviado con éxito</h3>
                                <p className={style.SubtituloModal}>En el transcurso de 24hs hábiles
                                    nos pondremos en contacto</p>
                                <p className={style.SubtituloModal}>Muchas gracias</p>
                                <Button href='/' onClick={props.onHide}>OK</Button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }


    const onSubmit2 = async (data) => {
        // const response = await fetch('/api/sendAccordions', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         data,
        //         subject: 'Asunto personalizado aquí' // Asignar el valor del asunto al campo oculto
        //     })
        // });
        // const responseData = await response.json();
        // setMessage(responseData.message);
        await sendContactForm({
            ...data,
            subject: 'Formulario - Realizá tu reclamo'
        })
        setModalShow(true)
        reset()
    };

    return (
        <>
            <form id="formulario2" className={style.ContainerAccordionInmoYPropie} onSubmit={handleSubmit(onSubmit2)}>
                <Accordion style={{ backgroundColor: 'transparent !important' }} className={style.AccordionInmoYPropie} >
                    <Accordion.Item className={style.AccordionItem} eventKey="0" >
                        <Accordion.Header className={style.AccordionHeader}  >Realizá tu reclamo</Accordion.Header>
                        <Accordion.Body className={style.AccordionBodyInmoYPropie} >
                            <div className={style.BoxSelectReclamo}>
                                <div className="input-wrapper">
                                    <p className='titulo-accordion-2' style={{ border: '0px !important', textIndent: '0px !important' }}>Seleccioná el motivo</p>
                                </div>
                                <div className="input-wrapper">
                                    <select className={style.SelectInmoYPropie}>
                                        <option>ROTURA DE INMUEBLE</option>
                                        <option>FALTA DE RESPUESTA</option>
                                        <option>PAGO DE MENSUALIDADES</option>
                                        <option>COMISIONES</option>
                                        <option>OTROS</option>
                                    </select>
                                </div>
                            </div>
                            <div className={style.BoxSelectReclamo}>
                                <div className="input-wrapper">
                                    <label className='label-accordion' style={{ width: "max-content" }} htmlFor="nombre">Nombre/s</label>
                                    <input className='input-accordion' type="text" name='Nombre' {...register('Nombre',  {required: "Campo Requerido",})} />
                                    {errors.Nombre && (<p className="text-danger">{errors.Nombre.message}</p>)}
                                </div>
                                <div className="input-wrapper">
                                    <label className='label-accordion' style={{ width: "max-content" }} htmlFor="apellido">Apellido/s</label>
                                    <input className='input-accordion' type="text" name='Apellido' {...register('Apellido',  {required: "Campo Requerido",})} />
                                    {errors.Apellido && (<p className="text-danger">{errors.Apellido.message}</p>)}
                                </div>
                            </div>
                            <div className={style.BoxSelectReclamo}>
                                <div className="input-wrapper">
                                    <label className='label-accordion' style={{ width: "max-content" }} htmlFor="email">Email</label>
                                    <input className='input-accordion' type="text" name='Email' {...register('Email',  {required: "Campo Requerido",})} />
                                    {errors.Email && (<p className="text-danger">{errors.Email.message}</p>)}
                                </div>
                                <div className="input-wrapper">
                                    <label className='label-accordion' style={{ width: "max-content" }} htmlFor="telefono">Teléfono de contacto</label>
                                    <input className='input-accordion' type="number" name='Telefono' {...register('Telefono',  {required: "Campo Requerido",})} />
                                    {errors.Telefono && (<p className="text-danger">{errors.Telefono.message}</p>)}
                                </div>
                            </div>
                            <div className={style.BoxSelectReclamo}>
                                <div className="input-wrapper-textArea">
                                    <p className='titulo-accordion-2'>Informanos de tu motivo</p>
                                    <textarea className='input-textArea' type="text" htmlFor="reclamo" name='Reclamo' {...register('Reclamo',  {required: "Campo Requerido",})} />
                                    {errors.Reclamo && (<p className="text-danger">{errors.Reclamo.message}</p>)}
                                </div>
                            </div>
                            <div className={style.BoxButtonEnd}>
                                <button className={style.ButtonBuscar}>ENVIAR</button>
                            </div>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </form>
        </>
    )
}