import { useState } from "react";
import styles from "./styles/customAccordion.module.css";
export const CustomAccordion = ({ object, custom }) => {

  const [open, setOpen] = useState(false);
  const [displayRespuesta, setDisplayRespuesta] = useState('');

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

  const handleDisplayRespuesta = (value) => {
    console.log(value)
    if (displayRespuesta !== '') {
      setDisplayRespuesta('');
    } else {
      if (value === 'question01') {
        setDisplayRespuesta('question01');
      }

      if (value === 'question02') {
        setDisplayRespuesta('question02');
      }

      if (value === 'question03') {
        setDisplayRespuesta('question03');
      }
    }
    setOpen(!open);

  };

  return (
    <div className={styles.container} style={customStyle} id={object.id}>
      <div className={styles.FAQ}>
        <div className={styles.Pregunta}>{object.question}</div>
        <div className={styles.VerRespuesta} onClick={() => handleDisplayRespuesta(object.id)}>
          {open ? "-" : "+"}
        </div>
      </div>
      <div
        className={`${displayRespuesta === object.id ? styles.containerAnswerOpen : styles.containerAnswer
          }`}
      >
        <div className={styles.Respuesta}>{displayRespuesta === object.id ? object.answer : null}</div>
      </div>
    </div>
  );
};
