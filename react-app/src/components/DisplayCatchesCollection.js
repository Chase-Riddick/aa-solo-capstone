import { useSelector } from 'react-redux';
import DisplayIndivCatchModal from './DisplayIndivCatch/IndivCatchModal'
import CreateCatchModal from './CreateUpdateCatch/CreateCatch/CreateCatchModal';
import UpdateCatchModal from './CreateUpdateCatch/UpdateCatch/UpdateCatchModal';

export default function DisplayCatchesCollection(){
    const catches = Object.values(useSelector(state => state.catches));
    const sessionUser = useSelector(state => state.session.user);

    return (
        <>
            <h2>DisplayCatchesCollection</h2>
            <CreateCatchModal/>

            <div className='catches container'>
                {catches.map((indivCatch) => {
                return (
                    <div key={indivCatch.id} className='catch-card'>
                        <img className="card-image" src={indivCatch?.img_url} alt="" />

                        <div className='card-row'>

                        <p>{indivCatch.fish}</p>

                        <div className='card-buttons'>
                        <DisplayIndivCatchModal indivCatch={indivCatch}/>
                        {sessionUser && sessionUser?.id == indivCatch.user_id &
                        <UpdateCatchModal indivCatch={indivCatch}/>
                        }
                        </div>

                        </div>
                    </div>
                );
            })}
            </div>
        </>
    )
}