import React, { useEffect, useState } from 'react'
import style from "../nuestraGarantia.module.css";
import { Button, Modal } from 'react-bootstrap';
import '../stylesInputs.css'
//import getGoogleMyBusinessReviews from '../../../pages/api/mi-endpoint';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";


const swiperData = [
  {
    name: "Pablo Ruiz",
    review:
      "Muy buena atención. Cordialidad y agilidad para resolver el trámite... lo recomiendo... me resolvió el problema de no poseer una garantía en la plata para alquilar dpto. Gracias",
  },
  {
    name: "Agustina Imarisio",
    review:
      "Excelente servicio, en pocos días tuve la garantía y pude alquilar sin problemas. Los chicos muy amables, resolvieron todas mis dudas!",
  },
  {
    name: "Wendy Nataly Soria",
    review:
      "La mejor opción para poder acceder a un alquiler, me encanta porque ellos mismos te ayudan a encontrar un alquiler que se ajuste a tus necesidades y a tu presupuesto. En mi caso, tuve el mejor asesor Juan Rodríguez que siempre estuvo al pendiente y gracias a su garantía pude alquilar y estar en un lugar confortable. Gracias 😊",
  },
  {
    name: "Gabriela Antoniazzi",
    review:
      "Muy conforme con la atención desde el primer momento muy amable el asesor... Muy recomendable ya que es muy accesible en cuanto al servicio de seguro para alquilar.... Desde ya muchas gracias!!!",
  },
];



export default function SectionTop() {

  // const [reviews, setReviews] = useState([]);
  // useEffect(() => {
  //   async function fetchReviews() {
  //     const fetchedReviews = await getGoogleMyBusinessReviews();
  //     setReviews(fetchedReviews);
  //   }
  //   fetchReviews();
  // }, []);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const swiperSlides = swiperData.map((data, index) => (
    <SwiperSlide key={index} className={style.SwiperSlide}>
      <a
        href="https://g.page/r/CYNtiA9X6s0CEB0/review"
        target="_blank"
        rel="noreferrer"
        className="task"
        draggable="true"
      >
        <div className="tags">
          <span className="tag">{data.name}</span>
          <button className="options"></button>
        </div>
        <p>{data.review}</p>
        <div className="stats">
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="viewer">
            <span>+20</span>
          </div>
        </div>
      </a>
    </SwiperSlide>
  ));

  const handleDownloadPDF = () => {

    const pdfURL = '/TRUST FUND  cuotas vivienda - sin co - solicitante.docx.pdf';

    const link = document.createElement('a');
    link.href = pdfURL;

    link.download = 'TRUST FUND  cuotas vivienda - sin co - solicitante.docx.pdf';

    link.dispatchEvent(new MouseEvent('click'));
  };



  return (
    <div className={style.containerPrincipalGarantia}>
      <div className={style.subContenedorPrincipalGarantia}>
        <div className={style.BoxComentsGoogle}>
          <div className={style.Box1}>
            <p className={style.ParrafoGarantia}>
              Trust Fund <b>financia tu garantía</b> y los <b>gastos de ingreso</b> de manera rápida y sencilla,
              con el objetivo de agilizar el proceso que conlleva alquilar una propiedad.
              Los inquilinos que la soliciten, no tienen la necesidad de contar con una
              garantía propietaria tradicional.
            </p>
            <div className={style.BoxButtons}>
              <div>
                <Button href='/' className={style.ButtonAzul} >OBTENÉ TU GARANTÍA </Button>
              </div>
              <div>
                <Button className={style.ButtonBorder} variant="outline-primary" onClick={handleDownloadPDF} >VER MODELO DE CONTRATO</Button>
              </div>
            </div>
          </div>
          <div className={style.Box2}>
            <div className={style.Box2Titulo}>
              <p className={style.TituloComents}>Conocé la opinión de nuestros clientes</p>
            </div>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination,]}
              className={style.Swiper}
            >
              {swiperSlides}
            </Swiper>

          </div>
        </div>
      </div>
    </div>
    //   <div>
    //   {reviews.map((review) => (
    //     <div key={review.reviewId}>
    //       <h4>{review.reviewer.displayName}</h4>
    //       <p>Rating: {review.starRating}</p>
    //       <p>{review.comment}</p>
    //     </div>
    //   ))}
    // </div>
  )
}
