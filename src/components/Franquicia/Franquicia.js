"use client";
import Image from 'next/image';
import style from './Franquicia.module.css';
import { ResguardarPropiedad, pruebaParallax } from '@/styles';
import { Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Franquicia() {

    useEffect(() => {
        AOS.init();
    }, []);



    return (
        <div className={style.contenedorScroll} >
            <div className={style.subContenedorScroll} >
                <div className={style.BoxScrollIzquierda}>
                    <div data-aos="fade-down" data-aos-offset="300"
                        data-aos-easing="ease-in-sine" className={style.boxParrafo}>
                        <h1 className={style.headerParrafo}>
                            Resguardá tu propiedad
                        </h1>
                        <p className={style.parrafo}>
                            Los propietarios enfrentan numerosos riesgos al momento de alquilar su inmueble: falta
                            e incumplimiento de pago del alquiler en tiempo y forma, daños y deterioro en la propiedad,
                            usurpación y tediosos procesos legales y judiciales para poder recuperar pérdidas y daños
                            a través de las garantías tradicionales.
                        </p>
                        <p className={style.parrafo}>
                            Nuestra garantía <b>Trust Fund</b> te asegura una solución integral para abordar todos estos problemas de manera eficiente. 
                            Explorá más acerca de los beneficios que tenemos para ofrecerte.
                        </p>
                        <div className={style.button}>
                            <Button
                                href='/InmobiliariasYPropietarios'
                                className={style.ButtonAzul}
                                aria-controls="example-collapse-text"
                            >
                                VER MÁS
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={style.BoxScrollDerecha} >
                    <Image className={style.imagenScroll} alt='dvasd' src={ResguardarPropiedad} />
                </div>
            </div>
        </div>


    )
}
