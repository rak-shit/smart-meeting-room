import { SET_DATE, SET_START_TIME, SET_END_TIME } from "./types"

export const setDate = (date) => {
    return {
        type: SET_DATE,
        payload: date
    }
}
export const setStartTime = (time) => {
    return {
        type: SET_START_TIME,
        payload: time
    }
}
export const setEndTime = (time) => {
    return {
        type: SET_END_TIME,
        payload: time
    }
}