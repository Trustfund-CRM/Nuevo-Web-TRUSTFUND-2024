import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Mamberto,
  OteroRossi,
  Libera,
  Yacoub,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15,
  a16,
  a17,
  a18,
} from "../../../public/index";
import Image from "next/image.js";
import style from './styles/index.module.css'
export const CarrouselPartners = () => {
  const arrAssets = [
    a14,
    a4,
    a9,
    a11,
    a18,
    a1,
    // ----
    a12,
    a13,
    a15,
    a16,
    a17,
    a2,
    // -----
    a3,
    a5,
    a6,
    a7,
    a8,
    a10,
  ];

  const settings = {
    dots: true, // Puntos de navegación en la parte inferior del carrusel
    infinite: true, // Si hay suficientes elementos, el carrusel puede deslizarse indefinidamente
    speed: 500, // Velocidad de transición entre los slides en milisegundos
    slidesToShow: 6, // Cuántos slides se muestran
    slidesToScroll: 6, // Cuántos slides se desplazan con cada movimiento
    swipeToSlide: true, // Permite deslizar directamente a una diapositiva haciendo scroll
    autoplay: true,
    draggable: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280, // Cuando la pantalla es menor a 1280px
        settings: {
          slidesToShow: 4, // Muestra 4 propiedades
          slidesToScroll: 2, // Desplaza 2 cada vez
        },
      },
      {
        breakpoint: 1024, // Cuando la pantalla es menor a 1024px
        settings: {
          slidesToShow: 3, // Muestra 3 propiedades
          slidesToScroll: 1, // Desplaza 1 cada vez
        },
      },
      {
        breakpoint: 768, // Cuando la pantalla es menor a 768px
        settings: {
          slidesToShow: 2, // Muestra 2 propiedades
          slidesToScroll: 1, // Desplaza 1 cada vez
        },
      },
      {
        breakpoint: 480, // Cuando la pantalla es menor a 480px
        settings: {
          dots: false,
          slidesToShow: 2, // Muestra 1 propiedad
          slidesToScroll: 2, // Desplaza 1 cada vez
        },
      },
    ],
  };

  return (
    <Slider {...settings} style={{ width: "100%", height: "110px" }}>
      {arrAssets.map((asset, index) => (
        <div className={style.contImagePartner} key={index}>
          <Image src={asset} alt="img" className={style.imgPartner} />
        </div>
      ))}
    </Slider>
  );
};
