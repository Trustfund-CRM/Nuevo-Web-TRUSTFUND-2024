import style from "./styles/buttonSlider.module.css";
import arrowImg from "../../../public/arrow.svg";
import arrowBlue from "../../../public/arrowBlue.svg";

import Image from "next/image";
export const ButtonSlider = ({ text, customBackground }) => {
  return (
    <button className={style.buttonSlider} style={customBackground}>
      <div className={style.buttonTxt}>{text}</div>
      {customBackground?.background !== "#E6EAEE" ? (
        <Image src={arrowImg} alt="img" className={style.arrow} />
      ) : (
        <Image src={arrowBlue} alt="img" className={style.arrow} />
      )}
    </button>
  );
};
