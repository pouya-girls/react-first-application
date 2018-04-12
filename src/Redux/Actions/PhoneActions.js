import {ADD} from "./ActionTypes";

export const createAddAction = (phone) => {
    return {type: ADD, data: phone}
}