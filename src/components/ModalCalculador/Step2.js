import { Image } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import style from './ModalCalculador.module.css';
import { useForm } from "react-hook-form";

export default function Step2() {

    const { register, handleSubmit, watch, reset, formState: { errors, isSubmitting } } = useForm();

    const currencyMask = (e) => {
        let value = e.target.value;
        value = value.replace(/\D/g, "");
        value = value.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
        value = value.split('').reverse().join('').replace(/^[.]/, '');
        e.target.value = value;
        return e;
    }

    return (
        <div>

        </div>
    )
}