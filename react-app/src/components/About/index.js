import './about.css'
// import '../../images/default-profile-img.png'

export default function About () {
    return (
        <div className='about-page-container'>
            <div className='about-container'>
                <img className='developer-img' src='/images/default-profile-img.png' />
                <div className='personal-slogan'>Chase Riddick</div>
                <div className='icons'>Github --- Linkedin</div>
            </div>
        </div>
    )
}
