import {ADD, DELETE, UPDATE} from "../Actions/ActionTypes";

export default (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [...state, action.data]
        case UPDATE:
        case DELETE:
        default:
            return state
    }
}
