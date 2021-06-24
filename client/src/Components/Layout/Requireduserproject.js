import React, { Fragment, useContext } from 'react';
import './Requireduserproject.css';
import ProjectContext from '../../context/project/projectContext';
import Tag from '../Tags';
const Requireduserproject = (props) => {
  const projectContext = useContext(ProjectContext);

  const {
    addProject,
    deleteProject,
    updateProject,
    setCurrentreq,
    clearCurrent,
  } = projectContext;

  const { key, project, prnt } = props;

  const { id, tags, name, requirement, description, url } = project;

  const onDelete = () => {
    deleteProject(id);
    clearCurrent();
  };

  const toggle = () => {
    var popup = document.getElementById('popup-requiredproject');
    popup.classList.toggle('active');
  };

  const onCall = () => {
    setCurrentreq(project);
    prnt();
  };

  return (
    <Fragment>
      <div className='user-glasspanel'>
        <i className='fas fa-expand-arrows-alt' onClick={toggle}></i>
        <h1>C1</h1>
        <p>
          Glassmorphism is achieved using transparency and background blur to
          get a frosted-glass like effect.
        </p>
        <div className='user-glasstoolbar' style={{ display: 'flex' }}>
          <a href='!#'>
            <i className='fab fa-github'> </i>
          </a>
          <div
            className='subtoolbar'
            style={{ display: 'flex', flexDirection: 'row-reverse' }}
          >
            <i className='fas fa-edit' onClick={onCall}></i>
            <i className='fas fa-trash' onClick={onDelete}></i>
          </div>
        </div>
      </div>

      {/* popup for project desc */}
      <div id='popup-requiredproject'>
        <i className='fas fa-window-close' onClick={toggle}></i>
        <h2>popup</h2>
        <h3>Description</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
          corrupti consequuntur modi tempore, ducimus adipisci deleniti est
          sequi, laborum ipsam voluptatem recusandae fuga quas molestias aliquam
          at pariatur dolor assumenda? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Cumque corrupti consequuntur modi tempore, ducimus
          adipisci deleniti est sequi, laborum ipsam voluptatem recusandae fuga
          quas molestias aliquam at pariatur dolor assumenda?
        </p>
        <h2>Tags</h2>
        <div
          className='projectags'
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          <Tag />
        </div>
        <br />
        <br />
        <i
          className='fab fa-github'
          style={{ float: 'left', fontSize: '1.6em' }}
        >
          {' '}
          GithubUrl
        </i>
      </div>
      <div id='popup-requiredproject'>
        <i className='fas fa-window-close' onClick={toggle}></i>
        <h2>popup</h2>
        <h3>Description</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
          corrupti consequuntur modi tempore, ducimus adipisci deleniti est
          sequi, laborum ipsam voluptatem recusandae fuga quas molestias aliquam
          at pariatur dolor assumenda? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Cumque corrupti consequuntur modi tempore, ducimus
          adipisci deleniti est sequi, laborum ipsam voluptatem recusandae fuga
          quas molestias aliquam at pariatur dolor assumenda?
        </p>
        <h2>Tags</h2>
        <div
          className='projectags'
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          <Tag />
        </div>
        <br />
        <br />
        <i
          className='fab fa-github'
          style={{ float: 'left', fontSize: '1.6em' }}
        >
          {' '}
          GithubUrl
        </i>
      </div>
      <div id='popup-requiredproject'>
        <i className='fas fa-window-close' onClick={toggle}></i>
        <h2>popup</h2>
        <h3>Description</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
          corrupti consequuntur modi tempore, ducimus adipisci deleniti est
          sequi, laborum ipsam voluptatem recusandae fuga quas molestias aliquam
          at pariatur dolor assumenda? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Cumque corrupti consequuntur modi tempore, ducimus
          adipisci deleniti est sequi, laborum ipsam voluptatem recusandae fuga
          quas molestias aliquam at pariatur dolor assumenda?
        </p>
        <h2>Tags</h2>
        <div
          className='projectags'
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          <Tag />
        </div>
        <br />
        <br />
        <i
          className='fab fa-github'
          style={{ float: 'left', fontSize: '1.6em' }}
        >
          {' '}
          GithubUrl
        </i>
      </div>
    </Fragment>
  );
};

export default Requireduserproject;
