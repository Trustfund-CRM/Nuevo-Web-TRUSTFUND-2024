import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { CalculadorPromocion } from "../CalculadorPromocion";
import style from './promocion.module.css';
import { imgPromo, cincuentaOff } from '@/styles';

export default function Promocion() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const screenWidth = window.innerWidth;
        screenWidth > 329 && screenWidth < 500 ? setIsMobile(true) : setIsMobile(false);
    }, []);

    return (
        <div>
            <div className={style.blueContainer} >
                <div className={style.promo}>
                    <div className={style.textGarantia}>
                        <div>
                            Tu garantía <br />
                            <b>de alquiler</b>
                        </div>
                    </div>
                    {/* <div className={style.containerDescuento}>
                        <div className={style.textDescuento}>
                            <h1 className={style.textOff} >50% OFF</h1>
                        </div>
                        <div className={style.containerVerde}>
                            <div className={style.textPago}>
                                <h4 className={style.pago} >PAGO AL CONTADO</h4>
                            </div>
                        </div>
                    </div> */}
                    <Image className={style.imageDescuento} alt="descuentoImage" src={cincuentaOff} />
                    <div className={style.bottomText}>
                        <h4 className={style.textValid}>Válido hasta el 31 de Octubre.</h4>
                    </div>
                </div>
                <div className={style.containerImgPromo}>
                    {isMobile ?
                        < Image className={style.imagePromo} alt="promoImage" src={imgPromo} />
                        : null
                    }
                    {/* <Image className={style.imagePromo} alt="promoImage" src={imgPromo} /> */}
                </div>
            </div>
            <CalculadorPromocion />
        </div>
    )
}
