import React from 'react';
import Navbar from './Navbar'

function Header() {
    return(
        <div id='main'>
            <Navbar/>
           <div className='name'>
               <h1>Mid-Tier Web <span>Developer</span></h1>
               <p className='details'>Two of your cousins ​​trying to do business at a young age, we are on the way to become a team that constantly improves ourselves and targets the best. We have a powerful weapon, thanks to our determination we overcome obstacles</p>
           </div>
           <div className='arrow'></div>
        </div>
    )
}

export default Header;