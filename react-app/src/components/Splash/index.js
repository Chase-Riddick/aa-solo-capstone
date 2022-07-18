import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Map from './Map/Map';
import AuthModal from '../auth/AuthModal';
// import CreateCatchModal from '../CreateUpdateCatch/CreateCatch/CreateCatchModal';
// import CreateCatchForm from '../CreateUpdateCatch/CreateCatch';

import './splash.css'


export default function SplashPage () {
    const key = useSelector(state => state.map.mapAPIKey)
    const sessionUser = useSelector(state => state.session.user);

    return (
        <div className='splash-page-container'>
            <div className='title-heading'>
            <div><h1 className='title'>Fishing is about much more than fish.</h1></div>
            <div><h3 className='subtitle-1'>It's about the simplicity, the community, and yes, <b>the boasting</b>.</h3></div>
            <div className='subtitle-line-2'><h3 className='subtitle-2'><b>See where</b> the whoppers are bitin', and find your next trophy catch.</h3></div>
            <div className='splash-actions'>
            <Map apiKey={key}/>
            {sessionUser &&
            <NavLink to='/share' exact={true} activeClassName='active'>
            <div className='add-icon-div'>
              <i className="fa-solid fa-circle-plus create-catch-icon"></i>
              </div>
            </NavLink>}
            {!sessionUser &&
            <div className='add-icon-div'>
                <AuthModal authType={'not-logged-in'} />
            </div>
            }
            </div>
            </div>
        </div>
    )
}