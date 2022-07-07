import { useSelector } from "react-redux";
import { useState } from "react";
import SubpostUpdate from "./SubpostUpdate";

export default function SubpostCard ({subpost}) {
    const sessionUser = useSelector(state => state.session.user);
    const [showSubpostUpdate, setShowSubpostUpdate] = useState(false);


    return (
        <div className='subpost-card' key={subpost.id}>
            {showSubpostUpdate ? <SubpostUpdate subpost={subpost} setShowSubpostUpdate={setShowSubpostUpdate}/> :
            <div className="subpost-content"><p>{subpost.content}</p></div>}

            <div className='section-row'>
                <p>User Id:{subpost.user_id}</p>
                {sessionUser && sessionUser.id == subpost.user_id &&
                <button className='button' onClick={() => setShowSubpostUpdate(!showSubpostUpdate)}>Edit</button>
                }
                </div>
        </div>
    )
}