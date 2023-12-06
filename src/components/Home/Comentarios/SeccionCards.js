import style from './SeccionComentarios.module.css';
import Image from 'next/image';
import { calificacion, calificacionGris, flechaModal } from '@/styles';

export default function SeccionCards() {



    return (
        <div className={style.ContainerComentarios}>
            <div className={style.TitleComentarios}>
                <div style={{ width: '84%', paddingBottom: '50px' }}>
                    <div className={style.Title}>Que dicen nuestros clientes</div>
                </div>
            </div>

            <div className={style.ContainerSlideComentarios}>
                <div className={style.ContainerSubText}>
                    <div className={style.SubTexts}>
                        <div className={style.SubTextLeft}>Descubrí lo que piensan quienes confiaron en Trust Fund.</div>
                        <div className={style.SubTextRight}>Tu experiencia nos importa. Dejanos tu comentario.</div>
                    </div>
                    <Image className={style.flecha} src={flechaModal} />
                </div>

                <div className={style.ContainerSlideCards}>
                    <div className={style.ContainerFlechas}>
                        <Image className={style.FlechaLeft} src={flechaModal} />
                        <Image className={style.FlechaRight} src={flechaModal} />
                    </div>

                    <div className={style.SlideCards}>
                        <div className={style.CardComentario}>
                            <div className={style.TopCard}>
                                <div className={style.Calificaciones}>
                                    <Image src={calificacion} />
                                    <Image src={calificacion} />
                                    <Image src={calificacion} />
                                    <Image src={calificacion} />
                                    <Image src={calificacion} />
                                </div>
                                <div className={style.Puntaje}>4.9</div>
                            </div>
                            <div className={style.Comentario}>
                                Muy buena atención, cordialidad y rapidez
                                en la resolución.<br></br>
                                Lo recomiendo.
                            </div>
                            <div className={style.Autor}>
                                Charly Vilchez
                            </div>
                        </div>

                        <div className={style.CardComentario}>
                            <div className={style.TopCard}>
                                <div className={style.Calificaciones}>
                                    <Image src={calificacion} />
                                    <Image src={calificacion} />
                                    <Image src={calificacion} />
                                    <Image src={calificacion} />
                                    <Image src={calificacionGris} />
                                </div>
                                <div className={style.Puntaje}>4.9</div>
                            </div>
                            <div className={style.Comentario}>
                                Muy buena atención, cordialidad y rapidez
                                en la resolución.
                                Lo recomiendo.
                            </div>
                            <div className={style.Autor}>
                                Charly Vilchez
                            </div>
                        </div>

                        <div className={style.CardComentario}>
                            <div className={style.TopCard}>
                                <div className={style.Calificaciones}>
                                    <Image src={calificacion} />
                                    <Image src={calificacion} />
                                    <Image src={calificacion} />
                                    <Image src={calificacionGris} />
                                    <Image src={calificacionGris} />
                                </div>
                                <div className={style.Puntaje}>4.9</div>
                            </div>
                            <div className={style.Comentario}>
                                Muy buena atención, cordialidad y rapidez
                                en la resolución.
                                Lo recomiendo.
                            </div>
                            <div className={style.Autor}>
                                Charly Vilchez
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}