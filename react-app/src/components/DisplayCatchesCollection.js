import { useSelector } from 'react-redux';
import DisplayIndivCatchModal from './DisplayIndivCatch/IndivCatchModal'
import CreateCatchModal from './CreateUpdateCatch/CreateCatch/CreateCatchModal';
import UpdateCatchModal from './CreateUpdateCatch/UpdateCatch/UpdateCatchModal';

export default function DisplayCatchesCollection({catches, page}){
    const users = useSelector(state => state.user);
    // const catches = Object.values(useSelector(state => state.catches));
    const sessionUser = useSelector(state => state.session.user);

    return (
            <div className={page === 'mycatches' || page === 'global' ? 'catches-container full-page' : 'catches-container'}>
                {/* // <div className='catches-container'> */}
                {catches.map((indivCatch) => {
                return (
                    <div key={indivCatch.id} className='catch-card'>
                        <div className='catch-card-upper'>
                        <div className='user-line'>
                            <img className='user-img-token' src={users[indivCatch.user_id].image_url}></img>
                        <div className='username-display'>{users[indivCatch.user_id].username}</div>
                        </div>
                        <img className="card-image" src={indivCatch?.img_url} alt="" />

                        <div className='card-fish-name'>{indivCatch.fish}</div>
                        </div>
                        <div className='catch-card-lower'>
                        <div className='card-buttons'>
                        <DisplayIndivCatchModal indivCatch={indivCatch} user={users[indivCatch.user_id]}/>
                        {sessionUser && sessionUser?.id == indivCatch.user_id && page !== 'search' &&
                        <UpdateCatchModal indivCatch={indivCatch}/>
                        }
                        </div>
                        </div>

                        </div>

                );
            })}
            </div>
    )
}