
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LogoutButton from '../auth/LogoutButton';
import AuthModal from '../auth/AuthModal';
import './navbar.css'

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);
  return (
    <nav className='navbar'>

        <div>
          <NavLink to='/' exact={true} activeClassName='active'>
            <button className='button'>Home</button>
          </NavLink>
        </div>

        {!sessionUser &&
        <>
        <div>
         <AuthModal authType={'login'} />
         </div>
         <div>
         <AuthModal authType={'signup'} />
         </div>
         </>
        }

        {sessionUser && <LogoutButton />}

    </nav>
  );
}

export default NavBar;
