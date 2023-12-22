import Image from "next/image";
import { useEffect, useRef } from "react";
import style from "./FormModal.module.css";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import { useState } from "react";
import {
    star,
    percentage,
    frame,
    flechaModal,
    flechaModalBlue,
    CruzModal,
} from "@/styles";
import "animate.css";
import Link from "next/link";


export default function FormModal({ setCalculador, calculador,setRenderForm }) {

    return (
        <div className={style.Container} >
            <div className={style.ContentText}>
                <div className={style.TextObteneGarantia}>
                    Obtené tu garantía
                </div>
                <div className={style.TextCompletaTusDatos}>
                    Completá tus datos personales para solicitar tu garantía.
                </div>
            </div>
            <div className={style.GridContentInputs}>
                <input className={style.InputStyle}
                    placeholder="Nombre/s"
                />
                <input className={style.InputStyle}
                    placeholder="Apellido/s"
                />
                <input
                    className={style.InputStyle}
                    placeholder="Email"
                />
                <input 
                  className={style.InputStyle}
                  placeholder="DNI/ Pasaporte / Cédula"
                />
                <input 
                  className={style.InputStyle}
                  placeholder="Teléfono"
                />
                <input 
                  className={style.InputStyle}
                  placeholder="Localidad"
                />
            </div>
            <div className={style.DivContentBtn}>
                <div className={style.Boton1} onClick={()=> setRenderForm(false)}>
                    Volver a calcular
                </div>
                <div className={style.Boton2}>
                    Solicitá tu garantía
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"
             
                    >
                        <path d="M14.9301 18.8201C14.7401 18.8201 14.5501 18.7501 14.4001 18.6001C14.1101 18.3101 14.1101 17.8301 14.4001 17.5401L19.9401 12.0001L14.4001 6.46012C14.1101 6.17012 14.1101 5.69012 14.4001 5.40012C14.6901 5.11012 15.1701 5.11012 15.4601 5.40012L21.5301 11.4701C21.8201 11.7601 21.8201 12.2401 21.5301 12.5301L15.4601 18.6001C15.3101 18.7501 15.1201 18.8201 14.9301 18.8201Z" fill="#F9FAFB" />
                        <path d="M20.83 12.75H4C3.59 12.75 3.25 12.41 3.25 12C3.25 11.59 3.59 11.25 4 11.25H20.83C21.24 11.25 21.58 11.59 21.58 12C21.58 12.41 21.24 12.75 20.83 12.75Z" fill="#F9FAFB" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
