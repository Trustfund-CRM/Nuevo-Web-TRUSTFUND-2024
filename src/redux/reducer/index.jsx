import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import reducerInfoGarantia from "./reducerInfoGarantia";


const rootReducer = combineReducers({
    routing: routerReducer,
    reducerInfoGarantia:reducerInfoGarantia,

    })
    export default rootReducer;