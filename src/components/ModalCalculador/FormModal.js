import { useEffect, useRef } from "react";
import style from "./FormModal.module.css";
import { useState } from "react";
import "animate.css";
import Swal from "sweetalert2";
import { ArrowRight } from "@/icons/arrowRight";

export default function FormModal({
  setCalculador,
  calculador,
  setRenderForm,
  handleClick,
  handleFormClick,
}) {
  const [form, setForm] = useState({
    Nombre: "",
    Apellido: "",
    Email: "",
    Dni: "",
    Telefono: "",
    Localidad: "",
  });

  const [colorNombre, setColorNombre] = useState("none");
  const [colorApellido, setColorApellido] = useState("none");
  const [colorEmail, setColorEmail] = useState("none");
  const [colorDni, setColorDni] = useState("none");
  const [colorTelefono, setColorTelefono] = useState("none");
  const [colorLocalidad, setColorLocalidad] = useState("none");

  const [valido, setValido] = useState(false);

  const customStyle = {
    confirmButtonColor: "#004993",
    fontFamily: "Poppins, sans-serif",
  };
  const handleChangeForm = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: e.target.value,
    });
  };
  const verificarCampos = async () => {
    setColorNombre(form.Nombre.trim() !== "" ? "#F9FAFB" : "red");
    setColorApellido(form.Apellido.trim() !== "" ? "#F9FAFB" : "red");
    setColorEmail(form.Email.trim() !== "" ? "#F9FAFB" : "red");
    setColorDni(form.Dni.trim() !== "" ? "#F9FAFB" : "red");
    setColorTelefono(form.Telefono.trim() !== "" ? "#F9FAFB" : "red");
    setColorLocalidad(form.Localidad.trim() !== "" ? "#F9FAFB" : "red");
  };
  const enviarForm = async () => {
    setValido(true);
    await verificarCampos();
    if (
      !form.Nombre ||
      !form.Apellido ||
      !form.Email ||
      !form.Dni ||
      !form.Telefono ||
      !form.Localidad
    ) {
      Swal.fire({
        text: "Debe completar todos los campos",
        icon: "error",
        confirmButtonText: "Ok",
        customClass: {
          confirmButton: "mi-clase-confirm", // Puedes agregar una clase personalizada al botón confirmar si es necesario
        },
        ...customStyle, // Incorpora el estilo personalizado
      });
    } else {
      handleClick(form);
      setValido(false);
      window.scrollTo({
        top: 1,
        behavior: "smooth",
      });
      Swal.fire({
        title: "Formulario enviado con exito",

        text: "Un asesor se comunicará a la brevedad.",
        icon: "success",
        confirmButtonText: "Ok",
        customClass: {
          confirmButton: "mi-clase-confirm", // Puedes agregar una clase personalizada al botón confirmar si es necesario
        },
        ...customStyle, // Incorpora el estilo personalizado
      });
      setCalculador(false);
      setRenderForm(false);
    }
  };
  useEffect(() => {
    if (valido) {
      verificarCampos();
    }
  }, [form, valido]);
  return (
    <div className={style.Container} onClick={handleFormClick}>
      <div className={style.ContentText}>
        <div className={style.TextObteneGarantia}>Obtené tu garantía</div>
        <div className={style.TextCompletaTusDatos}>
          Completá tus datos personales para solicitar tu garantía.
        </div>
      </div>
      <div className={style.GridContentInputs}>
        <input
          className={style.InputStyle}
          style={{
            border: `solid 1px ${colorNombre}`,
          }}
          autoComplete="off"
          name="Nombre"
          placeholder="Nombre/s"
          value={form.Nombre}
          onChange={handleChangeForm}
        />
        <input
          className={style.InputStyle}
          style={{
            border: `solid 1px ${colorApellido}`,
          }}
          autoComplete="off"
          placeholder="Apellido/s"
          value={form.Apellido}
          name="Apellido"
          onChange={handleChangeForm}
        />
        <input
          className={style.InputStyle}
          autoComplete="off"
          style={{
            border: `solid 1px ${colorEmail}`,
          }}
          name="Email"
          value={form.Email}
          placeholder="Email"
          onChange={handleChangeForm}
          type="text"
        />
        <input
          className={style.InputStyle}
          autoComplete="off"
          style={{
            border: `solid 1px ${colorDni}`,
          }}
          value={form.Dni}
          name="Dni"
          placeholder="DNI/ Pasaporte / Cédula"
          onChange={handleChangeForm}
          type="number"
        />
        <input
          className={style.InputStyle}
          autoComplete="off"
          style={{
            border: `solid 1px ${colorTelefono}`,
          }}
          name="Telefono"
          placeholder="Teléfono"
          value={form.Telefono}
          onChange={handleChangeForm}
          type="number"
        />
        <input
          className={style.InputStyle}
          autoComplete="off"
          style={{
            border: `solid 1px ${colorLocalidad}`,
          }}
          name="Localidad"
          placeholder="Localidad"
          value={form.Localidad}
          onChange={handleChangeForm}
        />
      </div>
      <div className={style.DivContentBtn}>
        <div className={style.Boton1} onClick={() => setRenderForm(false)}>
          Volver a calcular
        </div>
        <div className={style.Boton2} onClick={() => enviarForm()}>
          Solicitá tu garantía
          <ArrowRight />
        </div>
      </div>
    </div>
  );
}
