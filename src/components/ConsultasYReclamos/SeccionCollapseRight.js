'use client'
import React, { useState } from "react";
import style from "../../components/nuestraGrantia/nuestraGarantia.module.css";
import { Button, Card, Collapse } from "react-bootstrap";
import Image from "next/image";
import { consultaInquilinos, consultaPropietarios, flecha } from "@/styles";
// ---------- LANDING ANTERIOR --------------- //  
export default function SeccionCollapseRight() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const [
    openPreguntasFrecuentesinquilinos,
    setOpenPreguntasFrecuentesinquilinos,
  ] = useState(false);
  const [
    openPreguntasFrecuentesPropiertarios,
    setOpenPreguntasFrecuentesPropiertarios,
  ] = useState(false);

  return (
    <div className={style.containerPrincipalInmoYPropietarios}>
      <div className={style.subContenedorPrincipalConsultas}>
        {openPreguntasFrecuentesPropiertarios === false ? (
          <>
            <div
              className={`${style.ContenedorEfecctCollapseLeft} ${
                openPreguntasFrecuentesinquilinos === true
                  ? style.ContenedorPrincipalCollapseLeft
                  : ""
              }`}
            >
              <div className={style.ContenedorButtonCollapseLeft}>
                <button
                  className={style.ContenedorFotoCollapseLeft}
                  onClick={() => {
                    setOpenPreguntasFrecuentesinquilinos(
                      !openPreguntasFrecuentesinquilinos
                    );
                  }}
                  aria-controls="example-collapse-text"
                  aria-expanded={openPreguntasFrecuentesinquilinos}
                >
                  <Image
                    alt="fotoAnimadaConsultas1"
                    src={consultaInquilinos}
                    className={style.FotoConsultaInqui}
                  />
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <button
              className={style.ButtonCollapsedInqui}
              onClick={() => {
                setOpenPreguntasFrecuentesPropiertarios(
                  !openPreguntasFrecuentesPropiertarios
                );
                setOpenPreguntasFrecuentesinquilinos(
                  !openPreguntasFrecuentesinquilinos
                );
              }}
              aria-controls="example-collapse-text"
              aria-expanded={openPreguntasFrecuentesinquilinos}
            >
              <Image
                alt="fotoAnimadaConsultas1"
                src={consultaInquilinos}
                className={style.FotoCollapseInqui}
              />
              <div className={style.textRowButtonInqui}>
                <Image
                  src={flecha}
                  className={style.fotoFlechaInquilinos}
                  alt="flecha"
                />
                <p className={style.collapsedText}>
                  Preguntas frecuentes de <b>inquilinos</b>
                </p>
              </div>
            </button>
          </>
        )}
        {openPreguntasFrecuentesinquilinos === true ? (
          <>
            <button
              className={style.ButtonCollapsedPropie}
              onClick={() => {
                setOpenPreguntasFrecuentesPropiertarios(
                  !openPreguntasFrecuentesPropiertarios
                );
                setOpenPreguntasFrecuentesinquilinos(
                  !openPreguntasFrecuentesinquilinos
                );
              }}
              aria-controls="example-collapse-text"
              aria-expanded={openPreguntasFrecuentesPropiertarios}
            >
              <div className={style.textRowButtonPropie}>
                <Image
                  src={flecha}
                  className={style.fotoFlechaPropietarios}
                  alt="flecha"
                />
                <p className={style.collapsedText}>
                  Preguntas frecuentes de <b>propietarios</b> y{" "}
                  <b>martilleros</b>
                </p>
              </div>
              <Image
                alt="fotoAnimadaConsultas1"
                src={consultaPropietarios}
                className={style.FotoCollapsePropie}
              />
            </button>
          </>
        ) : (
          <>
            <div
              className={`${style.ContenedorEfecctCollapseRight} ${
                openPreguntasFrecuentesPropiertarios === true
                  ? style.ContenedorPrincipalCollapseRight
                  : ""
              }`}
            >
              <div className={style.ContenedorButtonCollapseRight}>
                <button
                  className={style.ContenedorFotoCollapseRight}
                  onClick={() => {
                    setOpenPreguntasFrecuentesPropiertarios(
                      !openPreguntasFrecuentesPropiertarios
                    );
                  }}
                  aria-controls="example-fade-text"
                  aria-expanded={openPreguntasFrecuentesPropiertarios}
                >
                  <Image
                    className={style.FotoConsultaPropie}
                    alt="fotoAnimadaConsultas1"
                    src={consultaPropietarios}
                  />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      {openPreguntasFrecuentesinquilinos === true ? (
        <>
          <Collapse
            in={openPreguntasFrecuentesinquilinos}
            style={{ border: "0px !important" }}
          >
            <div id="example-collapse-text" className={style.BoxPrincipalCards}>
              <Card body className={style.cardCollapseLeft}>
                <p className={style.tituloCollapseLeft}>
                  ¿Cuáles son los requisitos para solicitar la garantía?
                </p>
                <p className={style.parrafoCollapseLeft}>
                  Para adquirir tu garantía solo necesitas una foto de frente y
                  dorso de tu DNI y completar el formulario online con los datos
                  solicitados.
                </p>
              </Card>
              <Card body className={style.cardCollapseLeft}>
                <p className={style.tituloCollapseLeft}>
                  ¿Pueden no aceptarme la garantía de alquiler?
                </p>
                <p className={style.parrafoCollapseLeft}>
                  No hay razón para que no acepten la garantía de alquiler Trust
                  Fund ya que es válido en toda la Argentina y está contemplado
                  dentro de la ley de alquileres.
                </p>
              </Card>
              <Card body className={style.cardCollapseLeft}>
                <p className={style.tituloCollapseLeft}>
                  ¿Qué es una Garantía Pre-aprobada?
                </p>
                <p className={style.parrafoCollapseLeft}>
                  La garantía pre-aprobada es un documento descargable, el cual
                  podrás presentar en la inmobiliaria o al propietario del
                  inmueble al momento de alquilar como comprobante de que posees
                  una garantía de alquiler en curso. Esto te permitirá agilizar
                  el contrato de locación en el acto.
                </p>
              </Card>
              <Card body className={style.cardCollapseLeft}>
                <p className={style.tituloCollapseLeft}>
                  ¿Qué formas y medios de pago existen?
                </p>
                <p className={style.parrafoCollapseLeft}>
                  Poseemos diversos medios de pago: efectivo, transferencia,
                  tarjeta de débito y de crédito. También podes pagar a través
                  de Rapipago, Pago Fácil y Mercado Pago. El financiamiento de
                  tu garantía es hasta 12 cuotas sin interés.
                </p>
              </Card>
            </div>
          </Collapse>
        </>
      ) : (
        <></>
      )}
      {openPreguntasFrecuentesPropiertarios === true ? (
        <>
          <Collapse in={openPreguntasFrecuentesPropiertarios}>
            <div id="example-collapse-text" className={style.BoxPrincipalCards}>
              <Card body className={style.cardCollapseRight}>
                <p className={style.tituloCollapseRight}>
                  ¿En cuanto tiempo respondemos ante el incumplimiento de pago?
                </p>
                <p className={style.parrafoCollapseRight}>
                  Nuestro tiempo de respuesta comienza a contar a partir de la
                  fecha en la que se notifica el incumplimiento de pago y
                  durante los próximos 10 días hábiles.
                </p>
              </Card>
              <Card body className={style.cardCollapseRight}>
                <p className={style.tituloCollapseRight}>
                  ¿Cómo procedo ante incumplimiento de pago?
                </p>
                <p className={style.parrafoCollapseRight}>
                  Se debe notificar a Trust Fund el incumplimiento dentro de los
                  30 días de haberse conocido el hecho al mail
                  info@trustfund.com.ar con los siguientes datos: nombre y
                  apellido del inquilino, DNI, dirección de vivienda, monto
                  adeudado y una foto de la intimación al inquilino (CD).
                </p>
              </Card>
              <Card body className={style.cardCollapseRight}>
                <p className={style.tituloCollapseRight}>
                  ¿Quién firma el contrato de garantía?
                </p>
                <p className={style.parrafoCollapseRight}>
                  La firma estará a cargo del solicitante y co-solicitante si lo
                  hubiera y el gerente general.
                </p>
              </Card>
              <Card body className={style.cardCollapseRight}>
                <p className={style.tituloCollapseRight}>
                  ¿Cuál es el límite de cobertura de daños?
                </p>
                <p className={style.parrafoCollapseRight}>
                  Cubrimos el 100% de lo explicitado en el contrato de locación:
                  daños y roturas en el inmueble generados durante la vigencia
                  del contrato.
                </p>
              </Card>
            </div>
          </Collapse>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
