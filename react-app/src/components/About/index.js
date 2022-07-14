import './about.css'
// import '../../images/default-profile-img.png'

export default function About () {
    return (
        <div className='about-page-container'>
            <div className='about-container'>
                <img className='developer-img' src='https://localcatches.s3.us-west-2.amazonaws.com/Screen+Shot+2022-07-14+at+14.42.43.png' />
                <div className='personal-slogan'>Chase Riddick</div>
                <div className='icons'>Github --- Linkedin</div>
            </div>
        </div>
    )
}
