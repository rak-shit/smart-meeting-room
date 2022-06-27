import { configureStore } from '@reduxjs/toolkit'
import { addMeetingReducer } from './reducers/addMeetingReducer'

export default configureStore({
    reducer: {
        meeting: addMeetingReducer
    }
})
