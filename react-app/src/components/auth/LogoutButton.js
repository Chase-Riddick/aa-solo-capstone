import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { useHistory } from 'react-router-dom';
import { useLanguageContext } from '../../context/LanguageContext';

const LogoutButton = () => {
  const { language, setLanguage, English, Chinese } = useLanguageContext();
  const dispatch = useDispatch()
  const history = useHistory();
  const onLogout = async (e) => {
    await dispatch(logout());
    history.push('/')
  };

  return (<div>{language && <button className='button teal' onClick={onLogout}>{language === 'English' ? English.Logout : Chinese.Logout}</button>}</div>);
};

export default LogoutButton;
