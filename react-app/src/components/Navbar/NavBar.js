
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
      <NavLink to='/about' exact={true} activeClassName='active'>
        <button className='button teal'>About</button>
        </NavLink>
      </div>

      <NavLink to='/' exact={true} activeClassName='active'>
        <div className='logo-box'>
          <div className='logo' />
          <div className='logo-text-box'>
            <h4 className='logo-text-main'>LocalCatch</h4>
            <h4 className='logo-text-sub'>A Lewis County Share Platform</h4>
          </div>
        </div>
        </NavLink>

        {!sessionUser &&
        <>
        <div className='entry-buttons'>
        <div>
         <AuthModal authType={'login'} />
         </div>
         <div>
         <AuthModal authType={'signup'} />
         </div>
         </div>
         </>
        }

        {sessionUser &&
        <>
        <div className='entry-buttons'>
        <NavLink to={`/users/${sessionUser.id}`} exact={true} activeClassName='active'>
        <button className='button teal'>My Catches</button>
        </NavLink>
        <LogoutButton />
        </div>
        </>
        }

    </nav>
  );
}

export default NavBar;
