import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setDate, setEndTime, setStartTime } from '../actions/addMeetingAction'

function AddMeeting() {
    const dispatch = useDispatch()

    function handleDate(event) {
        dispatch(setDate(event.target.value))
    }

    function handleStartTime(event) {
        dispatch(setStartTime(event.target.value))
    }

    function handleEndTime(event) {
        dispatch(setEndTime(event.target.value))
    }

    return (
        <div>
            Add Meeting
            <div>
                Date
                <input onChange={handleDate} type="text" />
            </div>
            <div>
                Start Time
                <input onChange={handleStartTime} type="text" />
            </div>
            <div>
                End Time
                <input onChange={handleEndTime} type="text" />
            </div>
            <button><Link style={{ textDecoration: 'none' }} to="/building">Select Building</Link></button>
        </div>
    )
}

export default AddMeeting