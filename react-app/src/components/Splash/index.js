import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguageContext } from '../../context/LanguageContext';

import Map from './Map/Map';
import AuthModal from '../auth/AuthModal';
// import CreateCatchModal from '../CreateUpdateCatch/CreateCatch/CreateCatchModal';
// import CreateCatchForm from '../CreateUpdateCatch/CreateCatch';

import './splash.css'


export default function SplashPage () {
    const { language, setLanguage, English, Chinese } = useLanguageContext();
    const key = useSelector(state => state.map.mapAPIKey)
    const sessionUser = useSelector(state => state.session.user);

    return (
        <div className='splash-page-container'>
            <div className='title-heading'>
            <div><h1 className='title'>{language && language === 'English' ? English.SplashMain : Chinese.SplashMain}</h1></div>
            <div><h3 className='subtitle-1'>{language && language === 'English' ? English.SplashLine2 : Chinese.SplashLine2} <b>{language && language === 'English' ? English.SplashLine2Emphasis : Chinese.SplashLine2Emphasis}</b>.</h3></div>
            <div className='subtitle-line-2'><h3 className='subtitle-2'><b>{language && language === 'English' ? English.SplashLine3Emphasis : Chinese.SplashLine3Emphasis}</b> {language && language === 'English' ? English.SplashLine3 : Chinese.SplashLine3}</h3></div>
            <div className='splash-actions'>
            <Map apiKey={key}/>
            </div>
            </div>
        </div>
    )
}