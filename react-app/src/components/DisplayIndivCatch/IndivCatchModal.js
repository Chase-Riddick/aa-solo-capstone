import React, { useState } from 'react';


import { Modal } from '../../context/Modal';
import { useLanguageContext } from '../../context/LanguageContext';
import DisplayIndivCatch from '.';

export default function DisplayIndivCatchModal ({ indivCatch, user }) {
    const { language, setLanguage, English, Chinese } = useLanguageContext();
    const [showModal, setShowModal] = useState(false)

    return (
        <>
        <button className='button teal' onClick={() => setShowModal(true)}>{language && language === 'English' ? English.ShowDetails : Chinese.ShowDetails}</button>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <DisplayIndivCatch setShowModal={setShowModal} targetCatch={indivCatch} user={user}/>
            </Modal>
        )}
        </>
    )
}