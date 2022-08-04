
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLanguageContext } from '../../context/LanguageContext';

import LogoutButton from '../auth/LogoutButton';
import AuthModal from '../auth/AuthModal';
import './navbar.css'

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);
  const { language, setLanguage, English, Chinese } = useLanguageContext();
  if (language) {
    console.log(language)
  return (
    <nav className='navbar'>

      <NavLink to='/' exact={true} activeClassName='active' className='showable'>
      <div className='showable'></div>
      </NavLink>

      <div>
      <NavLink to='/about' exact={true} activeClassName='active'>
        <button className='button teal'>{language === 'English' ? English.About : Chinese.About}</button>
        </NavLink>
        <NavLink to={'/global'} exact={true} activeClassName='active'>
        <button className='button teal'>{language === 'English' ? English.GlobalFeed : Chinese.GlobalFeed}</button>
        </NavLink>
      </div>

      <NavLink to='/' exact={true} activeClassName='active' className='hideable'>
        <div className='logo-box'>
          <div className='logo' />
          <div className='logo-text-box'>
            <h4 className='logo-text-main'>LocalCatch<span className='logo-chinese'>鱼钩</span></h4>
            <h4 className='logo-text-sub'>Catch, Share, Catch, Enjoy.</h4>
          </div>
        </div>
        </NavLink>

        <div className='all-right-buttons'>



        {sessionUser &&
            <NavLink to='/share' exact={true} activeClassName='active'>
            <button className='button salmon'>{language === 'English' ? English.ShareCatch : Chinese.ShareCatch} <i class="fa-solid fa-circle-plus"></i></button>
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
        <button className='button teal'>{language === 'English' ? English.MyCatches: Chinese.MyCatches}</button>
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
        <div className='lang-options teal'>
        <a className='lang' onClick={()=>setLanguage('English')}>EN</a>
        /
        <a className='lang' onClick={()=>setLanguage('Chinese')}>中文</a>
        </div>
        </div>

    </nav>
  )}
}

export default NavBar;
