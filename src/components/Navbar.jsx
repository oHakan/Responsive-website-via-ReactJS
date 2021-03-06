import React from 'react';
import {Link} from 'react-scroll';
import logo from '../images/logo1.png'

function Navbar() {
    return(
        <div>
            <nav>
                <Link to='main' className='logo' smooth={true} duration={1000}>
                    <img src={logo} alt='osmanhakan'/>
                </Link>
                <input className='menu-btn' type='checkbox' id='menu-btn'/>
                <label className='menu-icon' for='menu-btn'>
                    <span className='nav-icon'></span>
                </label>
                <ul className='menu'>
                    <li><Link to='main' smooth={true} duration={1000}>Home Page</Link></li>
                    <li><Link to='features' smooth={true} duration={1000} >Information</Link></li>
                    <li><Link to='services'smooth={true} duration={1000}  >Portfolio</Link></li>
                    <li><Link to='subscribe' smooth={true} duration={1000} >Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;