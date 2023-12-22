import { useEffect } from 'react'
import style from './TextoSlide.module.css'
import { useSelector } from 'react-redux'

export default function TextoSlide() {

    const resultadoCalc = useSelector((state) => state.reducerInfoGarantia.resultado)

    useEffect(() => {
        console.log(resultadoCalc)
    }, [resultadoCalc])

    return (
        <div className={`${resultadoCalc ? style.containerSlideCalculador : style.containerSlide}`}>
            <div className={style.Slide}>
                TRUST FUND GARANTÍAS DE ALQUILER
            </div>
            <div className={style.Slide}>
                TRUST FUND GARANTÍAS DE ALQUILER
            </div>
            <div className={style.Slide}>
                TRUST FUND GARANTÍAS DE ALQUILER
            </div>
        </div>
    )
}