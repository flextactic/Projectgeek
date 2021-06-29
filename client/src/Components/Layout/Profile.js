import React, { Fragment, useState, useEffect, useContext } from 'react';
import ProjectContext from '../../context/project/projectContext';
import './Profile.css';
const Profile = (props) => {
  const projectContext = useContext(ProjectContext);

  const { current, setCurrent, updateProfile } = projectContext;

  useEffect(() => {
    if (current !== null) {
      setuserProfile(current);
    } else {
      setuserProfile({
        _id: '',
        name: '',
        email: '',
        githubUrl: '',
        about: '',
        sex: '',
      });
    }
  }, [projectContext, current]);

  const [userProfile, setuserProfile] = useState({
    _id: '',
    name: '',
    email: '',
    githubUrl: '',
    about: '',
    sex: '',
  });

  console.log(props);

  const { profile } = props;

  const { name, email, githubUrl, about, sex } = profile;

  const onChange = (e) => setuserProfile({ [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    toggle();
    e.preventDefault();
    updateProfile(userProfile);
    setuserProfile({
      _id: '',
      name: '',
      email: '',
      githubUrl: '',
      about: '',
      sex: '',
    });
  };

  const toggle = () => {
    var popup = document.getElementById('popup-userprofile');
    popup.classList.toggle('active');
  };

  const onCall = () => {
    toggle();
    setCurrent(profile);
  };
  return (
    <Fragment>
      <div className='upper-container'>
        <div className='image-container'>
          <img src='' />
        </div>
      </div>
      <div className='lower-container'>
        <div className='projectheader'>
          <i
            className='fas fa-edit'
            style={{ fontSize: '1.8em' }}
            onClick={onCall}
          ></i>
          {/* <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3> */}
          <h3>{name}</h3>
          <h4>Description</h4>
        </div>
        <div className='contact-main'>
          <div>
            <p>{about}</p>
          </div>
          <div className='contact'>
            {email && (
              <a href='#'>
                {' '}
                <i className='fas fa-envelope' style={{ fontSize: '1.4rem' }}>
                  {' ' + email}
                </i>
              </a>
            )}
            <br />
            <br />
            {githubUrl && (
              <a href='#'>
                {' '}
                <i className='fab fa-github' style={{ fontSize: '1.4em' }}>
                  {' ' + githubUrl}
                </i>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* profile popup */}
      <div id='popup-userprofile'>
        <i className='fas fa-window-close' onClick={toggle}></i>
        <form className='profile-form' onSubmit={onSubmit}>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={userProfile.name}
            onChange={onChange}
          />
          <input
            type='text'
            placeholder='Gender'
            name='sex'
            value={userProfile.sex}
            onChange={onChange}
          />
          <input
            type='url'
            placeholder='GithubUrl'
            name='githubUrl'
            value={userProfile.githubUrl}
            onChange={onChange}
          />
          <textarea
            className='desc'
            type='text'
            placeholder='About self'
            name='about'
            value={userProfile.about}
            onChange={onChange}
          />
          <input type='submit' />
        </form>
      </div>
    </Fragment>
  );
};

export default Profile;
