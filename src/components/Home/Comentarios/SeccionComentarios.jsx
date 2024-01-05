import SeccionCards from "./SeccionCards";
import SeccionPartners from "./SeccionPartners";
import style from "./styles/SeccionComentarios.module.css";
import { useSelector } from "react-redux";
import { CustomContainerMaxWidth } from "@/components/CustomConteinerMaxWidth/CustomContainerMaxWidth";

export default function SeccionComentarios() {
  const resultadoCalc = useSelector(
    (state) => state.reducerInfoGarantia.resultado
  );

  return (
    <div className={`${style.ContainerGeneralSection}`}>
      <SeccionCards />
      <SeccionPartners />
    </div>
  );
}
