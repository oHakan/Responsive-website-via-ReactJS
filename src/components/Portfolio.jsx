import React from 'react';
import Box from './Box';

function Portfolio() {
    return(
        <div id="services">
            <div className='s-heading'>
                <h1>Portfolio</h1>
                <p>You can browse the sites I have made for businesses and individuals.</p>
            </div>
            <div className='b-container'>
                <Box image="https://media.discordapp.net/attachments/757363715547987969/798682266921599017/TEXT.png?width=400&height=225" target="_blank" link="https://muscles.osman-hakan.com" alte="MUSCLES" button="Go to"/>
            </div>
        </div>
    )
}

export default Portfolio;