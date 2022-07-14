import { useSelector } from "react-redux";
import { useState } from "react";
import SubpostUpdate from "./SubpostUpdate";

export default function SubpostCard ({subpost, user}) {
    const sessionUser = useSelector(state => state.session.user);
    const [showSubpostUpdate, setShowSubpostUpdate] = useState(false);


    return (
        <div className='subpost-card' key={subpost.id}>
            {showSubpostUpdate ? <SubpostUpdate subpost={subpost} setShowSubpostUpdate={setShowSubpostUpdate}/> :
            <div className="subpost-content"><p>{subpost.content}</p></div>}

            <div className='section-row'>

            <div className='user-line'>
                            <img className='user-img-token' src={user.image_url}></img>
                        <div className='username-display'>{user.username}</div></div>

                {sessionUser && sessionUser.id == subpost.user_id &&
                <button className='button edit' onClick={() => setShowSubpostUpdate(!showSubpostUpdate)}>{!showSubpostUpdate ? 'Edit' : 'Cancel'}</button>
                }
                </div>
        </div>
    )
}