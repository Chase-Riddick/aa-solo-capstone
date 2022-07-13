import SubpostsSection from "../Subposts/SubpostsSection"
import './indivCatch.css'

export default function DisplayIndivCatch ({ indivCatch, user }) {

    return (
        <div className="display-catch-container">
            <div className="display-catch-left">
            <h1>The Catch</h1>
                <div>
                <div className='user-line'>
                            <img className='user-img-token' src={user.image_url}></img>
                        <div className='username-display'>{user.username}</div>
                        </div>
                </div>
                <div className="modal-img-container">
                <img className="indivCatch-picture" src={indivCatch.img_url}></img>
                </div>

                <div className="title-container">
                <h3>{indivCatch.fish}</h3>
                </div>

                <div className="description-container">
                <h4>Description:</h4>
                <p>{indivCatch.description}</p></div>

                <div className="details-container">

                <div className="details-left">

                <div className="same-line-description">
                <h4>Weight:</h4>
                <p>{indivCatch.weight}</p>
                </div>


                <div className="same-line-description">
                <h4>Length:</h4>
                <p>{indivCatch.length}</p>
                </div>

                </div>

                <div className="details-right">
                <div className="same-line-description">
                <h4>Lure:</h4>
                <p>{indivCatch.lure}</p>
                </div>

                <div className="same-line-description">
                <h4>Bait:</h4>
                <p>{indivCatch.bait}</p>
                </div>

                </div>
                </div>

                <div className="same-line-description">
                <h4>Conditions:</h4>
                <p>{indivCatch.condition.condition_text}</p>
                <img src={indivCatch.condition.condition_icon}></img>
                </div>

                <div className="details-container">

                <div className="details-left">
                <div className="same-line-description">
                <h4>Temperature:</h4>
                <p>{indivCatch.condition.temp}℉</p>
                </div>

                <div className="same-line-description">
                <h4>Cloud:</h4>
                <p>{indivCatch.condition.cloud}%</p>
                </div>

                <div className="same-line-description">
                <h4>Humidity:</h4>
                <p>{indivCatch.condition.humdity}%</p>
                </div>
                </div>

                <div className="details-right">
                <div className="same-line-description">
                <h4>Precipitation:</h4>
                <p>{indivCatch.condition.precip} (in)</p>
                </div>

                <div className="same-line-description">
                <h4>Pressure:</h4>
                <p>{indivCatch.condition.pressure} (in)</p>
                </div>

                <div className="same-line-description">
                <h4>Wind:</h4>
                <p>{indivCatch.condition.wind} (mph)</p>
                </div>
                </div>
                </div>



                {/* <p>{indivCatch.long}</p>
                <p>{indivCatch.lat}</p> */}


            </div>
            <div className="display-catch-right">
            <h1>Dicussion</h1>
                <SubpostsSection catch_id={indivCatch.id} subposts={indivCatch.subposts} />
            </div>


        </div>
    )
}