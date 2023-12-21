export const handleQuestions = (onyWidth) => {


  const QuestionsInqui = [
    {
      question: "¿Cuáles son los requisitos para solicitar la garantía?",
      answer:
        "Para adquirir tu garantía solo necesitás una foto de frente y dorso de tu DNI y completar el formulario online con los datos solicitados.",
      id: "question01",
      styleCustom: onyWidth < 361 ? "80px" :  onyWidth > 966 && onyWidth < 1500 ? "85px" : "75px",
    },
    {
      question: "¿Pueden no aceptarme la garantía de alquiler?",
      answer:
        "No hay razón para que no acepten la garantía de alquiler Trust Fund ya que es válido en toda la Argentina y está contemplado dentro de la ley de alquileres.",
      id: "question02",
      styleCustom: onyWidth < 361 ? "100px" :  onyWidth > 966 && onyWidth < 1500 ? '87px' :"75px",
    },
    {
      question: "¿Qué es una Garantía Pre-aprobada?",
      answer:
        "La garantía pre-aprobada es un documento descargable, el cual podrás presentar en la inmobiliaria o al propietario del inmueble al momento de alquilar como comprobante de que posees una garantía de alquiler en curso. Esto te permitirá agilizar el contrato de locación en el acto.",
      id: "question03",
      styleCustom: onyWidth < 361 ? "165px" : onyWidth > 966 && onyWidth < 1500 ? '145px' :  "120px",
    },
  ];

  const QuestionsProp = [
    {
      question: "¿En cuanto tiempo respondemos ante el incumplimiento de pago?",
      answer:
        "Nuestro tiempo de respuesta comienza a contar a partir de la fecha en la que se notifica el incumplimiento de pago y durante los próximos 10 días hábiles.",
      id: "question01",
      styleCustom: onyWidth < 361 ? "100px" :  onyWidth > 966 && onyWidth < 1500 ? '87px' :"75px",
    },
    {
      question: "¿Quién firma el contrato de garantía?",
      answer:
        "La firma estará a cargo del solicitante y co-solicitante si lo hubiera y el gerente general.",
      id: "question02",
      styleCustom: onyWidth < 361 ? "55px" :  onyWidth > 966 && onyWidth < 1500 ? '65px' : "55px",
    },
    {
      question: "¿Cómo procedo ante incumplimiento de pago?",
      answer:
        "Se debe notificar a Trust Fund el incumplimiento dentro de los 30 días de haberse conocido el hecho al mail info@trustfund.com.ar con los siguientes datos: nombre y apellido del inquilino, DNI, dirección de vivienda, monto adeudado y una foto de la intimación al inquilino (CD).",
      id: "question03",
      styleCustom: onyWidth < 361 ? "165px" : onyWidth > 966 && onyWidth < 1500 ? '140px' : "125px",
    },
  ];


  return {
    QuestionsInqui,
    QuestionsProp,
  };


};
