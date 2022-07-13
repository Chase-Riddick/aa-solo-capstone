import './splash.css'
import React, { useState } from 'react';
import SearchBar from './SearchBar';

export default function SplashPage () {
    const [value, onChange] = useState(new Date());
    const currentDate = new Date();
    let oneWeekAgo = new Date();
    oneWeekAgo.setDate(currentDate.getDate() - 6);
    console.log(oneWeekAgo.getHours())

    return (
        <div className='splash-page-container'>
            <div className='title-heading'>
            <div><h1 className='title'>Local Catch</h1></div>
            <div><h3 className='subtitle'>Share your catches,  find fishes, be a part of a community.</h3></div>
            <SearchBar/>
            </div>
            {/* <div className='fish'>
            </div> */}
        </div>
    )
}