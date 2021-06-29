import React, { Fragment, useState, useEffect, useContext } from 'react';
import ProjectContext from '../../context/project/projectContext';
import './Profile.css';
const Profile = (props) => {
  useEffect(() => {
    setuserProfile(profile);
    //eslint-disable-next-line
  }, []);
  const projectContext = useContext(ProjectContext);

  const [userProfile, setuserProfile] = useState({
    name: '',
    email: '',
    description: '',
    githuburl: '',
  });

  console.log(props);

  const { profile } = props;

  const { name, email, description, githuburl } = userProfile;

  const onChange = (e) =>
    setuserProfile({ ...userProfile, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // updateProfile(userProfile);
    setuserProfile({
      name: '',
      email: '',
      description: '',
      githuburl: '',
    });
  };

  const toggle = () => {
    var popup = document.getElementById('popup-userprofile');
    popup.classList.toggle('active');
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
            onClick={toggle}
          ></i>
          <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
          <h4>Description</h4>
        </div>
        <div className='contact-main'>
          <div>
            <p>description</p>
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
            {githuburl && (
              <a href='#'>
                {' '}
                <i className='fab fa-github' style={{ fontSize: '1.4em' }}>
                  {' ' + githuburl}
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
            value={name}
            onChange={onChange}
          />
          <input
            type='email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={onChange}
          />
          <input
            type='url'
            placeholder='GithubUrl'
            name='githuburl'
            value={githuburl}
            onChange={onChange}
          />
          <textarea
            className='desc'
            type='text'
            placeholder='About self'
            name='description'
            value={description}
            onChange={onChange}
          />
          <input type='submit' />
        </form>
      </div>
    </Fragment>
  );
};

export default Profile;
