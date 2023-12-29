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
  flexhaBlanca,
  flechaModalBlue,
  CruzModal,
} from "@/styles";
import "animate.css";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { sendContactForm } from '../../../lib/api';
import { setResultadoCalculador } from "@/redux/Actions/actionCalculadorPrincipal";
import useCloseOnOutsideClickAndEscape from "@/hooks/useCloseOnOutsideClickAndEscape";
import FormModal from "./FormModal";
import styled from 'styled-components';
import Dropdown from './Dropdown'; // Ajusta la ruta según sea necesario
import Swal from "sweetalert2";
export default function ModalCalculador({
  setCalculador,
  calculador,
  miIdRef,
  ref,
  id,
}) {
  const modalRef = useRef();

  const [renderForm, setRenderForm] = useState(false);

  const options = ['', '12 MESES', '24 MESES', '36 MESES', '48 MESES', '60 MESES'];
  const optionsTypeInmueble = ['Vivienda', 'Comercio', 'Campo'];


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
  const [colorValorAlquiler, setColorValorAlquiler] = useState("none");
  const [colorValorExpensas, setColorValorExpensas] = useState("none");
  const [colorTipoDePropiedad, setColorTipoDePropiedad] = useState("none");
  const [colorDuracion, setColorDuracion] = useState("none");
  const [valido, setValido] = useState(false);

  const [form, setForm] = useState({
    valorAlquiler: "",
    valorExpensas: "",
    tipoDePropiedad: "",
    duracion: "",
  })


  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window?.innerWidth < 1200) {
        console.log(window?.innerWidth);
        setMobile(true);
      }
    }
  }, []);
