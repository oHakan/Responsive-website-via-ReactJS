import React from 'react';
import instagram from '../images/instagram.svg';
import discord from '../images/discord.svg';
import twitter from '../images/twitter.svg';
import gtaturk from '../images/gtaturk.png';

function Contact(props) {
    return(
        <div id='subscribe'>
            <h3>My Connectible Accounts</h3>
            <div className='ulasimnoktalari'>
            <a href="https://www.instagram.com/osmanhakaan/" target="_blank"><img src={instagram}   alt='osmanhakan'/></a>
            <a href="https://discord.gg/2RN995NpaA" target="_blank"><img src={discord} href="instagram.com" alt='osmanhakan'/></a>
            <a href="https://twitter.com/osmanhakaan" target="_blank"><img src={twitter} href="instagram.com" alt='osmanhakan'/></a>
            </div>
        <div className='gtaturk'>
            <p>Special Thanks</p>
        <a href="https://gtaturk-rpg.com" target="_blank"><img id="gtaturk" src={gtaturk}/></a>
        </div>
        <p>&#169; Osman-Hakan, 2021.</p>
        </div> 
    )
}

export default Contact;