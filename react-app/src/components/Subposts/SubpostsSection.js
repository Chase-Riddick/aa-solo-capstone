import { useState } from "react";
import { useSelector } from "react-redux";

import { useLanguageContext } from "../../context/LanguageContext";
import './subposts.css'
import '../DisplayIndivCatch/indivCatch.css'
import SubpostCard from "./SubpostCard";
import SubpostCreateForm from "./SubpostCreateForm";

export default function SubpostsSection ({ catch_id, subposts }) {
    const { language, setLanguage, English, Chinese } = useLanguageContext();
    const users = useSelector(state => state.user);
    const sessionUser = useSelector(state => state.session.user);
    const [showCreateSubpostield, setShowCreateField] = useState(false);


    return (
        <div className='subpost-section'>
            <div className=" sub-section-block">
            <h1 className="section-header">{language && language === 'English' ? English.Dicussion : Chinese.Dicussion}</h1>
            <div className='section-row'>
            <h3 className="line-header">{language && language === 'English' ? English.CommentsQuestions : Chinese.CommentsQuestions}</h3>
                <div>{language && language === 'English' ? English.Posts : Chinese.Posts}: { subposts.length }</div>
            </div>
            {sessionUser  &&
                <button className='button salmon' onClick={() => setShowCreateField(!showCreateSubpostield)}>{language && language === 'English' ? English.AddToTheDiscussion : Chinese.AddToTheDiscussion}</button>
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