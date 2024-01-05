import React from 'react';
import style from './styles/NonScrollingCard.module.css';
import Image from 'next/image';
import { flechaModalBlue } from '@/styles';

export default function NonScrollingCard({ card }) {

    return (
        <div id={card.id} className={style.Card}>
            <div className={style.TextoCard}>
                <div className={style.TitleCard}>{card.title}</div>
                <div className={style.DescripcionCard}>
                    {card.descripcion}
                </div>
                {/* <Image className={style.ImagenCard} src={flechaModalBlue} /> */}
            </div>
            <Image className={style.cardImage} src={card.image} />
        </div>
    )

} 