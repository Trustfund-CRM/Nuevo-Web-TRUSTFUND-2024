import style from "./styles/buttonSlider.module.css";
import arrowImg from "../../../public/arrow.svg";
import arrowBlue from "../../../public/arrowBlue.svg";
import Image from "next/image";
import Link from "next/link";

export const ButtonSlider = ({ text, customBackground, route }) => {
  console.log(route)
  return (
    <Link href={`${route}`} className={style.buttonSlider} style={customBackground}>
      <div className={style.buttonTxt}>{text}</div>
      {customBackground?.background !== "#E6EAEE" ? (
        <Image src={arrowImg} alt="img" className={style.arrow} />
      ) : (
        <Image src={arrowBlue} alt="img" className={style.arrow} />
      )}
    </Link>
  );
};
