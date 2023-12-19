import Image from "next/image";
import React from "react";
import style from "./styles/buttonWsp.module.css";
export default function ButtonWsp() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=542213619465&text=¡Hola!%20Quiero%20más%20información%20sobre%20las%20garantías%20de%20alquiler%20🙌🏼&app_absent=0"
      target="_blank"
      className={style.containerButton}
    >
        <Image
          alt=""
          width={54}
          height={54}
          src="https://res.cloudinary.com/dqllk3gmq/image/upload/v1692114048/TrustFund/kpoeqfim3caxvp62tmd2.svg"
          className={style.contImage}
        />
    </a>
  );
}
