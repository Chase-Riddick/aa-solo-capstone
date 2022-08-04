import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import { useLanguageContext } from '../../context/LanguageContext';

const SignUpForm = ({setShowLoginModal, setShowSignUpModal}) => {
  const { language, setLanguage, English, Chinese } = useLanguageContext();
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();

    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {

        let modified_error_messages = []
          data.forEach(error => {
              let splitError = error.split(": ")
              modified_error_messages.push(splitError[1])
          });
        setErrors(modified_error_messages)
      } else {
        setShowSignUpModal(false)
      }
    } else {
      setErrors(["Your password and repeat password must match"])
    }
  };

  const handleSwitch = (e) => {
    setShowSignUpModal(false)
    setShowLoginModal(true)
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    setShowSignUpModal(false)
  }

  return (
    <form className='auth-modal' onSubmit={onSignUp}>
      <h1 className='section-title'>{language && language === 'English' ? English.SignUp : Chinese.SignUp}</h1>
      <div>
       {errors.length > 0 && <ul className='errors'>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>}
      </div>

      <div className='table-row-required'>
      <h5>{language && language === 'English' ? English.Required : Chinese.Required}  *</h5>
      </div>


      <div className='table-row'>
      <div className='table-row-label-block'>
      <h5 className='table-row-label'>{language && language === 'English' ? English.Username : Chinese.Username} </h5>
      <p className='required'>*</p>
      </div>
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
          maxLength={20}
        ></input>
      </div>


      <div className='table-row'>
      <div className='table-row-label-block'>
      <h5 className='table-row-label'>{language && language === 'English' ? English.Email : Chinese.Email} </h5>
      <p className='required'>*</p>
      </div>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
          maxLength={50}
        ></input>
      </div>


      <div className='table-row'>
      <div className='table-row-label-block'>
      <h5 className='table-row-label'>{language && language === 'English' ? English.Password : Chinese.Password}</h5>
      <p className='required'>*</p>
      </div>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>


      <div className='table-row'>
      <div className='table-row-label-block'>
      <h5 className='table-row-label'>{language && language === 'English' ? English.RepeatPassword : Chinese.RepeatPassword} </h5>
      <p className='required'>*</p>
      </div>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>

      <div className='buttom-row-buttons'>
      <div className='buttom-row-buttons-main' >
      <button className='button teal' type='submit'>{language && language === 'English' ? English.Submit : Chinese.Submit}</button>
      <button className='button teal' onClick={handleSwitch}>{language && language === 'English' ? English.AlreadyHaveAccount : Chinese.AlreadyHaveAccount} {language && language === 'English' ? English.Login : Chinese.Login}</button>
      </div>
      <div className='close-link' onClick={() => setShowSignUpModal(false)}><a>{language && language === 'English' ? English.NoThanks : Chinese.NoThanks}</a></div>
      </div>
    </form>
  );
};

export default SignUpForm;
