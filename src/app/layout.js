"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import { Footer, NavbarPrincipal } from '@/components';
import { useRef, useState, useEffect } from "react";
import rootReducer from '../redux/reducer';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from '../redux/sagas';

import 'swiper/css';
import Script from 'next/script';

export default function RootLayout({ children }) {

  const containerRef = useRef(null);
  const sagasMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, applyMiddleware(sagasMiddleware))
  sagasMiddleware.run(rootSaga)

  return (
    <Provider store={store}>
      <html lang="en">
        {
          children.props.childProp.segment === '__PAGE__' ?
            <head>
              <meta name="robots" content="all" />
              <link rel="icon" href="https://res.cloudinary.com/trustfund2022/image/upload/v1659102256/TRUST%20FUND/Home/icon-trustfund_arzsal.png" />
              <title>Trust Fund - Garantías de Alquiler</title>
              <link
                rel="apple-touch-icon"
                href="https://res.cloudinary.com/trustfund2022/image/upload/v1659102256/TRUST%20FUND/Home/icon-trustfund_arzsal.png"
              />
              <meta
                name="description"
                content="Simulá tu garantía. Utilizá nuestro calculador para conocer el costo de tu garantía y las facilidades de pago. Es simple y rápido."
              />
              <meta
                name="keywords"
                content="Simulá tu garantía. Utilizá nuestro calculador para conocer el costo de tu garantía y las facilidades de pago. Es simple y rápido."
              />
            </head>
            :
            null
        }
        {
          children.props.childProp.segment === 'nuestra-garantia' ?
            <head>
              <meta name="robots" content="all" />
              <link rel="icon" href="https://res.cloudinary.com/trustfund2022/image/upload/v1659102256/TRUST%20FUND/Home/icon-trustfund_arzsal.png" />
              <title>Trust Fund - Nuestra Garantía</title>
              <link
                rel="apple-touch-icon"
                href="https://res.cloudinary.com/trustfund2022/image/upload/v1659102256/TRUST%20FUND/Home/icon-trustfund_arzsal.png"
              />
              <meta
                name="description"
                content="Financiamos tu garantía y los gastos de ingreso de forma rápida y sencilla. Obtené tu garantía de alquiler en 24hs y desde cualquier parte del país con firma electrónica."
              />
              <meta
                name="keywords"
                content="Financiamos tu garantía y los gastos de ingreso de forma rápida y sencilla. Obtené tu garantía de alquiler en 24hs y desde cualquier parte del país con firma electrónica."
              />
            </head>
            :
            null
        }
        {
          children.props.childProp.segment === 'InmobiliariasYPropietarios' ?
            <head>
              <meta name="robots" content="all" />
              <link rel="icon" href="https://res.cloudinary.com/trustfund2022/image/upload/v1659102256/TRUST%20FUND/Home/icon-trustfund_arzsal.png" />
              <title>Trust Fund - Inmobiliarias y Propietarios</title>
              <link
                rel="apple-touch-icon"
                href="https://res.cloudinary.com/trustfund2022/image/upload/v1659102256/TRUST%20FUND/Home/icon-trustfund_arzsal.png"
              />
              <meta
                name="description"
                content="Garantizamos condiciones seguras en cada contrato de locación, mitigando riesgos y problemáticas para todas las partes involucradas."
              />
              <meta
                name="keywords"
                content="Garantizamos condiciones seguras en cada contrato de locación, mitigando riesgos y problemáticas para todas las partes involucradas."
              />
            </head>
            :
            null
        }
        {
          children.props.childProp.segment === 'ConsultasYReclamos' ?
            <head>
              <meta name="robots" content="all" />
              <link rel="icon" href="https://res.cloudinary.com/trustfund2022/image/upload/v1659102256/TRUST%20FUND/Home/icon-trustfund_arzsal.png" />
              <title>Trust Fund - Consultas y Reclamos</title>
              <link
                rel="apple-touch-icon"
                href="https://res.cloudinary.com/trustfund2022/image/upload/v1659102256/TRUST%20FUND/Home/icon-trustfund_arzsal.png"
              />
              <meta
                name="description"
                content="¿No encontraste la respuesta a tu pregunta? Te ayudamos a resolver tus inquietudes de manera rápida y eficaz con asesoramiento personalizado."
              />
              <meta
                name="keywords"
                content="¿No encontraste la respuesta a tu pregunta? Te ayudamos a resolver tus inquietudes de manera rápida y eficaz con asesoramiento personalizado."
              />
            </head>
            :
            null
        }
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer', 'GTM-KC5WLW4');
        `}
        </Script>
        <body>

          <nav>
            <NavbarPrincipal />
          </nav>
          {children}
          <footer>
            <Footer />
          </footer>

        </body>
      </html>
    </Provider>
  )
}
