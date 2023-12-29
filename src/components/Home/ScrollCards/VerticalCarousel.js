// VerticalCarousel.jsx

import React, { useState, useEffect, useRef } from 'react';
import styles from './VerticalCarousel.module.css';
import style from './ScrollCards.module.css';
import Image from 'next/image';
import BotonCard from './BotonCard';

import {
  inquilinos,
  propietarios,
  inmobiliarias,
  flechaModalBlue,
} from '@/styles';

const VerticalCarousel = () => {
  const [mobile, setMobile] = useState(false);
  const cards = [
    {
      title: 'Inquilinos',
      descripcion:
        'Somos tu mejor opción. Nuestra garantía de alquiler es rápida, accesible, segura y sin trámites engorrosos. Obtenela 100% online y en menos de 24hs.',
      image: inquilinos,
      id: 'card1',
    },
    {
      title: 'Propietarios',
      descripcion:
        'Te aseguramos el pago mensual del alquiler, expensas, servicios y el cuidado de tu propiedad. Cubrimos gastos legales de un posible desalojo del inquilino.',
      image: propietarios,
      id: 'card2',
    },
    {
      title: 'Inmobiliarias',
      descripcion:
        'Contamos con un protocolo de alto nivel, preparado para responder ágilmente ante posibles incumplimientos del inquilino en el contrato de alquiler.',
      image: inmobiliarias,
      id: 'card3',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const carouselContainerRef = useRef(null);

  const handleMouseEnter = () => {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '22px'; // Ajusta el espacio del scroll
  };

  const handleMouseLeave = () => {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '0';
  };

  const handleWheel = (event) => {
    const direction = event.deltaY > 0 ? 'down' : 'up';

    if (direction === 'down' && activeIndex < cards.length - 1) {
      // Scrolling down
      setActiveIndex((prevIndex) => prevIndex + 1);
    } else if (direction === 'up' && activeIndex > 0) {
      // Scrolling up
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    const container = carouselContainerRef.current;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const cardHeight = container.clientHeight;

      const newIndex = Math.round(scrollPosition / cardHeight);

      setActiveIndex(newIndex);
    };

    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [carouselContainerRef]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window?.innerWidth < 1017) {
        setMobile(true);
        // setCalculador(true)
      }
    }
  }, []);
  return (
    <div>
      {mobile ?
             <div
            //  ref={carouselContainerRef}
            //  id="carousel-container"
             className={styles.carouselContainer}
             style={{
              height: 'auto',
              gap: '16px',
              position: 'initial'
             }}
            //  onMouseEnter={handleMouseEnter}
            //  onMouseLeave={handleMouseLeave}
            //  onWheel={handleWheel}
           >

             {cards.map((card, index) => (
               <div
                 key={card.id}
                 className={styles.card}
             
               >
                 <div className={style.TextoCard}>
                   <div className={style.TitleCard}>{card.title}</div>
                   <div className={style.DescripcionCard}>{card.descripcion}</div>
                   {/* <BotonCard /> */}
                 </div>
                 <Image
                   className={style.flechaFooterCard}
                   src={card.image}
                   alt="image"
                 />
               </div>
             ))}
           </div> :
        <div
          ref={carouselContainerRef}
          id="carousel-container"
          className={styles.carouselContainer}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onWheel={handleWheel}
        >
          {/* <div>{activeIndex}</div> */}
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`${styles.card} ${index === activeIndex && styles.active
                }`}
              style={{
                zIndex: index === activeIndex ? 1 : 0,
                position: 'absolute',
                top: `${index === activeIndex ? 0 : 150}px`, // Ajusta el valor según sea necesario
                transition: 'transform 0.3s ease-in-out, zIndex 1s ease-in-out, top 1s ease-in-out',
                transform: `scale(${index === activeIndex ? 1.05 : 1})`,
              }}
            >
              <div className={style.TextoCard}>
                <div className={style.TitleCard}>{card.title}</div>
                <div className={style.DescripcionCard}>{card.descripcion}</div>
                {/* <BotonCard /> */}
              </div>
              <Image
                className={style.flechaFooterCard}
                src={card.image}
                alt="image"
              />
            </div>
          ))}
        </div>
      }
    </div>

  );
};

export default VerticalCarousel;
