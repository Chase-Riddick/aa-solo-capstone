import SubpostsSection from "../Subposts/SubpostsSection"
import './indivCatch.css'

export default function DisplayIndivCatch ({indivCatch}) {
    return (
        <div className="display-catch-container">
            <div className="display-catch-left">
                <p>User Id: {indivCatch.user_id}</p>
                <div className="modal-img-container">
                <img className="indivCatch-picture" src={indivCatch.img_url}></img>
                </div>

                <div className="title-container">
                <h3>{indivCatch.fish}</h3>
                </div>

                <div className="description-container">
                <h4>Description:</h4>
                <div><p>{indivCatch.description}</p></div>
                </div>

                <div className="details-container">

                <div className="description-container">
                <h4>Weight:</h4>
                <div><p>{indivCatch.weight}</p></div>
                <h4>Length:</h4>
                <div><p>{indivCatch.length}</p></div>
                </div>

                </div>

                <p>{indivCatch.length}</p>
                <p>{indivCatch.weight}</p>
                <p>{indivCatch.bait}</p>
                <p>{indivCatch.lure}</p>
                <p>{indivCatch.long}</p>
                <p>{indivCatch.lat}</p>
            </div>
            <div className="display-catch-right">
                <SubpostsSection catch_id={indivCatch.id} subposts={indivCatch.subposts} />
            </div>


        </div>
    )
}