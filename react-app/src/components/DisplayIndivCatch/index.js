import { useSelector } from "react-redux";
import SubpostsSection from "../Subposts/SubpostsSection"
import './indivCatch.css'

export default function DisplayIndivCatch ({ targetCatch, user }) {
    const indivCatch = Object.values(useSelector(state => state.catches)).filter(ele => ele['id'] === targetCatch['id'])[0];

    return (
        <>
        {indivCatch && (
        <div className="display-catch-container">
            <div className="display-catch-left">
            <div className="sub-section-block">
            <h1 className="section-header">The Catch</h1>
                <div >
                <div className='user-line'>
                            <img className='user-img-token' src={user.image_url}></img>
                        <div className='username-display'>{user.username}</div>
                        </div>
                </div>
                <div className="modal-img-container">
                <img className="indivCatch-picture" src={indivCatch.img_url}></img>
                </div>

                <div className="same-line-description" >
                <h4 className="line-header">Fish:</h4>
                <h3 className="fish-name">{indivCatch.fish}</h3>
                </div>
                </div>
                <div className=" sub-section-block">
                {/* <div className="description-container"> */}
                <div className="same-line-description">
                <h4 className="line-header">Description:</h4>
                <p>{indivCatch.description}</p></div>

                <div className="details-container">

                <div className="details-left">

                <div className="same-line-description">
                <h4 className="line-header">Weight:</h4>
                <p>{indivCatch.weight}</p>
                </div>


                <div className="same-line-description">
                <h4 className="line-header">Length:</h4>
                <p>{indivCatch.length}</p>
                </div>

                </div>

                <div className="details-right">
                <div className="same-line-description">
                <h4 className="line-header">Lure:</h4>
                <p className="card-text-info">{indivCatch.lure}</p>
                </div>

                <div className="same-line-description">
                <h4 className="line-header">Bait:</h4>
                <p className="card-text-info">{indivCatch.bait}</p>
                </div>

                </div>
                </div>
                </div>

                <div className=" sub-section-block">
                <div className="same-line-description">
                <h4 className="line-header">Conditions:</h4>
                <p>{indivCatch.condition.condition_text}</p>
                <img className='weather-img' src={indivCatch.condition.condition_icon}></img>
                </div>


                <div className="details-container">

                <div className="details-left">
                <div className="same-line-description">
                <h4 className="line-header">Temperature:</h4>
                <p className="condition-info-text">{indivCatch.condition.temp}℉</p>
                </div>

                <div className="same-line-description">
                <h4 className="line-header">Cloud:</h4>
                <p>{indivCatch.condition.cloud}%</p>
                </div>

                <div className="same-line-description">
                <h4 className="line-header">Humidity:</h4>
                <p>{indivCatch.condition.humdity}%</p>
                </div>
                </div>

                <div className="details-right">
                <div className="same-line-description">
                <h4 className="line-header">Precipitation:</h4>
                <p>{indivCatch.condition.precip} (in)</p>
                </div>

                <div className="same-line-description">
                <h4 className="line-header">Pressure:</h4>
                <p>{indivCatch.condition.pressure} (in)</p>
                </div>

                <div className="same-line-description">
                <h4 className="line-header">Wind:</h4>
                <p>{indivCatch.condition.wind} (mph)</p>
                </div>
                </div>
                </div>
                </div>



                {/* <p>{indivCatch.long}</p>
                <p>{indivCatch.lat}</p> */}
                {/* <div className="filler-div">aa</div> */}

            </div>
            <div className="display-catch-right">

                <SubpostsSection catch_id={indivCatch.id} subposts={indivCatch.subposts} />
            </div>


        </div>
    )}
    </>
    )
}