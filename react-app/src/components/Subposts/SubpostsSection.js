import { useState } from "react";
import { useSelector } from "react-redux";

import './subposts.css'
import SubpostCard from "./SubpostCard";
import SubpostCreateForm from "./SubpostCreateForm";

export default function SubpostsSection ({ catch_id, subposts }) {
    const users = useSelector(state => state.user);
    const sessionUser = useSelector(state => state.session.user);
    const [showCreateSubpostield, setShowCreateField] = useState(false);


    return (
        <div className='subpost-section'>
            <h3>Comments / Questions</h3>
            <div className='section-row'>
                <div>Posts: { subposts.length }</div>
                {sessionUser  &&
                <button className='button' onClick={() => setShowCreateField(!showCreateSubpostield)}>Add</button>
                }
            </div>
            {showCreateSubpostield &&
            <SubpostCreateForm setShowCreateField={setShowCreateField} catch_id={catch_id}/>
            }
            {subposts.map((subpost) => {
                return (
                    <SubpostCard subpost={subpost} user={users[subpost.user_id]} />
                )
            })}
        </div>
    )
}