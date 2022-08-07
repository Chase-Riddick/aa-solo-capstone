import { useSelector } from 'react-redux';
import DisplayIndivCatchModal from './DisplayIndivCatch/IndivCatchModal'
import CreateCatchModal from './CreateUpdateCatch/CreateCatch/CreateCatchModal';
import UpdateCatchModal from './CreateUpdateCatch/UpdateCatch/UpdateCatchModal';

export default function DisplayCatchesCollection({catches, page}){
    const users = useSelector(state => state.user);
    // const catches = Object.values(useSelector(state => state.catches));
    const sessionUser = useSelector(state => state.session.user);
console.log("-----------------")
    const updateDateValue = (arr) => {
    let newArr = arr.map((ele) => {
        ele.catch_time += "-hey"
        let str = ele.catch_time.split('-').slice(0, 3).join('-');
        let d = new Date(str)
        console.log(d)
        ele.catch_time = d;
        return ele
    })
    console.log(newArr)
    return newArr.sort((a,b)=>b.catch_time.getTime() - a.catch_time.getTime())
    };
// sort((a, b) => b.created_at - a.created_at)
    // console.log(catches[0].catch_time > catches[1].catch_time )

    return (
            <div className={page === 'mycatches' || page === 'global' ? 'catches-container full-page' : 'catches-container'}>
                {/* // <div className='catches-container'> */}
                {[...updateDateValue(catches)].reverse().map((indivCatch) => {
                return (
                    <DisplayIndivCatchModal key={indivCatch.id} page={page} sessionUser={sessionUser} users={users} indivCatch={indivCatch} user={users[indivCatch.user_id]}>
                        </DisplayIndivCatchModal>
                );
            })}
            </div>
    )
}