import style from "./styles/buttonSlider.module.css";
import arrowImg from "../../../public/arrow.svg";
import arrowBlue from "../../../public/arrowBlue.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setModalSuscribe } from "@/redux/Actions/actionCalculadorPrincipal";

export const ButtonSlider = ({ text, customBackground, route, suscribe }) => {

  // const [modalShow, setModalShow] = useState(false);

  const dispatch = useDispatch();

  const handleModalSuscribe = () => {
    // setModalShow(true);
    dispatch(setModalSuscribe());
  }


  if (suscribe) {
    return (
      <Button onClick={() => handleModalSuscribe()} className={style.buttonSlider} style={customBackground}>
        <div className={style.buttonTxt}>{text}</div>
        {customBackground?.background !== "#E6EAEE" ? (
          <Image src={arrowImg} alt="img" className={style.arrow} />
        ) : (
          <Image src={arrowBlue} alt="img" className={style.arrow} />
        )}
      </Button>
    )
  }
  else {
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
  }
};
