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
                    <DisplayIndivCatchModal page={page} sessionUser={sessionUser} users={users} indivCatch={indivCatch} user={users[indivCatch.user_id]}>
                        </DisplayIndivCatchModal>
                );
            })}
            </div>
    )
}