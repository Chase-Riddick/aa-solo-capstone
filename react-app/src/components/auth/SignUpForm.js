import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = ({setShowLoginModal, setShowSignUpModal}) => {
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
      <h1 className='section-title'>Sign Up</h1>
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
      <h5 className='table-row-label'>Username </h5>
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
      <h5 className='table-row-label'>Email </h5>
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
      <h5 className='table-row-label'>Password </h5>
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
      <h5 className='table-row-label'> Repeat Password </h5>
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
      <button className='button teal' type='submit'> Submit Sign Up</button>
      <button className='button teal' onClick={handleSwitch}>Already have an account? Login</button>
      </div>
      <div className='close-link' onClick={() => setShowSignUpModal(false)}><a>No Thanks</a></div>
      </div>
    </form>
  );
};

export default SignUpForm;
