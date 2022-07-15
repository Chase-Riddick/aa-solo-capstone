import './mapDisplayCard.css'

export default function MapDisplayCard ({indivCatch}) {
    return (

                <div key={indivCatch.id} className='map-display-card'>
                    {/* <div className='user-line'>
                        <img className='user-img-token' src={users[indivCatch.user_id].image_url}></img>
                    <div className='username-display'>{users[indivCatch.user_id].username}</div>
                    </div>
                    <img className="card-image" src={indivCatch?.img_url} alt="" /> */}
                    <div className='infobox-div'>
                    <img className='infobox-img' src={indivCatch.img_url}></img>
                    <div className='infobox-fish-name info-box-content'>{indivCatch.fish}</div>
                    </div>
                    {/* <div className='info-box-content'>{`${indivCatch.weight} (lbs) ${indivCatch.length}(in)` }</div> */}
                    <div className='info-box-content date'>{indivCatch.catch_time}</div>

                    {/* <div className='card-buttons'>
                    <DisplayIndivCatchModal indivCatch={indivCatch} user={users[indivCatch.user_id]}/>
                    {sessionUser && sessionUser?.id == indivCatch.user_id &&
                    <UpdateCatchModal indivCatch={indivCatch}/>
                    }
                    </div> */}

                    </div>

            );
}