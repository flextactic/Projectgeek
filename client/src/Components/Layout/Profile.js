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
    name: '',
    email: '',
    githubUrl: '',
    about: '',
    sex: '',
  });

  const { profile } = props;

  const { name, email, githubUrl, about, sex } = profile;

  const onChange = (e) =>
    setuserProfile({ ...userProfile, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    toggle();
    e.preventDefault();
    updateProfile(userProfile);
    setuserProfile({
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
          <img src='https://avatarfiles.alphacoders.com/865/thumb-86573.jpg' />
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
          <h3 style={{ margin: '20px 0 0 0' }}>{name}</h3>
          {sex && <h3 style={{ margin: '0 0 20px 0' }}>{sex}</h3>}
          <h4 style={{ margin: '0 0 30px 0' }}>DESCRIPTION</h4>
        </div>
        <div className='contact-main'>
          <div style={{ overflow: 'hidden' }}>
            <p style={{ width: '100%', margin: '0 0 20px 0', color: 'white' }}>
              {about}
            </p>
          </div>
          <div className='contact'>
            {email && (
              <a href={email} target='_blank' rel='noopener noreferrer'>
                <i
                  className='fas fa-envelope'
                  style={{ fontSize: '2.5rem' }}
                ></i>
              </a>
            )}
            <br />
            <br />
            {githubUrl && (
              <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
                <i
                  className='fab fa-github'
                  style={{ fontSize: '2.5rem', marginBottom: '30px' }}
                ></i>
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
