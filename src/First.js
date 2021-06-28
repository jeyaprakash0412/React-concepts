import React from 'react'
import back from './images/start.jpg';
import './nav.css'

import{
    Link
    } from "react-router-dom";
    
const First = () => {
    return (
        <div> <div className="opa">
            
                <Link to="/function" target='_blank'><img src={back}alt="backgroundphoto"width="1500px" height="750px" ></img></Link>
        </div>

       




        </div>
    )
}

export default First
