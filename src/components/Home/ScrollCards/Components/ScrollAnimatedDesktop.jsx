import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import style from "../styles/ScrollCards.module.css";
import { useScroll, motion } from "framer-motion";
import { useWindowHeight } from "@react-hook/window-size";
export const ScrollAnimatedDesktop = ({ cards }) => {
  const onlyHeight = useWindowHeight();

  const { scrollYProgress } = useScroll();
  const [card1Ref, card2Ref, card3Ref] = [
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Comprueba si la pantalla es móvil
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 300 && window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Llamada inicial para establecer el estado

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const progress = scrollYProgress.current;
      // console.log(progress, "progress");

      if (card1Ref.current && card2Ref.current && card3Ref.current) {
        const scaleCard1 = Math.max(1 - progress * 0.2, 0.3);

        const translateYCard2Start = isMobile ? 0.15 : onlyHeight < 800 ? 0.15 : 0.21;
        const translateYCard2End = isMobile ? 0.16 : onlyHeight < 800 ? 0.16 : 0.23;
        const translateYCard2Range = translateYCard2End - translateYCard2Start;

        let translateCardDos = isMobile ? -355 : -375;

        const translateYCard2 =
          progress > translateYCard2Start
            ? progress < translateYCard2End
              ? (translateCardDos * (progress - translateYCard2Start)) /
                translateYCard2Range
              : translateCardDos
            : 0;

        // console.log(isMobile, "ismobile");

        const translateYCard3Start = isMobile ? 0.17 : onlyHeight < 800 ? 0.17 : 0.24; // Ajusta según sea necesario
        const translateYCard3End = isMobile ? 0.18 : onlyHeight < 800 ? 0.18 : 0.25; // Ajusta según sea necesario
        const translateYCard3Range = translateYCard3End - translateYCard3Start;

        let transtateCardTres = isMobile ? -675 : -710;

        const translateYCard3 =
          progress > translateYCard3Start
            ? progress < translateYCard3End
              ? (transtateCardTres * (progress - translateYCard3Start)) /
                translateYCard3Range
              : transtateCardTres
            : 0;
            
        // console.log(translateYCard3, "translateYCard3-----")
        card1Ref.current.style.transform = `scale(${scaleCard1})`;
        card2Ref.current.style.transform = `translateY(${translateYCard2}px)`;

        card3Ref.current.style.transform = `scale(1.05) translateY(${translateYCard3}px)`;
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrollYProgress, isMobile]);

  return (
    <>
      {cards?.map((c, index) => {
        let ref;
        let cardStyle = {};

        if (index === 0) ref = card1Ref;
        else if (index === 1) ref = card2Ref;
        else if (index === 2) {
          ref = card3Ref;
        }
        return (
          <motion.div
            id={c.id}
            className={style.Card}
            key={index}
            ref={ref}
            style={cardStyle}
          >
            <div className={style.TextoCard}>
              <div className={style.TitleCard}>{c.title}</div>
              <div className={style.DescripcionCard}>{c.descripcion}</div>
              {/* <Image className={style.ImagenCard} src={flechaModalBlue} /> */}
            </div>
            <Image className={style.cardImage} src={c.image} />
          </motion.div>
        );
      })}
    </>
  );
};
