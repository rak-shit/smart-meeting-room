import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Buildings, meetingRooms, Meetings } from '../data/data'
import { useNavigate } from "react-router-dom"

function SelectBuilding() {
    const meeting = useSelector((state) => state.meeting)
    const [roomsFree, setRoomsFree] = useState([])
    const [selectedRoom, setRoom] = useState(undefined)

    const history = useNavigate()

    function IsOverlap(a, b) {
        const getMinutes = s => {
            const p = s.split(':').map(Number)
            return p[0] * 60 + p[1]
         }
         return getMinutes(a.end) > getMinutes(b.start) && getMinutes(b.end) > getMinutes(a.start)
    }

    function checkIfMeetingPossible(date, startTime, endTime) {
        const meetingDate = meeting.date.split('/')
        const availDate = date.split('/')

        const a = {
            start: meeting.startTime,
            end: meeting.endTime
        }

        const b = {
            start: startTime,
            end: endTime
        }

        if (meetingDate[0] === availDate[0] && meetingDate[1] === availDate[1] && meetingDate[2] === availDate[2] && IsOverlap(a, b)) {
            return false
        }

        return true
    }

    useEffect(() => {
        setRoomsFree([])
        meetingRooms.map((room) => {
            let meetingCount = 0
            room.meetings.map((meeting) => {
                if (checkIfMeetingPossible(meeting.date, meeting.startTime, meeting.endTime)) {
                    meetingCount = meetingCount + 1
                }
                return 0
            })
            if (meetingCount === room.meetings.length) {
                setRoomsFree((rooms) => [...rooms, room])
            }
            return 0
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function selectRoom(room) {
        setRoom(room)
    }

    function handleSave() {
        const newMeeting = {
            title: 'New Meeting',
            date: meeting.date,
            startTime: meeting.startTime,
            endTime: meeting.endTime
        }
        Meetings.push(newMeeting)
        meetingRooms.map((room) => {
            if (room.name === selectedRoom.name) {
                room.meetings.push(newMeeting)
            }
            return 0
        })
        Buildings.map((building) => {
            building.meetingRooms.map((room) => {
                if (room.name === selectedRoom.name) {
                    room.meetings.push(newMeeting)
                }
                return 0
            })
            return 0
        })
        history('/')
    }

    return (
        <div>
            <h1>Select Building</h1>
            {
                roomsFree.map((room) => (
                    <div style={{ padding: '1rem', cursor: 'pointer' }} onClick={() => selectRoom(room)}>
                        <div>Name: {room.name}</div>
                        <div>Building: {room.building.name}</div>
                        <div>Floor: {room.floor}</div>
                    </div>
                ))
            }
            <button onClick={handleSave}>Save</button>
        </div>
    )
}

export default SelectBuilding