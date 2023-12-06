import { actionTypes } from "../Constantes/actionsTypes.jsx";
import axios from "axios";

const apiUrl = process.env.REACT_APP_PRODUCTION_API_ULR
// console.log(apiUrl)
// const apiUrl = process.env.REACT_APP_LOCAL_API_URL

export const getDatosCalculador = (data) => {
    return {
        type: actionTypes.GET_DATOS_CALCULADOR_PRINCIPAL,
        data
    }
}

export const setDatosCalculador = (data) => {
    return {
        type: actionTypes.SET_DATOS_CALCULADOR_PRINCIPAL,
        data
    }
}

export const setResultadoCalculador = () => {
    return {
        type: actionTypes.SET_RESULTADO_CALCULADOR,
    }
}

export const getInmobiliarias = () => async (dispatch) => {
    return await axios.get(`https://trustfundcrm.testeoenzo.online/api/inmobiliarias_adheridas`)
        .then((info) => {
            console.log(info.data)
            dispatch({ type: 'GET_INMOBILIARIAS', payload: info.data })
        })
        .catch((error) => console.log(error));
}

export const filterInmobiliarias = (payload) => {
    return {
        type: actionTypes.FILTER_INMOBILIARIAS,
        payload
    }
}