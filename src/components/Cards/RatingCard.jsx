import Image from "next/image";
import style from './styles/ratingCard.module.css'
import { calificacion } from "@/styles";

export const RatingCard = ({card}) => {
  return (
    <div className={style.CardComentario} id={card.id}>
            <div className={style.TopCard}>
                <div className={style.Calificaciones}>
                <Image src={calificacion} alt='img' />
                <Image src={calificacion} alt='img'/>
                <Image src={calificacion} alt='img'/>
                <Image src={calificacion} alt='img'/>
                <Image src={calificacion} alt='img'/>
                </div>
                <div className={style.Puntaje}>{card.valoration}</div>
            </div>
            <div className={style.Comentario}>
                {card.data}
            </div>
            <div className={style.Autor}>{card.username}</div>
        <div className={style.content}>
        </div>
    </div>
  );
};
