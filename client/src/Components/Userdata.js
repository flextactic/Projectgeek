import React from 'react';
import Homepage  from './Homepage'
const userdata = (props) => {
    return(
        props.userinfo.map((user)=>{
            console.log(user);
            return <Homepage
             name={user.username}
             avatar={user.avatar}
             usergithub={user.github}
            />

        })
    );
}

export default userdata;