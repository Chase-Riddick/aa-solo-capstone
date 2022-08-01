
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
      <NavLink to='/' exact={true} activeClassName='active' className='showable'>
      <div className='showable'></div>
      </NavLink>

      <div>
      <NavLink to='/about' exact={true} activeClassName='active'>
        <button className='button teal'>About</button>
        </NavLink>
        <NavLink to={'/global'} exact={true} activeClassName='active'>
        <button className='button teal'>Global Feed</button>
        </NavLink>
      </div>

      <NavLink to='/' exact={true} activeClassName='active' className='hideable'>
        <div className='logo-box'>
          <div className='logo' />
          <div className='logo-text-box'>
            <h4 className='logo-text-main'>LocalCatch</h4>
            <h4 className='logo-text-sub'>Catch, Share, Catch, Enjoy.</h4>
          </div>
        </div>
        </NavLink>

        <div className='all-right-buttons'>



        {sessionUser &&
            <NavLink to='/share' exact={true} activeClassName='active'>
            <button className='button salmon'>Share a Catch <i class="fa-solid fa-circle-plus"></i></button>
            </NavLink>}
            {!sessionUser &&
            <div>
                <AuthModal authType={'not-logged-in'} />
            </div>
            }


        {sessionUser &&
        <>
        <div className='entry-buttons'>
        <NavLink to={'/mycatches'} exact={true} activeClassName='active'>
        <button className='button teal'>My Catches</button>
        </NavLink>
        <LogoutButton />
        </div>
        </>
        }

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


        </div>

    </nav>
  );
}

export default NavBar;
