// Placeholder to host a component
import React from 'react';
const shelterHours = [


]

const Hours = () => {
    const shelterHours = [
        { day: "Monday", open: "10:00", close: "16:00" },
        { day: "Tuesday", open: "10:00", close: "16:00" },
        { day: "Wednesday", open: "10:00", close: "16:00" },
        { day: "Thursday", open: "10:00", close: "16:00" },
        { day: "Friday", open: "10:00", close: "16:00" },
        { day: "Saturday", open: "09:00", close: "20:00" },
        { day: "Sunday", open: "09:00", close: "20:00" },
    ]
    // get the long day name and store it in a variable named today
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    // get the hours for today
    const todayHours = shelterHours.find(day => day.day === today);
    // display today and the hours in a div with an id of hours
    return (
        <div id="hours">
            <p>Today is {today}</p>
            <p>{todayHours.day} {todayHours.open} - {todayHours.close}</p>
        </div>
    )

}

export default Hours;