import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

const LoginForm = ({setShowLoginModal, setShowSignUpModal}) => {
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
      <h1 className='section-title'>Login</h1>
      <div>

        {errors.length > 0 && <ul className='errors'>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>}
      </div>

      <div className='table-row-required'>
      <h5>Required *</h5>
    </div>


    <div className='table-row'>
      <div className='table-row-label-block'>
      <h5 className='table-row-label'>Email </h5>
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
      <h5 className='table-row-label'>Password </h5>
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
        <button className='button teal' type='submit'>Login</button>
        <button className='button teal' onClick={onLoginDemo}>Demo User</button>
        <button className='button teal' onClick={handleSwitch}>Don't have an account? Sign Up</button>
        </div>
        <div className='close-link' onClick={() => setShowLoginModal(false)}><a>No Thanks</a></div>
        </div>
      {/* </div> */}
    </form>
  );
};

export default LoginForm;
