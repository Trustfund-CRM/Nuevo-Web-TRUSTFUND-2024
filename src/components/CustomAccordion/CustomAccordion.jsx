import { useState } from "react";
import styles from "./styles/customAccordion.module.css";
export const CustomAccordion = ({ object, custom }) => {
  const [open, setOpen] = useState(false);

  const handleSetOpen = () => {
    setOpen(!open);
  };

  const customStyle = {
    ...custom,
    // gap: open ? "32px" : "0px",
    // height: object.height,
  };

  const customHeight = {
    height: object.height,
  };

  return (
    <div className={styles.container} style={customStyle} id={object.id}>
      <div className={styles.FAQ}>
        <div className={styles.Pregunta}>{object.question}</div>
        <div className={styles.VerRespuesta} onClick={() => handleSetOpen()}>
          {open ? "-" : "+"}
        </div>
      </div>
      <div
        className={`${
          open ? styles.containerAnswerOpen : styles.containerAnswer
        }`}
      >
        <div className={styles.Respuesta}>{object.answer}</div>
      </div>
    </div>
  );
};
