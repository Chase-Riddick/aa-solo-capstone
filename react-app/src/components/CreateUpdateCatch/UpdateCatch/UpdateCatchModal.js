import React, { useState } from 'react';

import { Modal } from '../../../context/Modal';
import { useLanguageContext } from '../../../context/LanguageContext';
import UpdateCatchForm from '.';

export default function UpdateCatchModal ({indivCatch}) {
    const { language, setLanguage, English, Chinese } = useLanguageContext();
    const [showModal, setShowModal] = useState(false)

    const showModalOperaton = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setShowModal(true);
    }
    return (
        <>
        <button className='button salmon' onClick={showModalOperaton}>{language && language === 'English' ? English.UpdateDetails : Chinese.UpdateDetails}</button>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <UpdateCatchForm indivCatch={indivCatch} setShowModal={setShowModal}/>
            </Modal>
        )}
        </>
    )
}
