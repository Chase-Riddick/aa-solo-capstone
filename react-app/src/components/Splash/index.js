import './splash.css'
import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

export default function SplashPage () {
    const [value, onChange] = useState(new Date());
    const currentDate = new Date();
    let oneWeekAgo = new Date();
    oneWeekAgo.setDate(currentDate.getDate() - 6);
    console.log(oneWeekAgo.getHours())

    return (
        <div className='splash-page-container'>
            <h1>Splash Page</h1>

        </div>
    )
}