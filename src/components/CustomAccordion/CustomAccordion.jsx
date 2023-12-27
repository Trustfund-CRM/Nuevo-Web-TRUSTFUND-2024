import { useState } from "react";
import styles from "./styles/customAccordion.module.css";
export const CustomAccordion = ({ object, custom, route }) => {
  const [open, setOpen] = useState(null);

  const handleSetOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.container} id={object.id}>
      <div className={`${route === 'QuienesSomos' ? styles.FAQQuieneSomos : styles.FAQ}`}>
        <div className={`${route === 'QuienesSomos' ? styles.PreguntaQuienesSomos : styles.Pregunta}`}>{object.question}</div>
        <div className={`${route === 'QuienesSomos' ? styles.VerRespuestaQuienesSomos : styles.VerRespuesta}`} onClick={() => handleSetOpen()}>
          {open ? "-" : "+"}
        </div>
      </div>
      {open !== null && (
        <div
          className={`${
            open ? styles.containerAnswerOpen : styles.containerAnswer
          }`}
          style={{ "--additional-height": object.styleCustom }}
        >
          <div className={styles.Respuesta}>{object.answer}</div>
        </div>
      )}
    </div>
  );
};
