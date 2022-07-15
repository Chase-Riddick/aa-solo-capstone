import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DisplayCatchesCollection from './DisplayCatchesCollection';
import '../index.css'

function User() {
  const sessionUser = useSelector(state => state.session.user);


  const catches = Object.values(useSelector(state => state.catches)).filter(indivCatch => indivCatch['user_id'] === sessionUser.id)

  return (
    <div className='my-catches-page'>
    <DisplayCatchesCollection page={'mycatches'} catches={catches} />
    </div>
  );
}
export default User;
