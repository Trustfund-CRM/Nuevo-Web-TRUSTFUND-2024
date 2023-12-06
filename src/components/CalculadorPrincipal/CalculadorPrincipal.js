import Image from 'next/image';
import style from './Calculador.module.css';
import { NuevaHome } from '@/styles';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import Link from 'next/link';


export default function CalculadorPrincipal() {
  const [step, setStep] = useState(1);
  const [informacionStep1, setInformacionStep1] = useState()
  const [activeItem, setActiveItem] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [contado, setContado] = useState(null)
  const [anticipo, setAnticipo] = useState(null);
  const [resultado12, setResultado12] = useState(null);
  const [anticipo12, setAnticipo12] = useState(null);
  const [tresCuotas, setTresCuotas] = useState(null);
  const [seisCuotas, setSeisCuotas] = useState(null);
  const [doceCuotas, setDoceCuotas] = useState(null);

  const { register, handleSubmit, watch, reset, formState: { errors, isSubmitting } } = useForm();


  const currencyMask = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    value = value.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
    value = value.split('').reverse().join('').replace(/^[.]/, '');
    e.target.value = value;
    return e;
  }


  const calcularGarantia = (data) => {
    const { valorAlquiler, valorExpensas, Duracion } = data;
    const alquiler = parseFloat(valorAlquiler.replace(/\./g, '') || 0);
    const expensas = parseFloat(valorExpensas.replace(/\./g, '') || 0);
    const duracion = parseInt(Duracion);
    const resultado = (alquiler + expensas) * duracion * 0.06;
    return resultado;
  };

  const calcularGarantia12 = (data) => {
    const { valorAlquiler, valorExpensas, Duracion } = data;
    const alquiler = parseFloat(valorAlquiler.replace(/\./g, '') || 0);
    const expensas = parseFloat(valorExpensas.replace(/\./g, '') || 0);
    const duracion = parseInt(Duracion);
    const resultado = (alquiler + expensas) * duracion * 0.08;
    return resultado;
  };


  function formatNumber(resultado) {
    return new Intl.NumberFormat().format(resultado)
  }

  let dataToSend = {}

  function handleClick() {

    if (activeItem === 'Contado') {
      dataToSend = {
        ...informacionStep1,
        resultado: formatNumber(resultado),
        contado: formatNumber(contado),
        pago: activeItem
      };
      //console.log(dataToSend);
    }

    if (activeItem === '3 Cuotas') {
      dataToSend = {
        ...informacionStep1,
        resultado: formatNumber(resultado),
        anticipo: anticipo,
        cuotas: formatNumber(tresCuotas),
        pago: activeItem
      };
      //console.log(dataToSend);
    }

    if (activeItem === '6 Cuotas') {
      dataToSend = {
        ...informacionStep1,
        resultado: formatNumber(resultado),
        anticipo: anticipo,
        cuotas: formatNumber(seisCuotas),
        pago: activeItem
      };
      //console.log(dataToSend);
    }

    if (activeItem === '12 Cuotas') {
      dataToSend = {
        ...informacionStep1,
        resultado: formatNumber(resultado12),
        anticipo: anticipo12,
        cuotas: formatNumber(doceCuotas),
        pago: activeItem
      };
      //console.log(dataToSend);
    }


    localStorage.setItem('datosLocalStorage', JSON.stringify(dataToSend));

  }

  const onSubmit = data => {
    const resultado = Math.floor(calcularGarantia(data));
    setResultado(resultado);
    const anticipo = Math.floor(resultado * 0.15);
    setAnticipo(formatNumber(anticipo));
    const contado = Math.floor(resultado - anticipo);
    setContado(contado);
    const tresCuotas = Math.floor(contado / 2);
    setTresCuotas(tresCuotas);
    const seisCuotas = Math.floor(contado / 5);
    setSeisCuotas(seisCuotas);

    const resultado12 = Math.floor(calcularGarantia12(data));
    setResultado12(resultado12);
    const anticipo12 = Math.floor(resultado12 * 0.15);
    setAnticipo12(formatNumber(anticipo12));
    const contadoDoce = Math.floor(resultado12 - anticipo12);
    const doceCuotas = Math.floor(contadoDoce / 11);
    setDoceCuotas(doceCuotas);

    console.log(resultado, anticipo, contado, tresCuotas, seisCuotas, doceCuotas)

    setInformacionStep1(data);

    setStep(step + 1);
  };


  const Step1 = () => (

    <>
      <h1 className={style.tituloCalculador}>Obtené tu garantía</h1>
      <p className={style.subtituloCalculador}>Calculá al instante y conocé las facilidades de pago</p>
      <div className={`${style.boxPrincipalInputs} ${step === 0 ? style.datosActivos : ""}`}>

        <div className={style.boxInputCalculador}>
          <label className={style.labelCalculador}>TIPO DE PROPIEDAD</label>
          <select className={style.InputCaculadorSelect} name='tipoDePropiedad' id='tipoDePropiedad' {...register('tipoDePropiedad', { required: true })} >
            <option className={style.OptionStyle} value='VIVIENDA'>VIVIENDA</option>
            <option className={style.OptionStyle} value='COMERCIAL'>COMERCIAL</option>
            <option className={style.OptionStyle} value='CAMPO'>CAMPO</option>
          </select>

        </div>
        <div className={style.boxInputCalculador}>
          <label className={style.labelCalculador} >VALOR ALQUILER</label>
          <input type='text' name="valorAlquiler" className={style.InputCaculador} autoComplete="new-password"
            onInput={currencyMask}
            {...register('valorAlquiler', { required: true })} />
          {errors.valorAlquiler?.type === 'required' && <span className={style.ErrosInputs}>Requerido</span>}
        </div>

        <div className={style.boxInputCalculador}>
          <label className={style.labelCalculador}>VALOR EXPENSAS</label>
          <input type='text' name="valorExpensas" className={style.InputCaculador} autoComplete="new-password"
            onInput={currencyMask}
            {...register('valorExpensas', { required: true })} />
          {errors.valorExpensas?.type === 'required' && <span className={style.ErrosInputs}>Requerido</span>}
        </div>
        <div className={style.boxInputCalculador}>
          <label className={style.labelCalculador}>DURACIÓN</label>
          <select name='Duracion' id='Duracion' className={style.InputCaculadorSelect} {...register('Duracion', { required: true })} >
            <option className={style.OptionStyle}>12 MESES</option>
            <option className={style.OptionStyle}>24 MESES</option>
            <option className={style.OptionStyle}>36 MESES</option>
            <option className={style.OptionStyle}>48 MESES</option>
            <option className={style.OptionStyle}>60 MESES</option>
          </select>
        </div>
        <div className={style.boxButtonCalculador}>

          <Button type='submit' className={style.buttonCalculador}>
            CALCULAR
          </Button>
        </div>
      </div>
    </>
  );


  const Step2 = () => (
    <>
      <div className={`${style.boxPrincipalInputs} ${step === 1 ? style.datosActivos : ""}`}>
        <div className={style.subBoxPrincipalInputs}>
          <div className={style.ContenedorCuadrosStep2}>
            <div className={style.BoxInfoCalculador}>
              <div className={`${activeItem === "Contado" ? style.activo : style.ContenedorInfo}`} onClick={() => { setActiveItem('Contado') }}>
                <p className={`${activeItem === "Contado" ? style.tituloBoxCalculadorActivo : style.tituloBoxCalculador}`}>CONTADO</p>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <p className={`${activeItem === "Contado" ? style.labelCalculadorActivo : style.labelCalculadorBox}`}>VALOR DE GARANTÍA</p>
                  <div className={style.boxCosto}>
                    <p className={`${activeItem === "Contado" ? style.valorGarantíaContadoActivo : style.valorGarantíaContado}`}><s>${formatNumber(resultado)}</s></p>
                    <p className={`${activeItem === "Contado" ? style.descuentoContadoActivo : style.descuentoContado}`}>15% off</p>
                  </div>
                </div>
                <div>
                  <p className={`${activeItem === "Contado" ? style.SubtituloDatoCalculadorActivo : style.SubtituloDatoCalculador}`}>1 pago de</p>
                  <p className={`${activeItem === "Contado" ? style.InfoAzulActivo : style.InfoAzul}`}>$  {formatNumber(contado)}</p>
                </div>
              </div>
            </div>
            <div className={style.BoxInfoCalculador}>
              <div className={`${style.ContenedorInfo} ${activeItem === "3 Cuotas" ? style.activo : ""}`} onClick={() => { setActiveItem('3 Cuotas') }}>
                <p className={`${activeItem === "3 Cuotas" ? style.tituloBoxCalculadorActivo : style.tituloBoxCalculador}`}>3 CUOTAS SIN INTERÉS</p>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <p className={`${activeItem === "3 Cuotas" ? style.SubtituloDatoCalculadorActivo : style.SubtituloDatoCalculador}`}>Anticipo del 15%</p>
                  <p className={`${activeItem === "3 Cuotas" ? style.valorGarantíaContadoActivo : style.valorGarantíaContado}`}>$ {anticipo}</p>
                </div>
                <div>
                  <p className={`${activeItem === "3 Cuotas" ? style.SubtituloDatoCalculadorActivo : style.SubtituloDatoCalculador}`}>+2 cuotas de</p>
                  <p className={`${activeItem === "3 Cuotas" ? style.InfoAzulActivo : style.InfoAzul}`}>$  {formatNumber(tresCuotas)}</p>
                </div>
              </div>
            </div>
            <div className={style.BoxInfoCalculador}>
              <div className={`${style.ContenedorInfo} ${activeItem === "6 Cuotas" ? style.activo : ""}`} onClick={() => { setActiveItem('6 Cuotas') }}>
                <p className={`${activeItem === "6 Cuotas" ? style.tituloBoxCalculadorActivo : style.tituloBoxCalculador}`}>6 CUOTAS SIN INTERÉS</p>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <p className={`${activeItem === "6 Cuotas" ? style.SubtituloDatoCalculadorActivo : style.SubtituloDatoCalculador}`}>Anticipo del 15%</p>
                  <p className={`${activeItem === "6 Cuotas" ? style.valorGarantíaContadoActivo : style.valorGarantíaContado}`}>$ {anticipo}</p>
                </div>
                <div>
                  <p className={`${activeItem === "6 Cuotas" ? style.SubtituloDatoCalculadorActivo : style.SubtituloDatoCalculador}`}>+5 cuotas de</p>
                  <p className={`${activeItem === "6 Cuotas" ? style.InfoAzulActivo : style.InfoAzul}`}>$  {formatNumber(seisCuotas)}</p>
                </div>
              </div>
            </div>
            <div className={style.BoxInfoCalculador}>
              <div className={`${style.ContenedorInfo} ${activeItem === "12 Cuotas" ? style.activo : ""}`} onClick={() => { setActiveItem('12 Cuotas') }}>
                <p className={`${activeItem === "12 Cuotas" ? style.tituloBoxCalculadorActivo : style.tituloBoxCalculador}`}>12 CUOTAS</p>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <p className={`${activeItem === "12 Cuotas" ? style.SubtituloDatoCalculadorActivo : style.SubtituloDatoCalculador}`}>Anticipo del 15%</p>
                  <p className={`${activeItem === "12 Cuotas" ? style.valorGarantíaContadoActivo : style.valorGarantíaContado}`}>$ {anticipo12}</p>
                </div>
                <div>
                  <p className={`${activeItem === "12 Cuotas" ? style.SubtituloDatoCalculadorActivo : style.SubtituloDatoCalculador}`}>+11 cuotas de</p>
                  <p className={`${activeItem === "12 Cuotas" ? style.InfoAzulActivo : style.InfoAzul}`}>$  {formatNumber(doceCuotas)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.BoxButtonSolicitar}>
            <Link disabled={isSubmitting} className={style.buttonCalculador} onClick={handleClick} href='/ObteneTuGarantia' >
              SOLICITAR
            </Link>
          </div>
        </div>

      </div>

    </>
  );

  return (
    <div className={`${style.boxPrincipalCalculador} ${step === 2 ? style.boxPrincipalCalculadorActivo : ""}`}>
      <div className={style.subBoxPrincipal}>
        <form onSubmit={handleSubmit(onSubmit)} className={style.boxCalculador}>
          {step >= 1 && <Step1 />}
          {step >= 2 &&
            <>
              <Step2 />
            </>

          }
        </form>
        <div className={style.boxFoto}>
          {step === 2 ?
            (
              <div className={style.foto}>
                <Image className={style.FotoStePrincipal} alt="fotoPrincipal" src={NuevaHome} />
              </div>
            )
            :
            (
              <div className={style.foto}>
                <Image className={style.FotoStePrincipal} alt="fotoPrincipal" src={NuevaHome} />
              </div>
            )
          }

        </div>

      </div>
    </div>
  )
}
