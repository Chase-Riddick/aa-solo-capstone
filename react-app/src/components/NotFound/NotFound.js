import React from 'react'
import { NavLink } from 'react-router-dom'

import './notFound.css';

export default function NotFound () {

  return (
    <div className='not-found-page'>
        <div className='not-found-message'>
        <h1 className='header-404'>404 - Page Not Found</h1>
        <p>Bummer, we couldn't find that page..</p>
        <NavLink className="error-nav" exact to="/"><button className='button teal'>Home</button></NavLink>
        </div>
    </div>
  )
}
