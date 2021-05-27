import React from 'react';

const homepage = (props) => {
    
    return(
        <div>
            <div className="card">
                name:{props.name+"  "}
                avatar:{props.avatar+" "}
                profileid:{props.usergithub+" "}
            </div>
        </div>
    );
}

export default homepage;