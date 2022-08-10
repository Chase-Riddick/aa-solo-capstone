import React, { useState } from 'react';

import UpdateCatchModal from '../CreateUpdateCatch/UpdateCatch/UpdateCatchModal';
import { Modal } from '../../context/Modal';
import { useLanguageContext } from '../../context/LanguageContext';
import { months } from '../../language';
import DisplayIndivCatch from '.';

export default function DisplayIndivCatchModal ({ indivCatch, user, users, sessionUser, page, selectedMarker, setSelectedMarker }) {
    const { language, setLanguage, English, Chinese } = useLanguageContext();
    const [showModal, setShowModal] = useState(false)

    const handleClick = (id) => {
      // setSelectedMarker(id);
      setShowModal(true);
    }

    const upateDateValue = (timeStr) => {
      return `${timeStr.split('-')[2]} ${language === 'English' ? English[months[timeStr.split('-')[1]]] : Chinese[months[timeStr.split('-')[1]]]}`
      // let timeStrSplit = timeStr.split('-');
      // console.log(timeStrSplit);

      // return months.timeStrSplit[1] + timeStrSplit[2];


    // let newArr = arr.map((ele) => {
    //     let strSplitCatchTime = ele.catch_time.toString().split('-');
    //     console.log(strSplitCatchTime);
    //     let str = strSplitCatchTime.slice(0, 3).join('-');
    //     console.log(strSplitCatchTime[3]);
    //     if (strSplitCatchTime[3] && strSplitCatchTime[3].length === 1) {
    //         strSplitCatchTime[3] = '0' + strSplitCatchTime[3];
    //     }
    //     strSplitCatchTime[3] += ':00'
    //     console.log(strSplitCatchTime[3]);
    //     let dTrial = str + 't' + strSplitCatchTime[3];
    //     console.log(dTrial);
    //     let d = new Date(str + 't' + strSplitCatchTime[3])
    //     console.log(d)
    //     ele.catch_time = d;
    //     console.log(ele.catch_time)
    //     return ele
    // })
    // console.log(newArr)
    // return newArr.sort((a,b)=>b.catch_time.getTime() - a.catch_time.getTime())
    };

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
            paddingTop: "5px",
          }}
        >
          <div className="card-arc-text">{upateDateValue(indivCatch.catch_time)}</div>
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
                        {sessionUser && sessionUser?.id == indivCatch.user_id && page === 'mycatches' &&
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