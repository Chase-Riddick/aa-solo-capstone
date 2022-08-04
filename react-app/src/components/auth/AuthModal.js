import React, { useState } from 'react';
import { useLanguageContext } from '../../context/LanguageContext';
import { AthModal } from '../../context/AthModal';
import './auth.css';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

export default function AuthModal ({ authType }) {
    const { language, setLanguage, English, Chinese } = useLanguageContext();
    const [showSignUpModal, setShowSignUpModal] = useState(false)
    const [showLoginModal, setShowLoginModal] = useState(false)
    return (
        <div>
        {authType && authType === 'not-logged-in-share-catch' && language &&
        <button className='button salmon' onClick={() => setShowLoginModal(true)}>{language === 'English' ? English.ShareCatch : Chinese.ShareCatch} <i class="fa-solid fa-circle-plus"></i></button>}
            {showLoginModal && (<AthModal  className='auth-modal' onClose={() => setShowLoginModal(false)}>
                <LoginForm setShowSignUpModal={setShowSignUpModal} setShowLoginModal={setShowLoginModal}/>
            </AthModal >
        )}

        {authType && authType === 'not-logged-in-add-subpost' && language &&
        <button className='button salmon add-subpost' onClick={() => setShowLoginModal(true)}>{language === 'English' ? English.AddToTheDiscussion : Chinese.AddToTheDiscussion}</button>}
            {showLoginModal && (<AthModal  className='auth-modal' onClose={() => setShowLoginModal(false)}>
                <LoginForm setShowSignUpModal={setShowSignUpModal} setShowLoginModal={setShowLoginModal}/>
            </AthModal >
        )}


        {authType && authType === 'login' && language &&
        <button className='button teal' onClick={() => setShowLoginModal(true)}>{language === 'English' ? English.Login : Chinese.Login}</button>}
        {showLoginModal && (
            <AthModal  className='auth-modal' onClose={() => setShowLoginModal(false)}>
                <LoginForm setShowSignUpModal={setShowSignUpModal} setShowLoginModal={setShowLoginModal}/>
            </AthModal >
        )}

        {authType && authType === 'signup' && language &&
        <button className='button teal' onClick={() => setShowSignUpModal(true)}>{language === 'English' ? English.SignUp : Chinese.SignUp}</button>}
        {showSignUpModal && (
            <AthModal className='auth-modal' onClose={() => setShowSignUpModal(false)}>
                <SignUpForm setShowSignUpModal={setShowSignUpModal} setShowLoginModal={setShowLoginModal}/>
            </AthModal >
        )}
        </div>
    )
}