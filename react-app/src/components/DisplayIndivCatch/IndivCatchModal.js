import React, { useState } from 'react';

import { Modal } from '../../context/Modal';
import DisplayIndivCatch from '.';

export default function DisplayIndivCatchModal ({ indivCatch, user }) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
        <button className='button teal' onClick={() => setShowModal(true)}>Show Details</button>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <DisplayIndivCatch indivCatch={indivCatch} user={user}/>
            </Modal>
        )}
        </>
    )
}