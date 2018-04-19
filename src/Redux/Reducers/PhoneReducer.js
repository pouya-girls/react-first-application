import {ADD, DELETE, UPDATE} from "../Actions/ActionTypes";

export default (state = [
    {
        firstName: 'Ali',
        surname: 'Alizadeh',
        phone: '0912123456'
    },
    {
        firstName: 'Alireza',
        surname: 'Mohammadi',
        phone: '88997766'
    }
], action) => {
    switch (action.type) {
        case ADD:
            return [...state, action.data]
        case UPDATE:
            const updatedState = [...state]
            updatedState[action.data.index] = action.data.phone
            return updatedState
        case DELETE:
            const newArray = [...state]
            newArray.splice(action.data, 1)
            return newArray
        default:
            return state
    }
}
