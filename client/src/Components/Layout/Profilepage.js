import React, { Fragment, useState, useContext, useEffect } from 'react';
import Userprojects from './Userprojects';
import Requireduserprojects from './Requireduserprojects';
import ProjectContext from '../../context/project/projectContext';
import AuthContext from '../../context/auth/authContext';
import Profile from './Profile';
import './Profilepage.css';
const Profilepage = () => {
  const projectContext = useContext(ProjectContext);

  const authContext = useContext(AuthContext);

  const { getUser, profile } = projectContext;

  const { loadUser } = authContext;

  useEffect(() => {
    getUser();
    //loadUser();
    //eslint-disable-next-line
  }, []);

  const [userProfile, setuserProfile] = useState({
    name: '',
    eamil: '',
    sex: '',
    githubUrl: '',
    projects: '',
    porjectInRequirement: '',
  });

  setuserProfile({ profile });

  const { projects, porjectInRequirement } = userProfile;

  return (
    <Fragment>
      <div className='empty'></div>
      <div
        className='user-profile'
        style={{ display: 'flex', flexWrap: 'wrap' }}
      >
        <div className='card-container'>
          <Profile />
        </div>
        {/* projects */}
        <div className='project-main'>
          <div className='user-projects'>
            <Userprojects projects={projects} />
            <h3>PROJECT IN REQUIREMENT </h3>
            <Requireduserprojects porjectInRequirement={porjectInRequirement} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profilepage;
