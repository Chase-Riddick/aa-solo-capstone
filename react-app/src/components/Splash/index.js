import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Map from './Map/Map';
// import CreateCatchModal from '../CreateUpdateCatch/CreateCatch/CreateCatchModal';
// import CreateCatchForm from '../CreateUpdateCatch/CreateCatch';

import './splash.css'


export default function SplashPage () {
    const key = useSelector(state => state.map.mapAPIKey)
    const sessionUser = useSelector(state => state.session.user);

    return (
        <div className='splash-page-container'>
            <div className='title-heading'>
            <div><h1 className='title'>Local Catch</h1></div>
            <div><h3 className='subtitle'>Share your catches,  find fishes, be a part of a community.</h3></div>
            <div className='splash-actions'>
            <Map apiKey={key}/>
            <div className='subtitle'>or</div>
            {sessionUser &&
            <NavLink to='/share' exact={true} activeClassName='active'>
            <div className='add-icon-div'>
              <i className="fa-solid fa-circle-plus create-catch-icon"></i>
              </div>
            </NavLink>}
            {!sessionUser &&
            <div className='add-icon-div'>
            <i class="fa-solid fa-circle-plus create-catch-icon"></i>
            </div>
            }
            </div>
            </div>
        </div>
    )
}