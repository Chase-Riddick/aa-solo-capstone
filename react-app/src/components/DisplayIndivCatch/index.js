
export default function DisplayIndivCatch ({indivCatch}) {
    return (
        <>
        <h3>  This Individual Catch Details</h3>
        <p>{indivCatch.id}</p>
        <p>{indivCatch.user_id}</p>
        <p>{indivCatch.img_url}</p>
        <p>{indivCatch.fish}</p>
        <p>{indivCatch.description}</p>
        <p>{indivCatch.length}</p>
        <p>{indivCatch.weight}</p>
        <p>{indivCatch.bait}</p>
        <p>{indivCatch.lure}</p>
        <p>{indivCatch.long}</p>
        <p>{indivCatch.lat}</p>
        </>
    )
}