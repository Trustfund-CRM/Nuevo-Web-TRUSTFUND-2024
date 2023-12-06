// import { Image } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import style from './ScrollCards.module.css';
import { inquilinos, propietarios, inmobiliarias, flechaModalBlue } from '@/styles';
import { useSelector } from 'react-redux';

export default function ScrollCards() {

    const cards = [
        {
            title: 'Inquilinos',
            descripcion: 'Somos tu mejor opción. Nuestra garantía de alquiler es rápida, accesible, segura y sin trámites engorrosos. Obtenela 100% online y en menos de 24hs.',
            image: inquilinos,
            id: 'card1'
        },
        {
            title: 'Propietarios',
            descripcion: 'Te aseguramos el pago mensual del alquiler, expensas, servicios y el cuidado de tu propiedad. Cubrimos gastos legales de un posible desalojo del inquilino.',
            image: propietarios,
            id: 'card2'
        },
        {
            title: 'Inmobiliarias',
            descripcion: 'Contamos con un protocolo de alto nivel, preparado para responder ágilmente ante posibles incumplimientos del inquilino en el contrato de alquiler.',
            image: inmobiliarias,
            id: 'card3'
        }
    ]

    const [translateValue, setTranslateValue] = useState(200);
    const maxVerticalCoordinate = 1500;

    const resultadoCalc = useSelector((state) => state.reducerInfoGarantia.calculador);

    useEffect(() => {
        console.log(resultadoCalc)
    }, [resultadoCalc])

    useEffect(() => {
        const handleScroll = () => {
            // Update translate value based on scroll position or any other logic
            if (window.scrollY > 1080 && window.scrollY < maxVerticalCoordinate) {

                window.addEventListener('scroll', function (e) {
                    console.log('entra preventDefault');
                    e.preventDefault();
                }, false)

                const newTranslateValue = translateValue - (window.scrollY * 0.5); // Adjust the multiplier as needed
                setTranslateValue(newTranslateValue);
                console.log(newTranslateValue)

                const scrollY = window.scrollY || window.pageYOffset;
                console.log(scrollY)
            }

            // Si las coordenadas del scroll exceden el límite, ajusta la posición

            if (scrollY > maxVerticalCoordinate) {
                window.removeEventListener('scroll', handleScroll);
                window.removeEventListener('scroll', function (e) {
                    console.log('sale preventDefault');
                    e.preventDefault();
                }, false)
            }
        };

        const isClient = typeof window !== 'undefined';

        if (isClient) {
            // Add the scroll event listener if running on the client side
            window.addEventListener('scroll', handleScroll);

            // Clean up the event listener on component unmount
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    // const isClient = typeof window !== 'undefined';

    // if (isClient) {
    //     const carousel = window.getElementById('carousel');
    //     const container = window.getElementById('carousel-container');

    //     // Clone the first and last cards for seamless scrolling
    //     carousel.appendChild(carousel.children[0].cloneNode(true));
    //     carousel.insertBefore(carousel.children[carousel.children.length - 2].cloneNode(true), carousel.children[0]);

    //     let currentIndex = 1;
    //     let translateValue = -110; // Adjust the initial value based on card height and margin

    //     function updateCarousel() {
    //         carousel.style.transform = `translateY(${translateValue}px)`;
    //     }

    //     function scrollUp() {
    //         currentIndex--;
    //         translateValue += 110; // Adjust the value based on card height and margin
    //         updateCarousel();
    //     }

    //     function scrollDown() {
    //         currentIndex++;
    //         translateValue -= 110; // Adjust the value based on card height and margin
    //         updateCarousel();
    //     }

    //     // Event listener for mouse wheel
    //     container.addEventListener('wheel', function (event) {
    //         event.preventDefault();
    //         if (event.deltaY < 0) {
    //             scrollUp();
    //         } else {
    //             scrollDown();
    //         }
    //     });

    //     // Initial position
    //     updateCarousel();
    // }


    return (
        <div className={`${resultadoCalc ? style.ContainerGeneralResultados : style.ContainerGeneral}`}>
            <div style={{ width: '100%', borderBottom: '1px solid #4D4D4D', height: '40%', display: 'flex' }}>
                <div className={style.ContainerHeader}>
                    <div className={style.TextHeader}>Protegemos todas las necesidades
                        en el proceso de alquiler. </div>
                </div>
            </div>

            <div id='carousel-container' className={style.ScrollCards}>
                <div id='carousel' className={style.Carrousel}>
                    {cards?.map((c) => {
                        return (
                            <div id={c.id} className={style.Card} style={{ transform: `translateY(${translateValue}px)` }}>
                                <div className={style.TextoCard}>
                                    <div className={style.TitleCard}>{c.title}</div>
                                    <div className={style.DescripcionCard}>{c.descripcion}</div>
                                    <Image className={style.ImagenCard} src={flechaModalBlue} />
                                </div>
                                <Image className={style.flechaFooterCard} src={c.image} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}