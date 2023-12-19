import Image from "next/image";
import { useEffect, useRef } from "react";
import style from "./ModalCalculador.module.css";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import { useState } from "react";
import {
  star,
  percentage,
  frame,
  flechaModal,
  flechaModalBlue,
  CruzModal,
} from "@/styles";
import "animate.css";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setResultadoCalculador } from "@/redux/Actions/actionCalculadorPrincipal";
import useCloseOnOutsideClickAndEscape from "@/hooks/useCloseOnOutsideClickAndEscape";

export default function ModalCalculador({ setCalculador, calculador }) {
  const modalRef = useRef();

  const [datosCalculador, setDatosCalculador] = useState({
    valorAlquiler: "",
    valorExpensas: "",
    Duracion: "",
    tipoDePropiedad: "",
  });

  // const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState(false);
  const [informacionStep1, setInformacionStep1] = useState();
  const [activeItem, setActiveItem] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [contado, setContado] = useState(null);
  const [anticipo, setAnticipo] = useState(null);
  const [resultado12, setResultado12] = useState(null);
  const [anticipo12, setAnticipo12] = useState(null);
  const [tresCuotas, setTresCuotas] = useState(null);
  const [seisCuotas, setSeisCuotas] = useState(null);
  const [doceCuotas, setDoceCuotas] = useState(null);
  const [imageSrc1, setImageSrc1] = useState(flechaModalBlue);
  const [imageSrc2, setImageSrc2] = useState(flechaModalBlue);
  const [imageSrc3, setImageSrc3] = useState(flechaModalBlue);
  const [imageSrc4, setImageSrc4] = useState(flechaModalBlue);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window?.innerWidth < 1200) {
        console.log(window?.innerWidth);
        setMobile(true);
      }
    }
  }, []);

  const handleMouseOver = (value) => {
    if (value === "Contado") {
      setImageSrc1(flechaModal);
    }
    if (value === "3 Cuotas") {
      setImageSrc2(flechaModal);
    }
    if (value === "6 Cuotas") {
      setImageSrc3(flechaModal);
    }
    if (value === "12 Cuotas") {
      setImageSrc4(flechaModal);
    }
  };

  const handleMouseOut = (value) => {
    if (value === "Contado") {
      setImageSrc1(flechaModalBlue);
    }
    if (value === "3 Cuotas") {
      setImageSrc2(flechaModalBlue);
    }
    if (value === "6 Cuotas") {
      setImageSrc3(flechaModalBlue);
    }
    if (value === "12 Cuotas") {
      setImageSrc4(flechaModalBlue);
    }
  };

  const calcularGarantia = (data) => {
    const { valorAlquiler, valorExpensas, Duracion } = data;
    const alquiler = parseFloat(valorAlquiler.replace(/\./g, "") || 0);
    const expensas = parseFloat(valorExpensas.replace(/\./g, "") || 0);
    const duracion = parseInt(Duracion);
    const resultado = (alquiler + expensas) * duracion * 0.06;
    return resultado;
  };

  const calcularGarantia12 = (data) => {
    const { valorAlquiler, valorExpensas, Duracion } = data;
    const alquiler = parseFloat(valorAlquiler.replace(/\./g, "") || 0);
    const expensas = parseFloat(valorExpensas.replace(/\./g, "") || 0);
    const duracion = parseInt(Duracion);
    const resultado = (alquiler + expensas) * duracion * 0.08;
    return resultado;
  };

  const currencyMask = (e) => {
    let value = e;
    console.log(value);
    value = value.replace(/\D/g, "");
    value = value
      .toString()
      .split("")
      .reverse()
      .join("")
      .replace(/(?=\d*\.?)(\d{3})/g, "$1.");
    value = value.split("").reverse().join("").replace(/^[.]/, "");
    e = value;
    return e;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newValue = currencyMask(value);
    // console.log(name, newValue)
    datosCalculador[name] = newValue;
  };

  function formatNumber(resultado) {
    return new Intl.NumberFormat().format(resultado);
  }

  const onSubmit = (data) => {
    const resultado = Math.floor(calcularGarantia(data));
    setResultado(formatNumber(resultado));
    const anticipo = Math.floor(resultado * 0.15);
    setAnticipo(formatNumber(anticipo));
    const contado = Math.floor(resultado - anticipo);
    setContado(formatNumber(contado));
    const tresCuotas = Math.floor(contado / 2);
    setTresCuotas(formatNumber(tresCuotas));
    const seisCuotas = Math.floor(contado / 5);
    setSeisCuotas(formatNumber(seisCuotas));

    const resultado12 = Math.floor(calcularGarantia12(data));
    setResultado12(formatNumber(resultado12));
    const anticipo12 = Math.floor(resultado12 * 0.15);
    setAnticipo12(formatNumber(anticipo12));
    const contadoDoce = Math.floor(resultado12 - anticipo12);
    const doceCuotas = Math.floor(contadoDoce / 11);
    setDoceCuotas(formatNumber(doceCuotas));

    console.log(
      resultado,
      anticipo,
      contado,
      tresCuotas,
      seisCuotas,
      doceCuotas
    );
    console.log(data);

    setInformacionStep1(data);

    dispatch(setResultadoCalculador(true));
  };

  let dataToSend = {};

  function handleClick() {
    console.log(informacionStep1);

    if (activeItem === "Contado") {
      dataToSend = {
        ...informacionStep1,
        resultado: formatNumber(resultado),
        contado: formatNumber(contado),
        pago: activeItem,
      };
      console.log(dataToSend);
    }

    if (activeItem === "3 Cuotas") {
      dataToSend = {
        ...informacionStep1,
        resultado: formatNumber(resultado),
        anticipo: anticipo,
        cuotas: formatNumber(tresCuotas),
        pago: activeItem,
      };
      console.log(dataToSend);
    }

    if (activeItem === "6 Cuotas") {
      dataToSend = {
        ...informacionStep1,
        resultado: formatNumber(resultado),
        anticipo: anticipo,
        cuotas: formatNumber(seisCuotas),
        pago: activeItem,
      };
      console.log(dataToSend);
    }

    if (activeItem === "12 Cuotas") {
      dataToSend = {
        ...informacionStep1,
        resultado: formatNumber(resultado12),
        anticipo: anticipo12,
        cuotas: formatNumber(doceCuotas),
        pago: activeItem,
      };
      console.log(dataToSend);
    }

    localStorage.setItem("datosLocalStorage", JSON.stringify(dataToSend));
  }

  useCloseOnOutsideClickAndEscape(modalRef, calculador, () => setCalculador(false))

  return (
    <form
      className={
        resultado
          ? `${style.ContainerModalCalculadorResultado}`
          : `${style.ContainerModalCalculador}`
      }
      onSubmit={handleSubmit(onSubmit)}
      ref={modalRef}
    >
      <div className={style.ContainerCruzModal}>
        <Image
          alt="--"
          src={CruzModal}
          onClick={() => setCalculador(false)}
          style={{ cursor: "pointer", scale: "80%" }}
        />
      </div>

      <div className={style.TitleCalculador}>
        <div className={style.Title}>Calculá tu garantía</div>
        <div className={style.subTextCalculador}>
          Calculá al instante tu garantía y conocé las modalidades de pago que
          mejor se adapten a tus necesidades.{" "}
        </div>
      </div>

      <div className={style.ContainerInputs}>
        <div className={style.ContainerValores}>
          <input
            type="text"
            name="valorAlquiler"
            className={style.input1}
            placeholder="Valor de alquiler"
            onInput={(e) => handleInputChange(e)}
            {...register("valorAlquiler", { required: true })}
          />
          <input
            type="text"
            name="valorExpensas"
            className={style.input2}
            placeholder="Valor de expensas"
            onInput={(e) => handleInputChange(e)}
            {...register("valorExpensas", { required: true })}
          />
        </div>
        <div className={style.ContainerValores}>
          <select
            name="tipoDePropiedad"
            id="tipoDePropiedad"
            className={style.input1}
            onInput={(e) => handleInputChange(e)}
            {...register("tipoDePropiedad", { required: true })}
          >
            <option value="">Tipo</option>
            <option value="Vivienda">Vivienda</option>
            <option value="Comercio">Comercio</option>
            <option value="Campo">Campo</option>
          </select>

          <select
            name="Duracion"
            id="Duracion"
            className={style.input2}
            onInput={(e) => handleInputChange(e)}
            {...register("Duracion", { required: true })}
          >
            <option value="">Duración</option>
            <option value="12">12 MESES</option>
            <option value="24">24 MESES</option>
            <option value="36">36 MESES</option>
            <option value="48">48 MESES</option>
            <option value="56">56 MESES</option>
          </select>
        </div>
        <Button type="submit" className={style.flechaCalcula}>
          {mobile ? (
            <div className={style.textoCalculador}>Calcular</div>
          ) : (
            <Image src={flechaModal} alt="flecha" />
          )}
        </Button>
      </div>

      {!mobile ? (
        <div className={style.ContainerPasos}>
          <div className={style.Paso}>
            <Image src={percentage} alt="porcentaje" />
            <div className={style.textPaso}>Cotizá tu garantía</div>
          </div>
          <div className={style.Paso}>
            <Image src={frame} alt="datos" />
            <div className={style.textPaso}>Validá tus datos</div>
          </div>
          <div className={style.Paso}>
            <Image src={star} alt="estrella" />
            <div className={style.textPaso}>¡Listo!</div>
          </div>
        </div>
      ) : null}

      {resultado &&
      anticipo &&
      contado &&
      tresCuotas &&
      seisCuotas &&
      doceCuotas ? (
        <div className={style.ExtraContainerCards}>
          <div className={style.ContainerCards}>
            <div
              className={
                activeItem === "Contado" ? style.activo : style.cardCuota
              }
              onMouseOver={() => handleMouseOver("Contado")}
              onMouseOut={() => handleMouseOut("Contado")}
              onClick={() => setActiveItem("Contado")}
            >
              <div
                className={
                  activeItem === "Contado"
                    ? style.titleCardActiva
                    : style.titleCard
                }
              >
                15% OFF
              </div>
              <div className={style.subtitleCard}>
                <div
                  className={
                    activeItem === "Contado"
                      ? style.anticipoCardActiva
                      : style.anticipoCard
                  }
                >
                  Contado
                </div>
                <div
                  className={
                    activeItem === "Contado"
                      ? style.contadoCardActiva
                      : style.contadoCard
                  }
                >
                  Sin descuento ${resultado}
                </div>
              </div>
              <div className={style.pago}>
                <div
                  className={
                    activeItem === "Contado" ? style.cuotasActiva : style.cuotas
                  }
                >
                  1 Pago de
                </div>
                <div
                  className={
                    activeItem === "Contado"
                      ? style.valorCuotasActiva
                      : style.valorCuotas
                  }
                >
                  ${contado}
                </div>
              </div>
              <div
                className={
                  activeItem === "Contado"
                    ? style.ButtonSeleccionado
                    : style.ButtonSeleccionar
                }
              >
                <div
                  className={
                    activeItem === "Contado"
                      ? style.textSeleccionado
                      : style.textSeleccionar
                  }
                >
                  {activeItem === "Contado" ? "Seleccionado" : "Seleccionar"}
                </div>
                <Image
                  alt="flecha"
                  className={
                    activeItem === "Contado"
                      ? style.flechaCardActiva
                      : style.flechaCard
                  }
                  src={activeItem === "Contado" ? flechaModal : imageSrc1}
                />
              </div>
            </div>

            <div
              className={
                activeItem === "3 Cuotas" ? style.activo : style.cardCuota
              }
              onMouseOver={() => handleMouseOver("3 Cuotas")}
              onMouseOut={() => handleMouseOut("3 Cuotas")}
              onClick={() => setActiveItem("3 Cuotas")}
            >
              <div
                className={
                  activeItem === "3 Cuotas"
                    ? style.titleCardActiva
                    : style.titleCard
                }
              >
                3 cuotas s/ interés
              </div>
              <div className={style.subtitleCard}>
                <div
                  className={
                    activeItem === "3 Cuotas"
                      ? style.anticipoCardActiva
                      : style.anticipoCard
                  }
                >
                  Anticipo del 15%
                </div>
                <div
                  className={
                    activeItem === "3 Cuotas"
                      ? style.descuentoCardActiva
                      : style.descuentoCard
                  }
                >
                  ${anticipo}
                </div>
              </div>
              <div className={style.pago}>
                <div
                  className={
                    activeItem === "3 Cuotas"
                      ? style.cuotasActiva
                      : style.cuotas
                  }
                >
                  2 cuotas de
                </div>
                <div
                  className={
                    activeItem === "3 Cuotas"
                      ? style.valorCuotasActiva
                      : style.valorCuotas
                  }
                >
                  ${tresCuotas}
                </div>
              </div>
              <div
                className={
                  activeItem === "3 Cuotas"
                    ? style.ButtonSeleccionado
                    : style.ButtonSeleccionar
                }
              >
                <div
                  className={
                    activeItem === "3 Cuotas"
                      ? style.textSeleccionado
                      : style.textSeleccionar
                  }
                >
                  {activeItem === "3 Cuotas" ? "Seleccionado" : "Seleccionar"}
                </div>
                <Image
                  alt="flecha"
                  className={
                    activeItem === "3 Cuotas"
                      ? style.flechaCardActiva
                      : style.flechaCard
                  }
                  src={activeItem === "3 Cuotas" ? flechaModal : imageSrc2}
                />
              </div>
            </div>

            <div
              className={
                activeItem === "6 Cuotas" ? style.activo : style.cardCuota
              }
              onMouseOver={() => handleMouseOver("6 Cuotas")}
              onMouseOut={() => handleMouseOut("6 Cuotas")}
              onClick={() => setActiveItem("6 Cuotas")}
            >
              <div
                className={
                  activeItem === "6 Cuotas"
                    ? style.titleCardActiva
                    : style.titleCard
                }
              >
                6 cuotas s/ interés
              </div>
              <div className={style.subtitleCard}>
                <div
                  className={
                    activeItem === "6 Cuotas"
                      ? style.anticipoCardActiva
                      : style.anticipoCard
                  }
                >
                  Anticipo del 15%
                </div>
                <div
                  className={
                    activeItem === "6 Cuotas"
                      ? style.descuentoCardActiva
                      : style.descuentoCard
                  }
                >
                  ${anticipo}
                </div>
              </div>
              <div className={style.pago}>
                <div
                  className={
                    activeItem === "6 Cuotas"
                      ? style.cuotasActiva
                      : style.cuotas
                  }
                >
                  5 cuotas de
                </div>
                <div
                  className={
                    activeItem === "6 Cuotas"
                      ? style.valorCuotasActiva
                      : style.valorCuotas
                  }
                >
                  ${seisCuotas}
                </div>
              </div>
              <div
                className={
                  activeItem === "6 Cuotas"
                    ? style.ButtonSeleccionado
                    : style.ButtonSeleccionar
                }
              >
                <div
                  className={
                    activeItem === "6 Cuotas"
                      ? style.textSeleccionado
                      : style.textSeleccionar
                  }
                >
                  {activeItem === "6 Cuotas" ? "Seleccionado" : "Seleccionar"}
                </div>
                <Image
                  alt="flecha"
                  className={
                    activeItem === "6 Cuotas"
                      ? style.flechaCardActiva
                      : style.flechaCard
                  }
                  src={activeItem === "6 Cuotas" ? flechaModal : imageSrc3}
                />
              </div>
            </div>

            <div
              className={
                activeItem === "12 Cuotas" ? style.activo : style.cardCuota
              }
              onMouseOver={() => handleMouseOver("12 Cuotas")}
              onMouseOut={() => handleMouseOut("12 Cuotas")}
              onClick={() => setActiveItem("12 Cuotas")}
            >
              <div
                className={
                  activeItem === "12 Cuotas"
                    ? style.titleCardActiva
                    : style.titleCard
                }
              >
                12 cuotas
              </div>
              <div className={style.subtitleCard}>
                <div
                  className={
                    activeItem === "12 Cuotas"
                      ? style.anticipoCardActiva
                      : style.anticipoCard
                  }
                >
                  Anticipo del 15%
                </div>
                <div
                  className={
                    activeItem === "12 Cuotas"
                      ? style.descuentoCardActiva
                      : style.descuentoCard
                  }
                >
                  ${anticipo12}
                </div>
              </div>
              <div className={style.pago}>
                <div
                  className={
                    activeItem === "12 Cuotas"
                      ? style.cuotasActiva
                      : style.cuotas
                  }
                >
                  11 cuotas de
                </div>
                <div
                  className={
                    activeItem === "12 Cuotas"
                      ? style.valorCuotasActiva
                      : style.valorCuotas
                  }
                >
                  ${doceCuotas}
                </div>
              </div>
              <div
                className={
                  activeItem === "12 Cuotas"
                    ? style.ButtonSeleccionado
                    : style.ButtonSeleccionar
                }
              >
                <div
                  className={
                    activeItem === "12 Cuotas"
                      ? style.textSeleccionado
                      : style.textSeleccionar
                  }
                >
                  {activeItem === "12 Cuotas" ? "Seleccionado" : "Seleccionar"}
                </div>
                <Image
                  alt="flecha"
                  className={
                    activeItem === "12 Cuotas"
                      ? style.flechaCardActiva
                      : style.flechaCard
                  }
                  src={activeItem === "12 Cuotas" ? flechaModal : imageSrc4}
                />
              </div>
            </div>
          </div>

          <div className={style.containerButtonCard}>
            {activeItem === null ? (
              <div className={style.buttonSolicitarDisabled}>
                Solicitá tu garantía
              </div>
            ) : (
              <Link
                className={style.buttonSolicitar}
                onClick={handleClick}
                href="/ObteneTuGarantia"
              >
                Solicitá tu garantía
              </Link>
            )}
            {!mobile ? (
              <Image
                alt="flecha"
                className={style.flechaSolicitar}
                src={flechaModalBlue}
              />
            ) : null}
          </div>
        </div>
      ) : null}
    </form>
  );
}
