import React, { useState } from 'react';

import { Modal } from '../../../context/Modal';
import { useLanguageContext } from '../../../context/LanguageContext';
import UpdateCatchForm from '.';

export default function UpdateCatchModal ({indivCatch}) {
    const { language, setLanguage, English, Chinese } = useLanguageContext();
    const [showModal, setShowModal] = useState(false)
    return (
        <>
        <button className='button salmon' onClick={() => setShowModal(true)}>{language && language === 'English' ? English.UpdateDetails : Chinese.UpdateDetails}</button>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <UpdateCatchForm indivCatch={indivCatch} setShowModal={setShowModal}/>
            </Modal>
        )}
        </>
    )
}
