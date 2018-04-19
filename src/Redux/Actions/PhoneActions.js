import {ADD, DELETE, EDIT, UPDATE} from "./ActionTypes";

export const createAddAction = (phone) => {
    return {type: ADD, data: phone}
}

export const createDeleteAction = index => {
    return {type: DELETE, data: index}
}

export const createEditAction = index => {
    return {type: EDIT, data: index}
}

export const createUpdateAction = (index, phone) => {
    return {type: UPDATE, data: {index: index, phone: phone}}
}
