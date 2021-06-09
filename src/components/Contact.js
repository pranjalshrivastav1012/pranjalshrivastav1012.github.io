import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class Contact extends Component {
    state = {  }
    render() { 
        return (  <div>
        <h1 style={{color:"#1A2324"}}>
                <Fade bottom cascade> Contact</Fade>
        </h1>
        <Fade bottom>
        <div className='contact-content'>
                <h1 className='contactFirstLine'>
                Thank's For<br></br>
                <span className='amazing-color'>Visiting my Portfolio</span></h1>
                    <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                <ul>
                    {data.social.map((link,index)=>(
                        <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                    ))}   
                </ul>
        </div>
        </Fade>

            <span className='footer'>© Copyright 2021 Pranjal Srivastava</span>
        </div>);
    }
}
 
export default Contact;