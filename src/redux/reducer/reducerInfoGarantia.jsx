import { actionTypes } from "../Constantes/actionsTypes";
const initialState = {
    setDatosCalculador: {
        /*
        Duracion: "48 MESES",
        resultado: "288.000",
        resultado2: "48.000",
        resultado3: "96.800",
        tipoDePropiedad: "VIVIENDA",
        valorAlquiler: "80.000",
        valorExpensas: "20.000"
        */
    },
    inmobiliarias: [],
  }

function reducerInfoGarantia (state = initialState, action){
    switch(action.type){
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
            /*
        case actionTypes.FILTER_BY_PROVINCIAS:
            const arrInmo = state.inmobiliarias
            const inmoFiltradas = action.payload === 'All'?
            arrInmo:
            arrInmo.filter(inmo => inmo.Provincia === action.payload)
            console.log(inmoFiltradas)
            return {
                ...state,
                inmobiliarias: inmoFiltradas
            }
        case actionTypes.FILTER_BY_LOCALIDADES:
            const inmobiliarias = state.inmobiliarias
            const statusFiltered = action.payload === 'All'?
            inmobiliarias:
            inmobiliarias.filter(inmo => inmo.localidad === action.payload)
            console.log(statusFiltered)
            return {
                ...state,
                inmobiliarias: statusFiltered
            }
            */
            case actionTypes.FILTER_INMOBILIARIAS:
                console.log(action.payload)
                const inmobiliarias = state.inmobiliarias
                const statusFiltered = action.payload === 'All'?
                inmobiliarias:
                inmobiliarias.filter(inmo => inmo.Provincia === action.payload.provincia && inmo.localidad === action.payload.localidad)
                console.log(statusFiltered)
                return {
                    ...state,
                    inmobiliarias: statusFiltered
                }
            default:
                return state
    }
}

export default reducerInfoGarantia;