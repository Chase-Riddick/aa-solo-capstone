import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import UpdateCatch from '.';

export default function UpdateCatchModal ({indivCatch}) {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
        <button className='button' onClick={() => setShowModal(true)}>Update Details</button>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <UpdateCatch indivCatch={indivCatch}/>
            </Modal>
        )}
        </>
    )
}
