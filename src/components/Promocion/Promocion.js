import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { CalculadorPromocion } from "../CalculadorPromocion";
import style from './promocion.module.css';
import { imgPromo, cincuentaOff } from '@/styles';
import promocion from "./promocion.png"
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
                    
                            Tu garantía <br />
                            <b>de alquiler</b>
                     
                    </div>
      
                    <Image className={style.imageDescuento}  
                    
            
                    alt="descuentoImage" src={promocion} />

                    <div className={style.bottomText}>
                        <h4 className={style.textValid}>Válido hasta el 31 de Diciembre.</h4>
                    </div>
                </div>
            


            
            </div>
            <CalculadorPromocion />
        </div>
    )
}
