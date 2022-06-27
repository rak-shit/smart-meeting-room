import { SET_DATE, SET_START_TIME, SET_END_TIME } from "../actions/types"

const initialState = {
    date: '',
    startTime: '',
    endTime: ''
}

export const addMeetingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATE:
            return {
                ...state,
                date: action.payload
            }
        case SET_START_TIME:
            return {
                ...state,
                startTime: action.payload
            }
        case SET_END_TIME:
            return {
                ...state,
                endTime: action.payload
            }
        default:
            return state
    }
}