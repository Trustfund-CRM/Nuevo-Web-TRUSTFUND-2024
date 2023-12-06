import Image from "next/image";
import style from './ScrollVentajas.module.css';
import { flechaModalBlue } from "@/styles";
import { useSelector } from "react-redux";

export default function ScrollVentajas() {

    const resultadoCalc = useSelector((state) => state.reducerInfoGarantia.calculador);

    const scrollingText = [
        'con firma electrónica.',
        // '100% Online.',
        // 'en menos de 24hs.',
        // 'con pagos a medida.',
        // 'personalizada.'
    ]

    return (
        <div className={`${resultadoCalc ? style.ContainerScrollVentajasResultados : style.ContainerScrollVentajas}`}>
            <div className={style.ContainerTop}>
                <div className={style.TitleVentajas}>Ventajas de utilizar Trust Fund</div>
            </div>

            <div className={style.ContainerBottom}>
                <div className={style.subContainerBottom}>
                    <div className={style.subTitle}>
                        <div className={style.subTextLeft}>Rápido para el inquilino,
                            seguro para el propietario, confiable para la inmobiliaria.</div>
                        <div className={style.subTextRight}>Alquilá con tranquilidad, con Trust Fund estás protegido.</div>
                    </div>
                    <Image className={style.buttonVerMas} src={flechaModalBlue} />
                </div>

                <div className={style.ContainerScrollingText}>
                    <div className={style.preText}>Tu garantía de alquiler</div>
                    <div>
                        {
                            scrollingText?.map((text) => {
                                return (
                                    <div key={text} className={style.ScrollingText}>{text}</div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}