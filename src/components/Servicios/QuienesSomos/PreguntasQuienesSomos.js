import { casaPreguntas, serviciosPreguntas, dañosPreguntas, costosPreguntas } from "@/styles";

export const handleQuestions = (onyWidth) => {

    const Questions = [
        {
            question: "¿Quiénes somos?",
            answer:
                "Nuestra garantía de alquiler cubre las obligaciones establecidas en un contrato de locación, siendo el respaldo más completo para resguardar los intereses de todas las partes involucradas: inquilinos, propietarios e inmobiliarias. Otorgamos garantías de fianza en todo el territorio nacional con el aval de Delsud, lo que nos permite contar con un respaldo económico amplio, ya que poseemos fondos para financiar garantías de manera segura y flexible.",
            id: "question01",
            styleCustom: onyWidth < 361 ? "80px" : onyWidth > 966 && onyWidth < 1500 ? "85px" : "75px",
        },
        {
            question: "¿Qué cubrimos?",
            answer: [
                {
                    icon: { casaPreguntas },
                    text: 'Alquiler y Expensas',
                },
                {
                    icon: { serviciosPreguntas },
                    text: 'Servicios (Luz, agua, electricidad y SUM).'
                },
                {
                    icon: { dañosPreguntas },
                    text: 'Daños y roturas en el inmueble (vidrios, cerraduras, grifería, calefactores y/o artefactos de aire acondicionado).'
                },
                {
                    icon: { costosPreguntas },
                    text: 'Costos de desalojo ante posible usurpación del inquilino.'
                },
            ],
            id: "question02",
            styleCustom: onyWidth < 361 ? "100px" : onyWidth > 966 && onyWidth < 1500 ? '87px' : "75px",
        },
        {
            question: "Requisitos para obtener nuestra garantía",
            answer: [
                {
                    text: 'DNI 	-  Historial crediticio favorable',
                    style: ''
                },
                {
                    text: '*En caso que tu historial crediticio sea desfavorable, te solicitaremos la inclusión de un co-solicitante.',
                    style: ''
                }
            ],
            id: "question03",
            styleCustom: onyWidth < 361 ? "165px" : onyWidth > 966 && onyWidth < 1500 ? '145px' : "120px",
        },
        {
            question: "¿Cómo la obtengo?",
            answer: [
                {
                    item: 1,
                    text: 'Foto del frente y dorso de tu DNI.',
                },
                {
                    item: 2,
                    text: 'Elegís el método de pago: Descuentos de contado - Financiación en cuotas.',
                },
                {
                    item: 3,
                    text: '¡Listo! En menos de 24hs tendrás tu garantía de alquiler.',
                }
            ],
            id: "question04",
            styleCustom: onyWidth < 361 ? "165px" : onyWidth > 966 && onyWidth < 1500 ? '145px' : "120px",
        },
    ];


    return {
        Questions
    };


};
