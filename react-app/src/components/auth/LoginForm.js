import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import { useLanguageContext } from '../../context/LanguageContext';

const LoginForm = ({setShowLoginModal, setShowSignUpModal}) => {
  const { language, setLanguage, English, Chinese } = useLanguageContext();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      let modified_error_messages = []
            data.forEach(error => {
                let splitError = error.split(": ")
                modified_error_messages.push(splitError[1])
            });
      setErrors(modified_error_messages)
    } else{
      setShowLoginModal(false)
    }
  };

  const onLoginDemo = async (e) => {
    e.preventDefault();
    const data = await dispatch(login('demo@aa.io','password'));
    if (data) {

      let modified_error_messages = []
            data.forEach(error => {
                let splitError = error.split(": ")
                modified_error_messages.push(splitError[1])
            });
      setErrors(modified_error_messages)
    } else{
      setShowLoginModal(false)
    }
  };

  const handleSwitch = (e) => {
    setShowLoginModal(false)
    setShowSignUpModal(true)
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    setShowLoginModal(false)
  }

  return (
    <form onSubmit={onLogin}>
      <div className='top-x-space'><i onClick={() => {setShowLoginModal(false)}} className="fa-solid fa-xmark"></i></div>
      <h1 className='section-title'>{language && language === 'English' ? English.Login : Chinese.Login}</h1>
      <div>

        {errors.length > 0 && <ul className='errors'>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>}
      </div>

      <div className='table-row-required'>
      <h5>{language && language === 'English' ? English.Required : Chinese.Required} *</h5>
    </div>


    <div className='table-row'>
      <div className='table-row-label-block'>
      <h5 className='table-row-label'>{language && language === 'English' ? English.Email : Chinese.Email} </h5>
      <p className='required'>*</p>
      </div>
        <input
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
      </div>

      <div className='table-row'>
      <div className='table-row-label-block'>
      <h5 className='table-row-label'>{language && language === 'English' ? English.Password : Chinese.Password} </h5>
      <p className='required'>*</p>
      </div>
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
        </div>

        <div className='buttom-row-buttons'>
          <div className='buttom-row-buttons-main' >
        <button className='button teal' type='submit'>{language && language === 'English' ? English.Submit : Chinese.Submit}</button>
        <button className='button teal' onClick={onLoginDemo}>{language && language === 'English' ? English.DemoUser : Chinese.DemoUser}</button>
        <button className='button teal' onClick={handleSwitch}>{language && language === 'English' ? English.DontHaveAccount : Chinese.DontHaveAccount} {language && language === 'English' ? English.SignUp : Chinese.SignUp}</button>
        </div>
        <div className='close-link' onClick={() => setShowLoginModal(false)}><a>{language && language === 'English' ? English.NoThanks : Chinese.NoThanks}</a></div>
        </div>
      {/* </div> */}
    </form>
  );
};

export default LoginForm;
