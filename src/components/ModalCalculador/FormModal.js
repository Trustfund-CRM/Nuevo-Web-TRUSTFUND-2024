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
import Swal from "sweetalert2";

export default function FormModal({ setCalculador, calculador,setRenderForm ,handleClick, handleFormClick }) {
    const [form, setForm] = useState({
        Nombre: "",
        Apellido: "",
        Email: "",
        Dni: "",
        Telefono:"",
        Localidad:"",
      });

      const [colorNombre, setColorNombre] = useState("none");
      const [colorApellido, setColorApellido] = useState("none");
      const [colorEmail, setColorEmail] = useState("none");
      const [colorDni, setColorDni] = useState("none");
      const [colorTelefono, setColorTelefono] = useState("none");
      const [colorLocalidad, setColorLocalidad] = useState("none");
      
      const [valido, setValido] = useState(false);

    const customStyle = {
        confirmButtonColor: '#004993',
        fontFamily: 'Poppins, sans-serif',

    };
    const handleChangeForm = (e) => {
       
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: e.target.value,
        });

    };
    const verificarCampos = async () => {
        setColorNombre(form.Nombre.trim() !== "" ? "#F9FAFB" : "red");
        setColorApellido(form.Apellido.trim() !== "" ? "#F9FAFB" : "red");
        setColorEmail(form.Email.trim() !== "" ? "#F9FAFB" : "red");
        setColorDni(form.Dni.trim() !== "" ? "#F9FAFB" : "red");
        setColorTelefono(form.Telefono.trim() !== "" ? "#F9FAFB" : "red");
        setColorLocalidad(form.Localidad.trim() !== "" ? "#F9FAFB" : "red");
      };
    const enviarForm = async () => {
        setValido(true);
        await verificarCampos()
        if(
            !form.Nombre ||
            !form.Apellido ||
            !form.Email ||
            !form.Dni ||
            !form.Telefono ||
            !form.Localidad
        ){
            Swal.fire({

                text: 'Debe completar todos los campos',
                icon: 'error',
                confirmButtonText: 'Ok',
                customClass: {
                    confirmButton: 'mi-clase-confirm' // Puedes agregar una clase personalizada al botón confirmar si es necesario
                },
                ...customStyle // Incorpora el estilo personalizado
            });
        }else{
            handleClick(form)
            setValido(false);
            window.scrollTo({
                top: 1,
                behavior: 'smooth',
              });
            Swal.fire({
                title: 'Formulario enviado con exito',
   
                text: 'Un asesor se comunicará a la brevedad.',
                icon: 'success',
                confirmButtonText: 'Ok',
                customClass: {
                    confirmButton: 'mi-clase-confirm' // Puedes agregar una clase personalizada al botón confirmar si es necesario
                },
                ...customStyle // Incorpora el estilo personalizado
            });
            setCalculador(false)
            setRenderForm(false)
      
        }


    }
    useEffect(  () => {
        if(valido){
          verificarCampos()
        }
      
      }, [form, valido]);
    return (
        <div className={style.Container} onClick={handleFormClick} >
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
                    style={{
                        border:`solid 1px ${colorNombre}`
                      }}
                      autoComplete="off"
                    name="Nombre"
                    placeholder="Nombre/s"
                    value={form.Nombre}
                    onChange={handleChangeForm}
                />
                <input className={style.InputStyle}
                    style={{
                        border:`solid 1px ${colorApellido}`
                      }}
                      autoComplete="off"
                    placeholder="Apellido/s"
                    value={form.Apellido}
                    name="Apellido"
                    onChange={handleChangeForm}
                />
                <input
                    className={style.InputStyle}
                    autoComplete="off"
                    style={{
                        border:`solid 1px ${colorEmail}`
                      }}
                    name="Email"
                    value={form.Email}
                    placeholder="Email"
                    onChange={handleChangeForm}
                    type="text"
                />
                <input 
                  className={style.InputStyle}
                  autoComplete="off"
                  style={{
                    border:`solid 1px ${colorDni}`
                  }}
                  value={form.Dni}
                  name="Dni"
                  placeholder="DNI/ Pasaporte / Cédula"
                  onChange={handleChangeForm}
                  type="number"
                />
                <input 
                  className={style.InputStyle}
                  autoComplete="off"
                  style={{
                    border:`solid 1px ${colorTelefono}`
                  }}
                  name="Telefono"
                  placeholder="Teléfono"
                  value={form.Telefono}
                  onChange={handleChangeForm}
                  type="number"
                />
                <input 
                  className={style.InputStyle}
                  autoComplete="off"
                  style={{
                    border:`solid 1px ${colorLocalidad}`
                  }}
                  name="Localidad"
                  placeholder="Localidad"
                  value={form.Localidad}
                  onChange={handleChangeForm}
                />
            </div>
            <div className={style.DivContentBtn}>
                <div className={style.Boton1} onClick={()=> setRenderForm(false)}>
                    Volver a calcular
                </div>
                <div className={style.Boton2} onClick={() => enviarForm()}>
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
