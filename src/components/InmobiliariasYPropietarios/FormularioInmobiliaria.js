import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import style from ".././nuestraGrantia/nuestraGarantia.module.css";
import Image from 'next/image';
import { Accordion, Button, Modal } from 'react-bootstrap';
import { sendContactForm } from '../../../lib/api';
import { CruzModal, modalInmo } from '@/styles';

export default function FormularioInmobiliaria() {

    const [modalShow, setModalShow] = useState(false);

    let provincias = [
        'Buenos Aires',
        'Río Negro',
        'San Juan',
        'San Luis',
        'Ciudad Autónoma de Buenos Aires',
        'Tucumán',
        'Salta',
        'Córdoba',
        'Entre Ríos',
        'La Pampa',
        'Catamarca',
        'Mendoza',
        'Misiones',
        'Chaco',
        'Chubut',
        'Jujuy',
        'Santa Fe',
        'Tierra del Fuego',
        'Santa Cruz',
        'La Rioja',
        'Formosa',
        'Santiago del Estero',
        'Neuquén'
    ];

    const { register, handleSubmit, reset, formState: { errors } } = useForm();


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
                            <Image className={style.FotoModalInmo} alt='FotoModal' src={modalInmo} />
                        </div>
                        <div className={style.BoxModalInfoCeleste}>
                            <div className={style.SubBoxInfoModal}>
                                <h3 className={style.TituloModal}>¡Te adheriste a Trust Fund!</h3>
                                <p className={style.SubtituloModal}>Felicitaciones! 
                                    En el transcurso de 24hs hábiles
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


    const onSubmit = async (data) => {
        // const response = await fetch('/api/sendAccordions', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         ...data,
        //         subject: 'Asunto personalizado aquí' // Asignar el valor del asunto al campo oculto
        //     })
        // });
        // const responseData = await response.json();
        // setMessage(responseData.message);
        await sendContactForm({
            ...data,
            subject: 'Formulario - Adherí tu inmobiliaria ahora'
        })
        setModalShow(true)
        reset()
    };

    return (
        <>
            <form id="formulario1" className={style.ContainerAccordionInmoYPropie} onSubmit={handleSubmit(onSubmit)}>
                <Accordion style={{ backgroundColor: 'transparent !important' }} className={style.AccordionInmoYPropie} >
                    <Accordion.Item className={style.AccordionItem} eventKey="0" >
                        <Accordion.Header className={style.AccordionHeader}  >Adherí tu inmobiliaria ahora</Accordion.Header>
                        <Accordion.Body className={style.AccordionBodyInmoYPropie} >
                            <div className={style.BoxSelectInmoYPropie}>
                                <div className="input-wrapper">
                                    <label htmlFor="nombre" className='label-accordion' style={{ width: "max-content" }} >Nombre/s</label>
                                    <input className='input-accordion' type="text" name='Nombre' {...register('Nombre', { required: "Campo Requerido", })} />
                                    {errors.Nombre && (<p className="text-danger">{errors.Nombre.message}</p>)}
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="apellido" className='label-accordion' style={{ width: "max-content" }} >Apellido/s</label>
                                    <input className='input-accordion' type="text" name='Apellido' {...register('Apellido', { required: "Campo Requerido", })} />
                                    {errors.Apellido && (<p className="text-danger">{errors.Apellido.message}</p>)}
                                </div>
                            </div>
                            <div className={style.BoxSelectInmoYPropie}>
                                <div className="input-wrapper">
                                    <label htmlFor="email" className='label-accordion' style={{ width: "max-content" }} >Email</label>
                                    <input className='input-accordion' type="text" name='Email' {...register('Email', { required: "Campo Requerido", })} />
                                    {errors.Email && (<p className="text-danger">{errors.Email.message}</p>)}
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="telefono" className='label-accordion' style={{ width: "max-content" }} >Teléfono de contacto</label>
                                    <input className='input-accordion' type="text" name='Telefono' {...register('Telefono', { required: "Campo Requerido", })} />
                                    {errors.Telefono && (<p className="text-danger">{errors.Telefono.message}</p>)}
                                </div>
                            </div>
                            <div className={style.BoxSelectProvinciaYLocalidad}>
                                <div className="input-wrapper">
                                    <label htmlFor="provincia-garantiza" className='label-accordion' style={{ width: "max-content" }} >Provincia</label>
                                    <select className={style.SelectInmoYPropie} placeholder='Provincia' name='Provincia' {...register('Provincia', { required: "Campo Requerido", })} >
                                        <option></option>
                                        {provincias.map((p) => { return <option key={p} value={p}> {p} </option> })}
                                    </select>
                                    {errors.Provincia && (<p className="text-danger">{errors.Provincia.message}</p>)}
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="localidad-garantiza" className='label-accordion' style={{ width: "max-content" }} >Localidad</label>
                                    <input className={style.SelectInmoYPropie} type="text" name='Localidad' {...register('Localidad', { required: "Campo Requerido", })} />
                                    {errors.Localidad && (<p className="text-danger">{errors.Localidad.message}</p>)}
                                </div>
                            </div>
                            <div className={style.BoxButtonEnd}>
                                <button type='submit' className={style.ButtonBuscar}>ADHERIRME</button>
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
