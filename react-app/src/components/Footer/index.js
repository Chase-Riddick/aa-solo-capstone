import { Link } from 'react-router-dom';
import "./footer.css"

function Footer() {
    return (
        <>

        <div className='footer'>
        <div className='purple-extension'></div>
        <div className='footer-main'>
            <div className='col'>
                <p className='col-header'> About </p>
                <Link to='/about' className='footerlink cardo'>About</Link>
                <a href='https://github.com/Chase-Riddick' className='footerlink cardo' target="_blank">Project Repo - Github</a>
                <a href='https://github.com/Chase-Riddick' className='footerlink cardo' target="_blank">Chase Riddick - Github</a>
                <a href="https://www.linkedin.com/in/chase-riddick-a14596237/" className='footerlink cardo' target="_blank">Chase Riddick - LinkedIn</a>
            </div>

            <div className='col'>
                <p className='col-header'> Backend Stack </p>
                <a href="https://docs.python.org/3/index.html" className='footerlink cardo' target="_blank">Python</a>
                <a href="https://flask.palletsprojects.com/en/1.1.x/" className='footerlink cardo' target="_blank">Flask</a>
                <div className='col-item'><a href="https://wtforms.readthedocs.io/en/2.3.x/" className='footerlink cardo' target="_blank">WTForms</a> / <a href="https://flask-wtf.readthedocs.io/en/stable/" className='footerlink cardo' target="">FlaskWTF</a></div>
                <a href="https://flask-sqlalchemy.palletsprojects.com/en/2.x/" className='footerlink cardo' target="_blank">FlaskSQLAlchemy</a>
                <a href="https://alembic.sqlalchemy.org/en/latest/" className='footerlink cardo' target="_blank">Alembic</a>
            </div>

            <div className='col'>
            <p className='col-header'> Frontend Stack </p>
                <a href="https://www.javascript.com/" className='footerlink cardo' target="_blank">Javascript</a>
                <a href="https://reactjs.org/docs/getting-started.html" className='footerlink cardo' target="_blank">React.js</a>
                <a href="https://nodejs.org/en/" className='footerlink cardo' target="_blank">Node.js</a>
            </div>



        </div>
        </div>
        </>
    )
}

export default Footer;