import './about.css'
// import '../../images/default-profile-img.png'

export default function About () {
    return (
        <div className='about-page-container'>
            <div className='about-container'>
                <img className='developer-img' src='https://localcatches.s3.us-west-2.amazonaws.com/Screen+Shot+2022-07-14+at+14.42.43.png' />
                <div>
                <div className='personal-name'>Chase Riddick</div>
                {/* <div className='personal-slogan'>Magnaminous, Unrelenting, Delight</div> */}
                </div>

                <div className='icons'>

                        <a href="https://github.com/Chase-Riddick/aa-solo-capstone" target="_blank">
                        <i className="fa-brands fa-github fa-lg"></i>
                        </a>

                        <a href="https://www.linkedin.com/in/chase-riddick-a14596237/" target="_blank">
                        <i className="fa-brands fa-linkedin fa-lg"></i>
                        </a>



                </div>
            </div>
        </div>
    )
}
