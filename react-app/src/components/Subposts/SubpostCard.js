
export default function SubpostCard ({subpost}) {
    return (
        <div className='subpost-card' key={subpost.id}>
            <p>{subpost.content}</p>
            <p>User Id:{subpost.user_id}</p>
        </div>
    )
}