import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import SearchBar from './SearchBar';
import CreateCatchModal from '../CreateUpdateCatch/CreateCatch/CreateCatchModal';
import CreateCatchForm from '../CreateUpdateCatch/CreateCatch';

import './splash.css'


export default function SplashPage () {
    const sessionUser = useSelector(state => state.session.user);

    return (
        <div className='splash-page-container'>
            <div className='title-heading'>
            <div><h1 className='title'>Local Catch</h1></div>
            <div><h3 className='subtitle'>Share your catches,  find fishes, be a part of a community.</h3></div>
            <div><SearchBar/>
            <NavLink to='/share' exact={true} activeClassName='active'>
            <button className='button'>Share a Catch</button>
            </NavLink>
            </div>
            </div>
        </div>
    )
}