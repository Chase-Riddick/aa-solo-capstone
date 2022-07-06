import { useSelector } from 'react-redux';
import DisplayIndivCatchModal from './DisplayIndivCatch/IndivCatchModal'
import DisplayIndivCatch from './DisplayIndivCatch'

export default function DisplayCatchesCollection(){
    const catches = Object.values(useSelector(state => state.catches));
    return (
        <>
            <h2>DisplayCatchesCollection</h2>

            <div className='catches container'>
                {catches.map((indivCatch) => {
                return (
                    <div key={indivCatch.id} className='catch-card'>
                        <img className="card-image" src={indivCatch?.img_url} alt="" />
                        <div className='card-row'><p>{indivCatch.fish}</p><DisplayIndivCatchModal indivCatch={indivCatch}/></div>

                    </div>
                );
            })}
            </div>
        </>
    )
}