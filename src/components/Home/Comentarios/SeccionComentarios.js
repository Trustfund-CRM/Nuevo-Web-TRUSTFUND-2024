import SeccionCards from "./SeccionCards";
import SeccionPartners from "./SeccionPartners";
import style from './SeccionComentarios.module.css'

export default function SeccionComentarios() {

    return(
        <div className={style.ContainerGeneralSection}>
            <SeccionCards />
            <SeccionPartners />
        </div>
    )
}