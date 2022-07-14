import React, { useState } from 'react';

import { Modal } from '../../../context/Modal';
import CreateCatchForm from '.';

export default function CreateCatchModal () {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
        <button className='button teal' onClick={() => setShowModal(true)}>Share a New Catch</button>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <CreateCatchForm setShowModal={setShowModal}/>
            </Modal>
        )}
        </>
    )
}