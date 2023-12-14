import SeccionCards from "./SeccionCards";
import SeccionPartners from "./SeccionPartners";
import style from './SeccionComentarios.module.css';
import { useSelector } from "react-redux";

export default function SeccionComentarios() {

    const resultadoCalc = useSelector((state) => state.reducerInfoGarantia.calculador);

    return(
        <div className={`${resultadoCalc ? style.ContainerGeneralSectionResultados : style.ContainerGeneralSection}`}>
            <SeccionCards />
            {/* <SeccionPartners /> */}
        </div>
    )
}