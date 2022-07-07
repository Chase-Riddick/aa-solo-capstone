import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import UpdateCatchForm from '.';

export default function UpdateCatchModal ({indivCatch}) {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
        <button className='button' onClick={() => setShowModal(true)}>Update Details</button>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <UpdateCatchForm indivCatch={indivCatch} setShowModal={setShowModal}/>
            </Modal>
        )}
        </>
    )
}
