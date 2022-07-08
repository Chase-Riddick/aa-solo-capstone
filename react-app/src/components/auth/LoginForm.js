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
      console.log(data)
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
      console.log(data)
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
      <div>

        {errors.length > 0 && <ul className='errors'>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>}

      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
        <button className='button' type='submit'>Login</button>
        <button className='button' onClick={onLoginDemo}>Demo User</button>
        <button className='button' onClick={handleSwitch}>Sign Up</button>
      </div>
    </form>
  );
};

export default LoginForm;
