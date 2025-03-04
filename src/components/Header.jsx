import React from 'react'
import '../css/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header className='D-nav'>
        <div className="left">
            <h3>Zenbridge</h3>
        </div>
        <div className="middle">
            <ul>
                <li>About Us <FontAwesomeIcon icon={faChevronDown} className='icon'/></li>
                <li>Products <FontAwesomeIcon icon={faChevronDown} className='icon' /></li>
                <li>Solutions <FontAwesomeIcon icon={faChevronDown} className='icon' /></li>
                <li>Pricing</li>
                <li>Developers</li>
                <li>Resources  <FontAwesomeIcon icon={faChevronDown} className='icon'/> </li>
            </ul>
        </div>
        <div className="right">
            <div className="c-btn">
                contact Sales  <FontAwesomeIcon icon={faChevronRight} className='icon'/>
            </div>
            <div className="l-btn">
                Login
            </div>
            <div className="ham">
            <FontAwesomeIcon icon={faBars} />
            </div>
        </div>
    </header>
      
    
  )
}

export default Header
