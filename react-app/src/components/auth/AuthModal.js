import React, { useState } from 'react';

import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

export default function AuthModal ({ authType }) {
    const [showSignUpModal, setShowSignUpModal] = useState(false)
    const [showLoginModal, setShowLoginModal] = useState(false)
    return (
        <div>
        {authType && authType === 'login' &&
        <button className='button' onClick={() => setShowLoginModal(true)}>Login</button>}
        {showLoginModal && (
            <Modal onClose={() => setShowLoginModal(false)}>
                <LoginForm setShowLoginModal={setShowLoginModal}/>
            </Modal>
        )}
        {authType && authType === 'signup' &&
        <button className='button' onClick={() => setShowSignUpModal(true)}>Sign Up</button>}
        {showSignUpModal && (
            <Modal onClose={() => setShowSignUpModal(false)}>
                <SignUpForm setShowSignUpModal={setShowSignUpModal}/>
            </Modal>
        )}
        </div>
    )
}