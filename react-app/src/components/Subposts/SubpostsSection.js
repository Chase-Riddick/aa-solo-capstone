import { useState } from "react";
import { useSelector } from "react-redux";

import './subposts.css'
import '../DisplayIndivCatch/indivCatch.css'
import SubpostCard from "./SubpostCard";
import SubpostCreateForm from "./SubpostCreateForm";

export default function SubpostsSection ({ catch_id, subposts }) {
    const users = useSelector(state => state.user);
    const sessionUser = useSelector(state => state.session.user);
    const [showCreateSubpostield, setShowCreateField] = useState(false);


    return (
        <div className='subpost-section'>
            <div className=" sub-section-block">
            <h1 className="section-header">Dicussion</h1>
            <div className='section-row'>
            <h3 className="line-header">Comments / Questions</h3>
                <div>Posts: { subposts.length }</div>
            </div>
            {sessionUser  &&
                <button className='button salmon' onClick={() => setShowCreateField(!showCreateSubpostield)}>Add to the Dicussion</button>
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