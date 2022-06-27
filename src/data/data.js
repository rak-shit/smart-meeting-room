export const Buildings = [
    {
        buildingName: 'Building 1',
        meetingRooms: [
            {
                name: 'Punjab',
                meetings: [
                    {
                        title: 'Interview 1',
                        date: '13/02/2022',
                        startTime: '12:00',
                        endTime: '13:00'
                    },
                    {
                        title: 'Interview 2',
                        date: '13/06/2022',
                        startTime: '12:00',
                        endTime: '13:00'
                    }
                ]
            },
            {
                name: 'Kerala',
                meetings: [
                    {
                        title: 'Interview 3',
                        date: '13/02/2022',
                        startTime: '12:00',
                        endTime: '13:00'
                    },
                    {
                        title: 'Interview 4',
                        date: '13/06/2022',
                        startTime: '12:00',
                        endTime: '13:00'
                    }
                ]
            }
        ]
    },
    {
        buildingName: 'Building 2',
        meetingRooms: [
            {
                name: 'Hyderabad',
                meetings: [
                    {
                        title: 'Gsoc Meet 1',
                        date: '13/07/2022',
                        startTime: '12:00',
                        endTime: '13:00'
                    }
                ]
            },
            {
                name: 'Mumbai',
                meetings: [
                    {
                        title: 'Gsoc 2',
                        date: '22/06/2022',
                        startTime: '17:00',
                        endTime: '22:00'
                    },
                    {
                        title: 'Gsoc 3',
                        date: '13/06/2022',
                        startTime: '12:00',
                        endTime: '13:00'
                    }
                ]
            }
        ]
    }
]

export const meetingRooms = [
    {
        name: 'Punjab',
        floor: 7,
        building: {
            name: 'Building 1'
        },
        meetings: [
            {
                title: 'Interview 1',
                date: '13/02/2022',
                startTime: '12:00',
                endTime: '13:00'
            },
            {
                title: 'Interview 2',
                date: '13/06/2022',
                startTime: '12:00',
                endTime: '13:00'
            }
        ]
    },
    {
        name: 'Kerala',
        floor: 6,
        building: {
            name: 'Building 1'
        },
        meetings: [
            {
                title: 'Interview 3',
                date: '13/02/2022',
                startTime: '12:00',
                endTime: '13:00'
            },
            {
                title: 'Interview 4',
                date: '13/06/2022',
                startTime: '12:00',
                endTime: '13:00'
            }
        ]
    },
    {
        name: 'Hyderabad',
        floor: 1,
        building: {
            name: 'Building 2'
        },
        meetings: [
            {
                title: 'Gsoc Meet 1',
                date: '13/07/2022',
                startTime: '12:00',
                endTime: '13:00'
            }
        ]
    },
    {
        name: 'Mumbai',
        floor: 2,
        building: {
            name: 'Building 2'
        },
        meetings: [
            {
                title: 'Gsoc 2',
                date: '22/06/2022',
                startTime: '17:00',
                endTime: '22:00'
            },
            {
                title: 'Gsoc 3',
                date: '13/06/2022',
                startTime: '12:00',
                endTime: '13:00'
            }
        ]
    }
]

export const Meetings = [
    {
        title: 'Gsoc 2',
        date: '22/06/2022',
        startTime: '17:00',
        endTime: '22:00'
    },
    {
        title: 'Gsoc 3',
        date: '13/06/2022',
        startTime: '12:00',
        endTime: '13:00'
    },
    {
        title: 'Gsoc Meet 1',
        date: '13/07/2022',
        startTime: '12:00',
        endTime: '13:00'
    },
    {
        title: 'Interview 3',
        date: '13/02/2022',
        startTime: '12:00',
        endTime: '13:00'
    },
    {
        title: 'Interview 4',
        date: '13/06/2022',
        startTime: '12:00',
        endTime: '13:00'
    },
    {
        title: 'Interview 1',
        date: '13/02/2022',
        startTime: '12:00',
        endTime: '13:00'
    },
    {
        title: 'Interview 2',
        date: '13/06/2022',
        startTime: '12:00',
        endTime: '13:00'
    }
]