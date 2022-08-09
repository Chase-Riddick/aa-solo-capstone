import React, { useState } from 'react';

import UpdateCatchModal from '../CreateUpdateCatch/UpdateCatch/UpdateCatchModal';
import { Modal } from '../../context/Modal';
import { useLanguageContext } from '../../context/LanguageContext';
import DisplayIndivCatch from '.';

export default function DisplayIndivCatchModal ({ indivCatch, user, users, sessionUser, page, selectedMarker, setSelectedMarker }) {
    const { language, setLanguage, English, Chinese } = useLanguageContext();
    const [showModal, setShowModal] = useState(false)

    const handleClick = (id) => {
      // setSelectedMarker(id);
      setShowModal(true);
    }

    return (
        <>

                <div key={indivCatch.id} className={selectedMarker === indivCatch.id ? 'catch-card selected' : 'catch-card'} >
                <div
        className="card-arc"
        style={{
          top: "0px",
          left: "20px",
          backgroundColor: "rgb(1, 138, 153)",
          // backgroundColor: "#7E7F9A",
          zIndex: "2",
        }}
      >
        <div
          style={{
            height: "auto",
            backgroundColor: "rgb(1, 138, 153)",
            paddingTop: "10px",
          }}
        >
          <div className="">
            aa
          </div>
          <div className="">aa</div>
        </div>
      </div>

                        <div className='catch-card-upper' onClick={() => {handleClick(indivCatch.id)}}>

                        <img className="card-image" src={indivCatch?.img_url} alt="" />
                        <div className='user-line'>
                            <img className='user-img-token' src={users[indivCatch.user_id].image_url}></img>
                        <div className='username-display'>{users[indivCatch.user_id].username}</div>
                        </div>

                        <div className='card-fish-name'>{indivCatch.fish}</div>
                        </div>
                        <div className='catch-card-lower'>
                        <div className='card-buttons'>
                        {sessionUser && sessionUser?.id == indivCatch.user_id && page !== 'search' &&
                        <UpdateCatchModal indivCatch={indivCatch}/>
                        }
                        </div>
                        </div>

                        </div>

        {/* <button className='button teal' onClick={() => setShowModal(true)}>{language && language === 'English' ? English.ShowDetails : Chinese.ShowDetails}</button> */}
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <DisplayIndivCatch setShowModal={setShowModal} targetCatch={indivCatch} user={user}/>
            </Modal>
        )}
        </>
    )
}