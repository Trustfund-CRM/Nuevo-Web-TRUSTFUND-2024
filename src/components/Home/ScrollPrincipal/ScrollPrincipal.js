import Image from "next/image";
import style from './ScrollPrincipal.module.css';
import { backgroundHome, flechaCirculo, scroll } from "@/styles";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import ModalCalculador from "@/components/ModalCalculador/ModalCalculador";

export default function ScrollPrincipal() {

    const [calculador, setCalculador] = useState(false);

    var datosCalculador = {};

    useEffect(() => {
        if (typeof window !== 'undefined') {

            datosCalculador = JSON.parse(localStorage.getItem('datosCalculador'));

            if (window?.innerWidth < 1200) {
                console.log(window?.innerWidth)
                setCalculador(true)
            }
        }
    }, [])

    const handleCalculador = () => {
        setCalculador(true)
    }

    return (
        <div>
            <div className={style.ContainerScrollPrincipal} >
                <div className={style.ContainerTitle}>
                    <div className={style.Intro}>Somos Trust Fund</div>
                    <div className={style.Titulo}>
                        <div className={style.Text1}>Garantizamos</div>
                        <div className={style.Text2}>tu alquiler</div>
                    </div>
                    <div className={style.subText}>
                        Nulla facilisi. Mauris ac neque suscipit, molestie libero vitae
                    </div>
                    <div className={style.containerButtons}>
                        <Button className={style.ButtonHome} onClick={() => handleCalculador()} >Cotizá tu garantía</Button>
                        <Image className={style.flecha} src={flechaCirculo} />
                    </div>
                </div>
                <Image className={style.FotoScrollPrincipal} alt="fotoPrincipal" src={backgroundHome} />
            </div>
            <div className={style.footerHome}>
                <Image className={style.scrollFooter} src={scroll} />
            </div>

            {
                calculador ?
                    <div className={`${datosCalculador.resultado ? style.ContainerSubFooterCalculador : style.ContainerSubFooter}`}>
                        <ModalCalculador setCalculador={setCalculador} />
                    </div>
                    : null
            }
        </div>
    )
}