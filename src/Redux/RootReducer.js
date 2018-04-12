import {combineReducers} from 'redux'
import PhoneReducer from "./Reducers/PhoneReducer";

export default combineReducers({
    phone: PhoneReducer
})
