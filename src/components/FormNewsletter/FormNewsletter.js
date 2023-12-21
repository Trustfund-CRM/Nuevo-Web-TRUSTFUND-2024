import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { sendContactForm } from "../../../lib/api";
// import style from ".././nuestraGrantia/nuestraGarantia.module.css";
import style from './FormNewsletter.module.css'
import { Accordion, Button, Collapse, Modal } from "react-bootstrap";
import { CruzModal, modalGarantiza } from "@/styles";
import Image from "next/image";


export default function FormNewsletter() {

    const [modalShow, setModalShow] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit2 = async (data) => {
        await sendContactForm({
            ...data,
            subject: "Formulario - Garantizá tu propiedad",
        });
        setModalShow(true);
        reset();
    };

    return (
        <form
            className={style.ContainerAccordionInmoYPropie}
            onSubmit={handleSubmit(onSubmit2)}
        >
            <div className={style.AccordionItem} eventKey="0">
                <div className={style.AccordionHeader}>
                    Garantizá tu propiedad
                </div>
                <div className={style.AccordionBodyInmoYPropie}>
                    <div className={style.BoxSelectInmoYPropie}>
                        <div className={style.inputWrapper} >
                            <label
                                htmlFor="nombre-garantiza"
                                className={style.labelAccordion}
                            >
                                Nombre/s
                            </label>
                            <input
                                className={style.inputAccordion}
                                type="text"
                                name="Nombre"
                                {...register("Nombre", { required: "Campo Requerido" })}
                            />
                            {errors.Nombre && (
                                <p className="text-danger">{errors.Nombre.message}</p>
                            )}
                        </div>
                        <div className={style.inputWrapper}>
                            <label
                                htmlFor="apellido-garantiza"
                                className={style.labelAccordion}
                            >
                                Apellido/s
                            </label>
                            <input
                                className={style.inputAccordion}
                                type="text"
                                name="Apellido"
                                {...register("Apellido", { required: "Campo Requerido" })}
                            />
                            {errors.Apellido && (
                                <p className="text-danger">{errors.Apellido.message}</p>
                            )}
                        </div>
                    </div>
                    <div className={style.BoxSelectInmoYPropie}>
                        <div className={style.inputWrapper}>
                            <label
                                htmlFor="email-garantiza"
                                className={style.labelAccordion}
                            >
                                Email
                            </label>
                            <input
                                className={style.inputAccordion}
                                type="text"
                                name="Email"
                                {...register("Email", { required: "Campo Requerido" })}
                            />
                            {errors.Email && (
                                <p className="text-danger">{errors.Email.message}</p>
                            )}
                        </div>
                        <div className={style.inputWrapper}>
                            <label
                                htmlFor="telefono-garantiza"
                                className={style.labelAccordion}
                            >
                                Teléfono de contacto
                            </label>
                            <input
                                className={style.inputAccordion}
                                type="number"
                                name="Telefono"
                                {...register("Telefono", { required: "Campo Requerido" })}
                            />
                            {errors.Telefono && (
                                <p className="text-danger">{errors.Telefono.message}</p>
                            )}
                            <input type="hidden" id="subject" {...register("subject")} />{" "}
                            {/* Campo oculto para el asunto */}
                        </div>
                    </div>
                    {/* <div className={style.BoxSelectProvinciaYLocalidad}>
                                <div className="input-wrapper">
                                    <label
                                        htmlFor="provincia-garantiza"
                                        className="label-accordion"
                                        style={{ width: "max-content" }}
                                    >
                                        Provincia
                                    </label>
                                    <select
                                        className={style.SelectInmoYPropie}
                                        name="Provincia"
                                        {...register("Provincia", { required: "Campo Requerido" })}
                                    >
                                        <option></option>
                                        {provincias.map((p) => {
                                            return (
                                                <option key={p} value={p}>
                                                    {" "}
                                                    {p}{" "}
                                                </option>
                                            );
                                        })}
                                    </select>
                                    {errors.Provincia && (
                                        <p className="text-danger">{errors.Provincia.message}</p>
                                    )}
                                </div>
                                <div className="input-wrapper">
                                    <label
                                        htmlFor="localidad-garantiza"
                                        className="label-accordion"
                                        style={{ width: "max-content" }}
                                    >
                                        Localidad
                                    </label>
                                    <input
                                        className={style.SelectInmoYPropie}
                                        type="text"
                                        name="Localidad"
                                        {...register("Localidad", { required: "Campo Requerido" })}
                                    />
                                    {errors.Localidad && (
                                        <p className="text-danger">{errors.Localidad.message}</p>
                                    )}
                                </div>
                            </div> */}
                    <div className={style.BoxButtonEnd}>
                        <button type="submit" className={style.ButtonBuscar}>
                            ENVIAR
                        </button>
                    </div>
                </div>
            </div>
            {/* <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                /> */}
        </form>
    )
}