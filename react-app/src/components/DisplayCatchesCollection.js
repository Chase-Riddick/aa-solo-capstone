import { useSelector } from 'react-redux';
import DisplayIndivCatchModal from './DisplayIndivCatch/IndivCatchModal'
import CreateCatchModal from './CreateUpdateCatch/CreateCatch/CreateCatchModal';
import UpdateCatchModal from './CreateUpdateCatch/UpdateCatch/UpdateCatchModal';

export default function DisplayCatchesCollection({catches, page, selectedMarker, setSelectedMarker}){
    const users = useSelector(state => state.user);
    // const catches = Object.values(useSelector(state => state.catches));
    const sessionUser = useSelector(state => state.session.user);
console.log("-----------------")
    const updateDateValue = (arr) => {
    let newArr = arr.map((ele) => {
        let strSplitCatchTime = ele.catch_time.toString().split('-');
        console.log(strSplitCatchTime);
        let str = strSplitCatchTime.slice(0, 3).join('-');
        console.log(strSplitCatchTime[3]);
        if (strSplitCatchTime[3] && strSplitCatchTime[3].length === 1) {
            strSplitCatchTime[3] = '0' + strSplitCatchTime[3];
        }
        strSplitCatchTime[3] += ':00'
        console.log(strSplitCatchTime[3]);
        let dTrial = str + 't' + strSplitCatchTime[3];
        console.log(dTrial);
        let d = new Date(str + 't' + strSplitCatchTime[3])
        console.log(d)
        ele.catch_time = d;
        console.log(ele.catch_time)
        return ele
    })
    console.log(newArr)
    return newArr.sort((a,b)=>b.catch_time.getTime() - a.catch_time.getTime())
    };
// sort((a, b) => b.created_at - a.created_at)
    // console.log(catches[0].catch_time > catches[1].catch_time )
    let indivCatchSelected;
    if (selectedMarker) {indivCatchSelected = catches.filter((indivCatch) => indivCatch.id === selectedMarker )[0]}



    return (
            <div className={page === 'mycatches' || page === 'global' ? 'catches-container full-page' : 'catches-container search-results'}>
                {/* // <div className='catches-container'> */}
                {selectedMarker && indivCatchSelected &&
                <DisplayIndivCatchModal className='selected something' selectedMarker={selectedMarker} key={indivCatchSelected.id} page={page} sessionUser={sessionUser} users={users} indivCatch={indivCatchSelected} user={users[indivCatchSelected.user_id]}>
                </DisplayIndivCatchModal>
                }
                {[...updateDateValue(catches)].reverse().map((indivCatch) => {
                    if (indivCatch.id !== selectedMarker)
                return (
                    <DisplayIndivCatchModal setSelectedMarker={setSelectedMarker} key={indivCatch.id} page={page} sessionUser={sessionUser} users={users} indivCatch={indivCatch} user={users[indivCatch.user_id]}>
                        </DisplayIndivCatchModal>
                );
            })}
            </div>
    )
}