import { inmo1, inmo2 } from '@/styles';
import Image from 'next/image';
import style from "../nuestraGarantia.module.css";
import '../stylesInputs.css'

const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

export const inmoAdherida1 =
    <div className={style.Card}>
        <Image
            width={100}
            height={100}
            src={inmo1}
            alt="Inmo"
            className={style.ImagenInmobiliarias}
            loader={imageLoader}
        />
    </div>

export const inmoAdherida2 =
    <div className={style.Card}>
        <Image
            width={100}
            height={100}
            src={inmo2}
            alt="Inmo"
            className={style.ImagenInmobiliarias}
            loader={imageLoader}
        />
    </div>