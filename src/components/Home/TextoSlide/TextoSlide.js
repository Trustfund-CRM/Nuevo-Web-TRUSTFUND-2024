import style from './TextoSlide.module.css'


export default function TextoSlide() {

    var datosCalculador = {};

    if (typeof window !== 'undefined') {
        datosCalculador = JSON.parse(localStorage.getItem('datosCalculador'));
    }

    return (
        <div className={`${datosCalculador?.resultado ? style.containerSlideCalculador : style.containerSlide}`}>
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