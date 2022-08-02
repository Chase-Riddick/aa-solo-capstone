import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useLanguageContext } from '../../context/LanguageContext';
import DisplayCatchesCollection from '../DisplayCatchesCollection';
// import '../index.css'



export default function GlobalCatches () {
  const { language, setLanguage, English, Chinese } = useLanguageContext();
  const sessionUser = useSelector(state => state.session.user);
  const catches = Object.values(useSelector(state => state.catches));

  return (
    <div className='my-catches-page'>
      <div className="transistion-bar">aa</div>
      <div className='my-catches-header'>
        <div className="section-title my-catches">{language && language === 'English' ? English.RecentGlobalHeading: Chinese.RecentGlobalHeading}:</div>
        </div>

    <DisplayCatchesCollection page={'global'} catches={catches} />
    </div>
  );
}
