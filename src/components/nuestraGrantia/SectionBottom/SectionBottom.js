import React, { useEffect, useState } from 'react'
import axios from 'axios';
import style from "../nuestraGarantia.module.css";
import { Accordion } from 'react-bootstrap';
import Image from 'next/image';
import '../stylesInputs.css'
import { inmoAdherida1, inmoAdherida2 } from './inmosAdheridas';
import { logo404 } from '@/styles';
import ButtonWsp from '@/components/ButtonWsp/ButtonWsp';

const apiUrl = process.env.REACT_APP_PRODUCTION_API_ULR
// const apiUrl = process.env.REACT_APP_LOCAL_API_URL
// console.log(apiUrl)

export default function SectionBottom() {

    const [isLoading, setIsLoading] = useState(true);
    const [estadito, setEstadito] = useState();
    const [inmobiliarias, setInmobiliarias] = useState();
    const [provincia, setProvincia] = useState();
    const [localidad, setLocalidad] = useState();
    let provincias = [];
    let localidades = [];

    useEffect(() => {

        async function fetchData() {
            try {
                const response = await axios.get(`https://trustfundcrm.testeoenzo.online/api/inmobiliarias_adheridas`);
                const data = response.data;
                setEstadito(data);
                setInmobiliarias(data);
                setIsLoading(false);

            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        }

        fetchData();

    }, []);
    useEffect(() => {
        console.log(inmobiliarias)

    }, [inmobiliarias]);


    estadito && estadito.map(e => {
        if (!provincias.includes(e.provincia)) {
            provincias.push(e.provincia)
        }
        if (!localidades.includes(e.localidad)) {
            localidades.push(e.localidad)
        }
    })


    switch (provincia) {
        case 'Buenos Aires':
            localidades = ['San Nicolás de los Arroyos', 'Mar del Plata', 'Luján', 'Coronel Pringles', 'Pigüé', 'San Carlos de Bolívar', 'Bragado', 'Coronel Suárez', 'Arrecifes', 'San Pedro', 'Saladillo', '9 de Julio', 'Necochea - Qeuquén', 'San Antonio de Areco', 'Chivilcoy', 'Carlos Casares', 'Quilmes', 'Pergamino', 'La Plata', 'Bahía Blanca', 'Olavarría', 'Pilar', 'Cañuelas', 'Trenque Lauquen', 'Navarro', 'Lobos', 'Mar de Ajó - San Bernardo', 'Berazategui', 'San Clemente Del Tuyú', 'Rauch', 'Chascomús', 'Ranchos', 'Dolores', 'Berisso', 'Ayacucho', 'General Belgrano', 'Lomas de Zamora', 'Avellaneda', 'La Matanza', 'Florencio Varela', 'Chacabuco', 'Lanús', 'Tigre', 'Almirante Brown', 'Tandil', 'Escobar', 'Ramallo', 'Benito Juárez', 'Junín', 'Pehuajó', 'Mercedes', 'Campana', 'Guernica', 'Esteban Echeverría', 'Baradero', 'Ezeiza', 'Magdalena', 'Veronica', 'Castelli', 'Coronel Brandsen', 'La Costa', 'Moreno', 'José C. Paz', 'Ciudad Autónoma de Buenos Aires', 'Pellegrini', 'Tres Arroyos', 'Morón', 'San Miguel', 'Hurlingham', 'Ituzaingó', 'Tres De Febrero', 'Lincoln', 'Marcos Paz', 'Malvinas Argentinas', 'Luís Beltrán', 'San Bernardo', 'Vicente Lopez', 'Moreno', 'Santa Teresita - Mar del Tuyú', 'San Clemente del Tuyú', 'La Punta', 'San Miguel del Monte', 'Roque Pérez', 'General Belgrano', 'Chascomús', 'Moreno', 'San Isidro', 'Monte Hermoso', 'Tres de Febrero', 'Puán']
            break;

        case 'Río Negro':
            localidades = ['Lamarque', 'Luis Beltrán', 'Cipolletti', 'Choele Choel']
            break;

        case 'San Juan':
            localidades = ['San Juan']
            break;

        case 'San Luis':
            localidades = ['San Luis', 'La Punta', 'Juana Koslay', 'Merlo']
            break;

        case 'Ciudad Autónoma de Buenos Aires':
            localidades = ['Ciudad Autónoma de Buenos Aires']
            break;

        case 'Tucumán':
            localidades = ['San Miguel de Tucumán']
            break;

        case 'Salta':
            localidades = ['Salta']
            break;

        case 'Córdoba':
            localidades = ['Embalse', 'Alta Gracia', 'Santa Rosa de Calamuchita']
            break;

        case 'Entre Ríos':
            localidades = ['Paraná', 'Concordia', 'Urdinarrain', 'Chajarí', 'Gualeguaychú']
            break;

        case 'La Pampa':
            localidades = ['Santa Rosa', 'Macachín']

        case 'Catamarca':
            localidades = ['San Fernando del Valle de Catamarca']
            break;

        case 'Mendoza':
            localidades = ['Las Heras', 'Mendoza']
            break;

        case 'Misiones':
            localidades = ['Posadas', 'Victoria']
            break;

        case 'Chaco':
            localidades = ['Resistencia']
            break;

        case 'Chubut':
            localidades = ['Trelew', 'Puerto Madryn']
            break;

        case 'Jujuy':
            localidades = ['San Salvador de Jujuy']
            break;

        case 'Santa Fe':
            localidades = ['Rosario']
            break;

        default:
            break;
    }

    const imageLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }


    // setInmobiliarias({
    //     ...inmobiliarias,
    //     inmoAdherida1,
    //     inmoAdherida2
    // })
    // inmobiliarias?.unshift(inmoAdherida1, inmoAdherida2)

    function filtrarProvincia(e) {
        setProvincia(e.target.value)
        let temp = estadito && estadito.filter(estado => estado.provincia === e.target.value);
        localidades = temp.map(t => t.localidad)
    }

    function filtrarLocalidad(e) {
        setLocalidad(e.target.value)
    }

    function handleFilter() {
        setInmobiliarias(estadito.filter(inmo => inmo.provincia === provincia && inmo.localidad === localidad))
    }


    return (
        <div className={style.containerPrincipalGarantia}>
            <div className={style.subContenedorPrincipalGarantia}>
                <div className={style.BoxFormAccordion}>
                    <p className={style.tituloAccordion}>¿Estás buscando alquiler?</p>
                    <div className={style.ContainerAccordion}>
                        <Accordion style={{ backgroundColor: 'transparent !important' }} className={style.Accordion} >
                            <Accordion.Item className={style.AccordionItem} eventKey="0" >
                                <Accordion.Header className={style.AccordionHeader}  >Conocé que inmobiliarias trabajan con nosotros</Accordion.Header>
                                <Accordion.Body className={style.AccordionBody} >
                                    <div className={style.BoxSelect}>
                                        <select className={style.Select} onChange={(e) => filtrarProvincia(e)} >
                                            <option value='All'>Provincia</option>
                                            {provincias.map((p) => { return <option key={p} value={p}> {p} </option> })}
                                        </select>
                                        <select className={style.Select} onChange={(e) => filtrarLocalidad(e)} >
                                            <option value='All'>Localidad</option>
                                            {localidades.map((l) => { return <option key={l} value={l}> {l} </option> })}
                                        </select>
                                        <button className={style.ButtonBuscar} onClick={handleFilter}>BUSCAR</button>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>



                    <div className={style.ContenedorCardsInmobiliarias}>
                        {isLoading ?
                            <div className="three-body">
                                <div className="three-body__dot"></div>
                                <div className="three-body__dot"></div>
                                <div className="three-body__dot"></div>
                            </div>

                            //  <div className="item">
                            // <div className="loader-pulse"></div>
                            // </div>
                            :
                            <>
                                {
                                    inmobiliarias.length > 0 ?
                                        <>
                                            {inmobiliarias.map((inmo) => {
                                                return (
                                                    <div key={inmo.id} className={style.Card}>
                                                        <Image
                                                            width={100}
                                                            height={100}
                                                            src={
                                                                inmo.logo ?
                                                                    inmo.logo === 'https://res.cloudinary.com/trustfund2022/image/upload/f_auto,q_auto/n0stapp60q7el4rtdcqs' ?
                                                                        logo404 : inmo.logo || ""
                                                                    :
                                                                    logo404
                                                            }
                                                            alt='Inmo'
                                                            className={style.ImagenInmobiliarias}
                                                            loader={imageLoader}
                                                        />
                                                    </div>
                                                )
                                            })
                                            }
                                        </>
                                        : <span>No hay inmobiliarias</span>
                                }
                            </>

                        }
                    </div>
                </div>
            </div>
            <ButtonWsp />
        </div>
    )
}