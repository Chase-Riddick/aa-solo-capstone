import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DisplayCatchesCollection from './DisplayCatchesCollection';
import '../index.css'
import { NavLink } from 'react-router-dom';


function User() {
  const sessionUser = useSelector(state => state.session.user);


  const catches = Object.values(useSelector(state => state.catches)).filter(indivCatch => indivCatch['user_id'] === sessionUser.id)

  return (
    <div className='my-catches-page'>
      <div className="transistion-bar">aa</div>
      <div className='my-catches-header'>
      <div></div>
        <div className="section-title">My Catches:</div>
        <NavLink to='/share' exact={true} activeClassName='active'>
      <div><button className='button salmon'>Share a New Catch</button></div>
      </NavLink>
        </div>

    <DisplayCatchesCollection page={'mycatches'} catches={catches} />
    </div>
  );
}
export default User;
