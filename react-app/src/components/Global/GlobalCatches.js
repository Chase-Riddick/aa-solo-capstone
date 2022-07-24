import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DisplayCatchesCollection from '../DisplayCatchesCollection';
// import '../index.css'
import { NavLink } from 'react-router-dom';


export default function GlobalCatches () {
  const sessionUser = useSelector(state => state.session.user);
  const catches = Object.values(useSelector(state => state.catches));

  return (
    <div className='my-catches-page'>
      <div className="transistion-bar">aa</div>
      <div className='my-catches-header'>
        <div className="section-title my-catches">Recent Catches Across World:</div>
        </div>

    <DisplayCatchesCollection page={'global'} catches={catches} />
    </div>
  );
}
