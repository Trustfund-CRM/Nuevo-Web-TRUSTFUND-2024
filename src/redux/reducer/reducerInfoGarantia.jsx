import { actionTypes } from "../Constantes/actionsTypes";
const initialState = {
    inmobiliarias: [],
    calculador: false,
    resultado: false,
}

function reducerInfoGarantia(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_DATOS_CALCULADOR_PRINCIPAL:
            console.log('entra?', action.data)
            return {
                ...state,
                setDatosCalculador: action.data
            }
        case actionTypes.GET_INMOBILIARIAS:
            return {
                ...state,
                inmobiliarias: action.payload
            }
        case actionTypes.FILTER_INMOBILIARIAS:
            console.log(action.payload)
            const inmobiliarias = state.inmobiliarias
            const statusFiltered = action.payload === 'All' ?
                inmobiliarias :
                inmobiliarias.filter(inmo => inmo.Provincia === action.payload.provincia && inmo.localidad === action.payload.localidad)
            console.log(statusFiltered)
            return {
                ...state,
                inmobiliarias: statusFiltered
            }
        case actionTypes.SET_CALCULADOR:
            return {
                ...state,
                calculador: !state.calculador
            }
        case actionTypes.SET_RESULTADO_CALCULADOR:
            return {
                ...state,
                resultado: true
            }
        default:
            return state
    }
}

export default reducerInfoGarantia;