import {EDIT, UPDATE} from "../Actions/ActionTypes";

export default (state = null, action) => {
    switch (action.type) {
        case EDIT:
            return action.data
        case UPDATE:
            return null
        default:
            return state
    }
}