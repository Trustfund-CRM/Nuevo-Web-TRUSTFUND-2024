import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import style from "../../components/nuestraGrantia/nuestraGarantia.module.css";
import { Accordion, Button, Collapse, Modal } from 'react-bootstrap';
import { sendContactForm } from '../../../lib/api';
import '../../components/nuestraGrantia/stylesInputs.css'
import Image from 'next/image';
import { CruzModal, ImagenModalCeleste, ImagenModalReclamo, ModalReclamoNuevo1 } from '@/styles';
import ButtonWsp from '../ButtonWsp/ButtonWsp';






export default function FormularioTuConsulta() {

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
                            <Image className={style.FotoModalReclamo} alt='FotoModal' src={ModalReclamoNuevo1} />
                        </div>
                        <div className={style.BoxModalInfoCeleste}>
                            <div className={style.SubBoxInfoModal}>
                                <h3 className={style.TituloModal}>Tu consulta fue enviada con éxito</h3>
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
            subject: 'Formulario - Realizá tu consulta'
        })
        setModalShow(true)
        reset()
    };

    return (
        <>
            <form id="formulario2" className={style.ContainerAccordionInmoYPropie} onSubmit={handleSubmit(onSubmit2)}>
                <Accordion style={{ backgroundColor: 'transparent !important' }} className={style.AccordionInmoYPropie} >
                    <Accordion.Item className={style.AccordionItem} eventKey="0" >
                        <Accordion.Header className={style.AccordionHeader}>Realizá tu consulta</Accordion.Header>
                        <Accordion.Body className={style.AccordionBodyInmoYPropie} >
                            <div className={style.BoxTituloConsulta}>
                                <div className="input-titulo">
                                    <p className='titulo-accordion-2' style={{ border: '0px !important' }}>Completá tus datos personales</p>
                                </div>
                            </div>
                            <div className={style.BoxNombreConsulta}>
                                <div className="input-wrapper">
                                    <label className='label-accordion' style={{ width: "max-content" }} htmlFor="nombre">Nombre/s</label>
                                    <input className='input-accordion' type="text" name='Nombre' {...register('Nombre', {required: "Campo Requerido",})} />
                                    {errors.Nombre && (<p className="text-danger">{errors.Nombre.message}</p>)}
                                </div>
                                <div className="input-wrapper">
                                    <label className='label-accordion' style={{ width: "max-content" }} htmlFor="apellido">Apellido/s</label>
                                    <input className='input-accordion' type="text" name='Apellido' {...register('Apellido',  {required: "Campo Requerido",})} />
                                    {errors.Apellido && (<p className="text-danger">{errors.Apellido.message}</p>)}
                                </div>

                            </div>
                            <div className={style.BoxContactoConsulta}>
                                <div className="input-wrapper">
                                    <label className='label-accordion' style={{ width: "max-content" }} htmlFor="email">Email</label>
                                    <input className='input-accordion' type="text" name='Email' {...register('Email',  {required: "Campo Requerido",})} />
                                    {errors.Email && (<p className="text-danger">{errors.Email.message}</p>)}
                                </div>
                                <div className="input-wrapper">
                                    <label className='label-accordion' style={{ width: "max-content" }} htmlFor="telefono">Teléfono de contacto</label>
                                    <input className='input-accordion' type="number" name='Telefono' {...register('Telefono', {required: "Campo Requerido",})} />
                                    {errors.Telefono && (<p className="text-danger">{errors.Telefono.message}</p>)}
                                </div>
                            </div>
                            <div className={style.BoxInformeConsulta}>
                                <div className="input-wrapper-textArea">
                                    <p className='titulo-accordion-2'>Informanos de tu motivo</p>
                                    <textarea className='input-textArea' type="text" htmlFor="motivo" name='Motivo' {...register('Motivo',  {required: "Campo Requerido",})} />
                                    {errors.Motivo && (<p className="text-danger">{errors.Motivo.message}</p>)}
                                </div>
                            </div>
                            <div className={style.BoxButtonEnd}>
                                <button className={style.ButtonBuscar} type='submit' >ENVIAR</button>

                            </div>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                <ButtonWsp/>
            </form>
        </>
    )
}
