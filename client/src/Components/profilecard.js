import React from 'react';
import './profilecard.css';

const homepage = (props) => {
    
    return(
        <div className="container">
            <div className="row">
                <div className="content">
                    <p className="name"><h1>{props.name+"  "}</h1></p>
                    <div className="cropper"><img className="img" src={props.avatar} alt="loading"/></div>
                    <p className="id">profileid:{props.usergithub+" "}</p>
                </div>
            </div>
        </div>
        
    );
}

export default homepage;