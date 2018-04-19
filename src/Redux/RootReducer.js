import {combineReducers} from 'redux'
import PhoneReducer from "./Reducers/PhoneReducer";
import EditIndexReducer from "./Reducers/EditIndexReducer";

export default combineReducers({
    phone: PhoneReducer,
    edit_index: EditIndexReducer
})
