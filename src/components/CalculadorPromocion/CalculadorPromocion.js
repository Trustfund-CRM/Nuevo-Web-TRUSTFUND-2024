import style from '../CalculadorPrincipal/Calculador.module.css';
import style2 from './CalculadorPromocion.module.css'
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useRef, useState } from 'react';
import Link from 'next/link';


export default function CalculadorPromocion() {
  const [step, setStep] = useState(1);
  const [informacionStep1, setInformacionStep1] = useState()
  const [resultado, setResultado] = useState(null);
  const [contado, setContado] = useState(null)

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


  function formatNumber(resultado) {
    return new Intl.NumberFormat().format(resultado)
  }

  let dataToSend = {}

  let targetDivRef = ''

  if (typeof window !== "undefined") {
    targetDivRef = document?.getElementById('step2')?.scrollIntoView()
    console.log(targetDivRef)
  }

  function handleCalcular() {

    if (targetDivRef?.current) {
      console.log('entra al if')
      targetDivRef?.current?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }

  function handleClick() {

    dataToSend = {
      ...informacionStep1,
      resultado: formatNumber(resultado),
      contado: formatNumber(contado),
      pago: 'Promocion'
    };

    localStorage.setItem('datosLocalStorage', JSON.stringify(dataToSend));

  }

  const onSubmit = data => {

    const resultado = Math.floor(calcularGarantia(data));
    setResultado(resultado);
    // const contado = Math.floor(resultado - anticipo);
    const contado = Math.floor(resultado - (resultado * 0.5));
    setContado(contado);

    setInformacionStep1(data);

    setStep(step + 1);
  };


  const Step1 = () => (

    <>
      <h1 className={style.tituloCalculador}>¡Cotizá tu garantía de alquiler ahora!</h1>
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
            {...register('valorExpensas', { required: false })} />
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

          <Button type='submit' className={style.buttonCalculador} onClick={handleCalcular}>
            CALCULAR
          </Button>
        </div>
      </div>
    </>
  );


  const Step2 = () => (
    <>
      <div id='step2' className={`${style2.boxPrincipalInputs} ${step === 1 ? style.datosActivos : ""}`}>
        <div className={style2.subBoxPrincipalInputs}>
          <div className={style2.ContenedorCuadrosStep2}>
            <div className={style2.BoxInfoCalculador}>
              <div className={style2.ContenedorInfo}>
                {/* <p className={style2.tituloBoxCalculador}>CONTADO</p> */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <p className={style2.labelCalculadorBox}>VALOR DE GARANTÍA</p>
                  <div className={style2.boxCosto}>
                    <p className={style2.valorGarantíaContado}>Antes <s>${formatNumber(resultado)}</s></p>
                    <p className={style2.descuentoContado}>50% OFF aplicado</p>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', width: 'max-content' }}>
                  <p className={style2.SubtituloDatoCalculador}>En 1 pago de</p>
                  <p className={style2.InfoAzul}>$  {formatNumber(contado)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={style2.BoxButtonSolicitar}>
            <Link disabled={isSubmitting} className={style.buttonCalculador} onClick={handleClick} href='/ObteneTuGarantia' >
              SOLICITAR
            </Link>
          </div>
        </div>

      </div>

    </>
  );

  return (
    <div className={`${style2.boxPrincipalCalculador} ${step === 2 ? style2.boxPrincipalCalculadorActivo : ""}`}>
      <div className={style2.subBoxPrincipal}>
        <form onSubmit={handleSubmit(onSubmit)} className={style.boxCalculador}>
          {step >= 1 && <Step1 />}
          {step >= 2 &&
            <>
              <Step2 />
            </>

          }
        </form>
      </div>
    </div>
  )
}
