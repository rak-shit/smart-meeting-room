import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Buildings, meetingRooms, Meetings } from '../data/data'

function Information() {
    const [roomsTotal, setRooms] = useState(0)
    const [freeRooms, setFreeRooms] = useState(0)
    const [totalMeetings, setTotalMeetings] = useState(0)
    const [onGoingMeetings, setOnGoingMeetings] = useState(0)

    function checkIfRoomFree(date, startTime, endTime) {

        const presentDateAndTime = new Date()
        const year = presentDateAndTime.getFullYear()
        let month = presentDateAndTime.getMonth() + 1
        const day = presentDateAndTime.getDate()
        const hour = presentDateAndTime.getHours()
        const minutes = presentDateAndTime.getMinutes()

        month = month < 10 ? `0${month}` : month

        const argDate = date.split('/')

        const timeStart = startTime.split(':')
        const timeEnd = endTime.split(':')

        if (year.toString() === argDate[2] && (month).toString() === argDate[1] && day.toString() === argDate[0] && (timeStart[0] < hour.toString() || (timeStart[0] === hour.toString() && timeStart[1] <= minutes.toString())) && (timeEnd[0] > hour.toString() || (timeEnd[0] === hour.toString() && timeEnd[1] >= minutes.toString()))) {
            return false
        }

        return true

    }

    useEffect(() => {
        setFreeRooms(0)
        setOnGoingMeetings(0)
        setRooms(meetingRooms.length)
        meetingRooms.map((room) => {
            let roomCount = 0
            room.meetings.map((meeting) => {
                if (checkIfRoomFree(meeting.date, meeting.startTime, meeting.endTime)) {
                    roomCount += 1
                }
                return 0
            })
            if (roomCount === room.meetings.length) {
                setFreeRooms(freeRooms => freeRooms + 1)
            }
            return 0
        })
        setTotalMeetings(Meetings.length)

        Meetings.map((meeting) => {
            if (!checkIfRoomFree(meeting.date, meeting.startTime, meeting.endTime)) {
                setOnGoingMeetings((no) => no + 1)
            }
            return 0
        })
    }, [])
    return (
        <div>
            <div>
                <div>Buildings: Total {Buildings.length}</div>
            </div>
            <div>
                <div>Rooms: Total {roomsTotal}</div>
                <div>Free Rooms: Total {freeRooms}</div>
            </div>
            <div>
                <div>Meetings: Total {totalMeetings}</div>
                <div>Ongoing Meetings: {onGoingMeetings}</div>
            </div>
            <button><Link to={'/add'} style={{ textDecoration: 'none' }}>Create Meeting</Link></button>
        </div>
    )
}

export default Information