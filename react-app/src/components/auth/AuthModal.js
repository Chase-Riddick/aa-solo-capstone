import React, { useState } from 'react';

import { AthModal } from '../../context/AthModal';
import './auth.css';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

export default function AuthModal ({ authType }) {
    const [showSignUpModal, setShowSignUpModal] = useState(false)
    const [showLoginModal, setShowLoginModal] = useState(false)
    return (
        <div>
        {authType && authType === 'not-logged-in' &&
        <button className='button salmon' onClick={() => setShowLoginModal(true)}>Share a Catch <i class="fa-solid fa-circle-plus"></i></button>}
            {showLoginModal && (<AthModal  className='auth-modal' onClose={() => setShowLoginModal(false)}>
                <LoginForm setShowSignUpModal={setShowSignUpModal} setShowLoginModal={setShowLoginModal}/>
            </AthModal >
        )}


        {authType && authType === 'login' &&
        <button className='button teal' onClick={() => setShowLoginModal(true)}>Login</button>}
        {showLoginModal && (
            <AthModal  className='auth-modal' onClose={() => setShowLoginModal(false)}>
                <LoginForm setShowSignUpModal={setShowSignUpModal} setShowLoginModal={setShowLoginModal}/>
            </AthModal >
        )}

        {authType && authType === 'signup' &&
        <button className='button teal' onClick={() => setShowSignUpModal(true)}>Sign Up</button>}
        {showSignUpModal && (
            <AthModal className='auth-modal' onClose={() => setShowSignUpModal(false)}>
                <SignUpForm setShowSignUpModal={setShowSignUpModal} setShowLoginModal={setShowLoginModal}/>
            </AthModal >
        )}
        </div>
    )
}