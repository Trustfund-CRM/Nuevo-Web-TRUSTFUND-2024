import React from 'react'
import style from "../../components/nuestraGrantia/nuestraGarantia.module.css";
import { Accordion } from 'react-bootstrap';
import '../../components/nuestraGrantia/stylesInputs.css';
import FormularioTuReclamo from './FormularioTuReclamo';
import FormularioTuConsulta from './FormularioTuConsulta';

export default function SeccionFomulariosReclamos() {
    return (
        <div className={style.containerPrincipalGarantia}>
            <div className={style.subContenedorPrincipalGarantia}>
                <div className={style.BoxFormAccordion}>
                    <p className={style.TituloBeneficios}>¿No encontraste la respuesta a tu pregunta?</p>
                    <p>Te ayudamos a resolver tus inquietudes de manera rápida y eficaz</p>
                    <div className={style.ContainerPadreAccordionInmobiYPropietarios}>
                        <FormularioTuReclamo />
                        <FormularioTuConsulta />
                    </div>
                </div>
            </div>

        </div>
    )
}
