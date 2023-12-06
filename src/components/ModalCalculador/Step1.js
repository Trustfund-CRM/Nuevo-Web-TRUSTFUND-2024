import { Image } from "react-bootstrap";
// import { star, percentage, frame, flechaModal } from "@/styles";
import style from './ModalCalculador.module.css';
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';

export default function Step1({ star, percentage, frame, flechaModal }) {

    const { register, handleSubmit, watch, reset, formState: { errors, isSubmitting } } = useForm();

    const currencyMask = (e) => {
        let value = e.target.value;
        value = value.replace(/\D/g, "");
        value = value.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
        value = value.split('').reverse().join('').replace(/^[.]/, '');
        e.target.value = value;
        return e;
    }

    const handleInputChange = (e) => {

    }

    return (
        <div>
            <div className={style.TitleCalculador}>
                <div className={style.Title}>Calculá tu garantía</div>
                <div className={style.subTextCalculador}>Calculá al instante tu garantía y conocé las modalidades de pago que mejor se adapte a tus necesidades. </div>
            </div>

            <div className={style.ContainerInputs}>
                <div className={style.ContainerValores}>

                    <input type='text' name="valorAlquiler" className={style.input1} placeholder="Valor de alquiler" onInput={currencyMask}
                        {...register('valorAlquiler', { required: true })} />
                    {errors.valorAlquiler?.type === 'required' && <span className={style.ErrosInputs}>Requerido</span>}

                    <input type='text' name="valorExpensas" className={style.input2} placeholder="Valor de expensas" onInput={currencyMask}
                        {...register('valorExpensas', { required: true })} />
                    {errors.valorExpensas?.type === 'required' && <span className={style.ErrosInputs}>Requerido</span>}

                </div>
                <div className={style.ContainerValores}>
                    <select name='tipoDePropiedad' id='tipoDePropiedad' className={style.input1} {...register('tipoDePropiedad', { required: true })}>
                        <option value=''>Tipo</option>
                        <option value='Vivienda'>Vivienda</option>
                        <option value='Comercio'>Comercio</option>
                        <option value='Campo'>Campo</option>
                    </select>

                    <select name='Duracion' id='Duracion' className={style.input2} {...register('Duracion', { required: true })}>
                        <option value=''>Duración</option>
                        <option value='12'>12 MESES</option>
                        <option value='24'>24 MESES</option>
                        <option value='36'>36 MESES</option>
                        <option value='48'>48 MESES</option>
                        <option value='56'>56 MESES</option>
                    </select>

                </div>
                <Button type="submit" className={style.flechaCalcula} >
                    <Image src={flechaModal} />
                </Button>
            </div>

            <div className={style.ContainerPasos}>
                <div className={style.Paso}>
                    <Image src={percentage} />
                    <div className={style.textPaso}>Cotizá tu garantía</div>
                </div>
                <div className={style.Paso}>
                    <Image src={frame} />
                    <div className={style.textPaso}>Validá tus datos</div>
                </div>
                <div className={style.Paso}>
                    <Image src={star} />
                    <div className={style.textPaso}>¡Listo!</div>
                </div>
            </div>
        </div>
    )
}