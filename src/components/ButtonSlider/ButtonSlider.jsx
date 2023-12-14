import style from "./styles/buttonSlider.module.css";
import arrowImg from "../../../public/arrow.svg";
import arrowBlue from "../../../public/arrowBlue.svg";

import Image from "next/image";
export const ButtonSlider = ({ text, customBackground, isPrimary = true }) => {
  return (
    <button className={style.buttonSlider} style={customBackground}>
      <div className={style.buttonTxt}>{text}</div>
      {isPrimary ? (
        <Image src={arrowImg} alt="img" className={style.arrow} />
      ) : (
        <Image src={arrowBlue} alt="img" className={style.arrow} />
      )}
    </button>
  );
};
