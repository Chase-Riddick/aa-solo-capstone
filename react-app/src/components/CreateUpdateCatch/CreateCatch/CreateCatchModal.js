import React, { useState } from 'react';

import { Modal } from '../../../context/Modal';
import CreateCatch from '.';

export default function CreateCatchModal () {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
        <button className='button' onClick={() => setShowModal(true)}>Share a New Catch</button>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <CreateCatch />
            </Modal>
        )}
        </>
    )
}