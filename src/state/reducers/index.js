import { orderReducer } from "./customer.reducer";
import combineReducers from 'redux'

const unionReducer = combineReducers ({
    orderReducer,

    corporate: orderReducer
})

export default unionReducer;