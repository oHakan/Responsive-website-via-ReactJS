import React from 'react';

function Box(props) {
    return(
        <div className='s-box'>
            <div className='s-b-img'>
                <img src={props.image} alt={props.alte}/>
            </div>
            <div className='s-b-text'>
                <p>A design created for illegal racing, It is made using modern HTML and CSS designs.    </p>
                <a href={props.link} target={props.target} className='cv-btn'>{props.button}</a>
            </div>
        </div> 
    )
}

export default Box;