console.log("GOLAA")
  const handleMouseOver = (value) => {
    if (value === "Contado") {
      setImageSrc1(flexhaBlanca);
    }
    if (value === "3 Cuotas") {
      setImageSrc2(flexhaBlanca);
    }
    if (value === "6 Cuotas") {
      setImageSrc3(flexhaBlanca);
    }
    if (value === "12 Cuotas") {
      setImageSrc4(flexhaBlanca);
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
    console.log(data)
    const { valorAlquiler, valorExpensas, duracion } = data;
    const alquiler = parseFloat(valorAlquiler.replace(/\./g, "") || 0);
    const expensas = parseFloat(valorExpensas.replace(/\./g, "") || 0);
    const duracionaux = parseInt(duracion);
    const resultado = (alquiler + expensas) * duracionaux * 0.06;
    return resultado;
  };

  const calcularGarantia12 = (data) => {

    const { valorAlquiler, valorExpensas, duracion } = data;
    const alquiler = parseFloat(valorAlquiler.replace(/\./g, "") || 0);
    const expensas = parseFloat(valorExpensas.replace(/\./g, "") || 0);
    const duracionaux = parseInt(duracion);
    const resultado = (alquiler + expensas) * duracionaux * 0.08;
    return resultado;
  };
  const handleFormat = (e) => {
    var num = e.replace(/\.|[A-Za-z]/g, "");
    if (!isNaN(num)) {
      num = num
        .toString()
        .split("")
        .reverse()
        .join("")
        .replace(/(?=\d*\.?)(\d{3})/g, "$1.");
      num = num.split("").reverse().join("").replace(/^[\.]/, "");
      e = num;
      return e;
    } else {
      e = e.replace(/[^\d\.]*/g, "");
      return e;
    }
  };
  const currencyMask = (e) => {
    let value = e;
    value = value.replace(/\D/g, "");
    value = value
      .toString()
      .split("")
      .reverse()
      .join("")
      .replace(/(?=\d*\.?)(\d{3})/g, "$1.");
    value = value.split("").reverse().join("").replace(/^[.]/, "");
    e = value;
    e = handleFormat(e)

    return e;
  };


  function formatNumber(resultado) {
    return new Intl.NumberFormat('es-ES', { useGrouping: false }).format(resultado);
  }
  const customStyle = {
    confirmButtonColor: '#004993',
    fontFamily: 'Poppins, sans-serif',

};
const verificarCampos = async () => {
  setColorValorAlquiler(form.valorAlquiler.trim() !== "" ? "#F9FAFB" : "red");
  setColorValorExpensas(form.valorExpensas.trim() !== "" ? "#F9FAFB" : "red");
  setColorTipoDePropiedad(form.tipoDePropiedad.trim() !== "" ? "#F9FAFB" : "red");
  setColorDuracion(form.duracion.trim() !== "" ? "#F9FAFB" : "red");
  
};
  const onSubmit = async (data) => {
    setValido(true)
    await verificarCampos()
    console.log(colorValorExpensas)
    if (
      !data.valorAlquiler ||
      !data.valorExpensas ||
      !data.duracion ||
      !data.tipoDePropiedad
    ) {
      Swal.fire({

        text: 'Debe completar todos los campos',
        icon: 'error',
        confirmButtonText: 'Ok',
        customClass: {
          confirmButton: 'mi-clase-confirm' // Puedes agregar una clase personalizada al botón confirmar si es necesario
        },
        ...customStyle // Incorpora el estilo personalizado
      });
    } else {

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

      setInformacionStep1(data);

      dispatch(setResultadoCalculador(true));
      setValido(false)
    }

  };

  let dataToSend = {};
  const onSubmitForm = async (data) => {
    console.log('data: ', data)
    // console.log('datosStepPrincipal : ', datosStepPrincipal)
    let response = await sendContactForm({
      ...data,

      subject: 'Formulario - Obtené tu garantía'
    })
    console.log(response)
    // reset()

  };


  function handleClick(form) {

    if (activeItem === "Contado") {
      dataToSend = {
        ...informacionStep1,
        resultado: formatNumber(resultado),
        contado: formatNumber(contado),
        pago: activeItem,
      };
    }

    if (activeItem === "3 Cuotas") {
      dataToSend = {
        ...informacionStep1,
        resultado: formatNumber(resultado),
        anticipo: anticipo,
        cuotas: formatNumber(tresCuotas),
        pago: activeItem,
      };
    }

    if (activeItem === "6 Cuotas") {
      dataToSend = {
        ...informacionStep1,
        resultado: formatNumber(resultado),
        anticipo: anticipo,
        cuotas: formatNumber(seisCuotas),
        pago: activeItem,
      };
    }

    if (activeItem === "12 Cuotas") {
      dataToSend = {
        ...informacionStep1,
        resultado: formatNumber(resultado12),
        anticipo: anticipo12,
        cuotas: formatNumber(doceCuotas),
        pago: activeItem,
      };
    }
    console.log(form, "FORM")
    console.log(dataToSend, "MODALFORM")
    const objetoCombinado = { ...dataToSend, ...form };
    onSubmitForm(objetoCombinado)
    localStorage.setItem("datosLocalStorage", JSON.stringify(objetoCombinado));

  }



  const handleFormClick = (e) => {
    e.stopPropagation(); // Evita que el evento de clic se propague hacia arriba
  };

  const handleChangeForm = async (e) => {

    let { name, value } = e.target;
 
    if (name === 'valorAlquiler' || name === 'valorExpensas') {
      
      value = currencyMask(value)
    }
    setForm({
      ...form,
      [name]: value,
    });

  };

  const handleSelect = (selectedOption) => {
    setForm({
      ...form,
      duracion: selectedOption,
    });
    // Puedes manejar la selección aquí según tus necesidades
  };
  const handleSelectTypeProp = (selectedOption) => {
    setForm({
      ...form,
      tipoDePropiedad: selectedOption,
    });
    // Puedes manejar la selección aquí según tus necesidades
  };

  useEffect(  () => {
    if(valido){
      verificarCampos()
    }
  
  }, [form, valido]);

  const renderizarForm = () => {
    if(mobile){
      const scrollAmount = 380; // por ejemplo, 200 píxeles
  
      window.scrollTo({
        top: 150,
        behavior: 'smooth',
      });
      setRenderForm(true)
  
  
    }else {
      setRenderForm(true)
    }
  }
  return (
    <form
      className={
        resultado
          ? `${style.ContainerModalCalculador}`
          : `${style.ContainerModalCalculador}`
      }

      onClick={() => setCalculador(false)}
      ref={ref}
      id={id}
    >
      {
        renderForm ?
          <FormModal
          setCalculador={setCalculador}
            setRenderForm={setRenderForm}
            handleClick={handleClick}
            handleFormClick={handleFormClick} />
          :

          <div className={style.ContainerAux} onClick={handleFormClick}>

            <div className={style.TitleCalculador}>
              <div className={style.Title}>Calculá tu garantía</div>
              <div className={style.subTextCalculador}>
                Calculá al instante tu garantía y conocé las modalidades de pago que
                mejor se adapten a tus necesidades.{" "}
              </div>
            </div>


            <div className={style.ContenedorInputsForm}>
              <div className={style.ContainerValores}>
                <input
                style={{
                  border:`solid 1px ${colorValorAlquiler}`
                }}
                  autoComplete="off"
                  type="text"
                  name="valorAlquiler"
                  className={style.input1}
                  placeholder="Valor de alquiler"
                  value={form.valorAlquiler}
                  onChange={handleChangeForm}
                />
                <div className={style.lineaAzul}></div>
                <input
                style={{
                  border:`solid 1px ${colorValorExpensas}`
                }}
                  autoComplete="off"
                  type="text"
                  name="valorExpensas"
                  className={style.input2}
                  value={form.valorExpensas}
                  placeholder="Valor de expensas"
                  onChange={handleChangeForm}
                />
              </div>
              <div className={style.ContainerValores}>


                <Dropdown  colorTipoDePropiedad={colorTipoDePropiedad} options={optionsTypeInmueble} onSelect={handleSelectTypeProp} placeholder={"Tipo"} />


                <div className={style.lineaAzul}></div>
                <Dropdown colorDuracion={colorDuracion} options={options} onSelect={handleSelect} placeholder={"Duración"} />

              </div>
              <buton onClick={() => onSubmit(form)} className={style.flechaCalcula}>
                {mobile ? (
                  <div className={style.textoCalculador}>Calcular</div>
                ) : (
                  <Image src={flechaModal} alt="flecha" />
                )}
              </buton>
            </div>



            {!mobile && !resultado ? (
              <div className={style.ContainerPasos}>
                <div className={style.SolicitalaText}>

                  Solicitala en pocos pasos
                </div>
                <div className={style.ContentPublicidadLineWhite}>
                  <div className={style.ContentPublicidad}>
                    <div className={style.contentIconPubli}>
                      <Image src={percentage} alt="porcentaje" />
                      <div className={style.textPaso}>Cotizá tu garantía</div>
                      <div className={style.bolitaBlanca}></div>
                    </div>


                    <div className={style.contentIconPubli}>
                      <Image src={frame} alt="datos" />
                      <div className={style.textPaso}>Validá tus datos</div>
                      <div className={style.bolitaBlanca}></div>
                    </div>
                    <div className={style.contentIconPubli}>
                      <Image src={star} alt="estrella" />
                      <div className={style.textPaso}>¡Listo!</div>
                      <div className={style.bolitaBlanca}></div>
                    </div>
                  </div>


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
                    // onMouseOver={() => handleMouseOver("Contado")}
                    // onMouseOut={() => handleMouseOut("Contado")}
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
                        Sin descuento ${handleFormat(resultado)}
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
                        ${handleFormat(contado)}
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
                    // onMouseOver={() => handleMouseOver("3 Cuotas")}
                    // onMouseOut={() => handleMouseOut("3 Cuotas")}
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
                        ${handleFormat(anticipo)}
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
                        ${handleFormat(tresCuotas)}
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
                    // onMouseOver={() => handleMouseOver("6 Cuotas")}
                    // onMouseOut={() => handleMouseOut("6 Cuotas")}
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
                        ${handleFormat(anticipo)}
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
                        ${handleFormat(seisCuotas)}
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
                    // onMouseOver={() => handleMouseOver("12 Cuotas")}
                    // onMouseOut={() => handleMouseOut("12 Cuotas")}
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
                        ${handleFormat(anticipo12)}
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
                        ${handleFormat(doceCuotas)}
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

                <div className={style.containerButtonCard} >

                  <div
                    onClick={() => renderizarForm()}
                    className={style.buttonSolicitarDisabled}>
                    Solicitá tu garantía
                  </div>


                  {!mobile ? (
                    <Image
                      onClick={() => renderizarForm()}
                      alt="flecha"
                      className={style.flechaSolicitar}
                      src={flechaModalBlue}
                    />
                  ) : null}
                </div>
              </div>
            ) : null}


          </div>
      }

    </form >
  );
}
