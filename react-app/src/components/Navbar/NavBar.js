
import React from 'react';
import { NavLink } from 'react-router-dom';

import LogoutButton from '../auth/LogoutButton';
import AuthModal from '../auth/AuthModal';
import './navbar.css'

const NavBar = () => {
  return (
    <nav className='navbar'>

        <div>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </div>
        <div>
          <AuthModal authType={'login'} />
        </div>
        <div>
        <AuthModal authType={'signup'} />
        </div>
        <div>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </div>
        <div>
          <LogoutButton />
        </div>

    </nav>
  );
}

export default NavBar;
