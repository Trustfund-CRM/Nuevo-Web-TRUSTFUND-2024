


import Image from 'next/image';
import style from './Cononcenos.module.css';
import { FachadaGrupo } from '@/styles';
export default function Conocenos() {
    return (
        <div className={style.boxPrincipalConocenos}>
            <div className={style.subBoxConocenos}>
                <div className={style.boxFotoConocenos}>
                    <Image alt='fotoGrupoDelsud' src={FachadaGrupo} className={style.fotoFachadaGrupo} />
                </div>
                <div className={style.boxParrafoConocenos}>
                    <h2 className={style.tituloConocenos}>Conocé <b>Trust Fund</b></h2>
                    <div className={style.parrafoConocenos}>
                        Somos una empresa que otorga garantías de alquiler en todo el territorio nacional con el aval de <b style={{ color: '#004994' }}>Delsud</b>,
                        lo que nos permite contar con un respaldo económico amplio ya que poseemos los fondos necesarios para
                        financiar garantías de manera segura y flexible.
                    </div>
                    <div className={style.parrafoConocenos}>
                        Nuestro objetivo es simplificar el proceso de adquisición de garantías y brindarle la posibilidad a 
                        cualquier persona de acceder en <b>menos de 24hs</b> a una vivienda, únicamente con la presentación de su DNI. 
                        Donde existe una dificultad, <b>Trust Fund</b> es la solución.
                    </div>
                </div>
            </div>
        </div>
    )
}