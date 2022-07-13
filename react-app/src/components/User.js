import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DisplayCatchesCollection from './DisplayCatchesCollection';

function User() {
  const { userId }  = useParams();
  console.log("********")
  console.log(userId)
  const catches = Object.values(useSelector(state => state.catches)).filter(indivCatch => indivCatch['user_id'] === Number(userId))
  console.log(catches)
  // const [user, setUser] = useState({});

  // let userCatches = [ca
  // catches.map((catch) => {
  //   catc += 1;
  // })

  // useEffect(() => {
  //   if (!userId) {
  //     return;
  //   }
  //   (async () => {
  //     const response = await fetch(`/api/users/${userId}`);
  //     const user = await response.json();
  //     setUser(user);
  //   })();
  // }, [userId]);

  // if (!user) {
  //   return null;
  // }

  return (
    <DisplayCatchesCollection catches={catches} />
  );
}
export default User;
