import React, { Fragment, useContext, useState } from 'react';
import './Userproject.css';
import Tag from '../Tags';
import ProjectContext from '../../context/project/projectContext';

const Userproject = (props) => {
  const projectContext = useContext(ProjectContext);

  const { project, parent } = props;

  console.log(project);

  const { _id, tags, name, description, url } = project;

  const { deleteProject, setCurrent, clearCurrent, updateProject } =
    projectContext;

  const onDelete = () => {
    deleteProject(_id);
    clearCurrent();
  };

  const toggle = () => {
    var popup = document.getElementById('popup-userproject');
    popup.classList.toggle('active');
  };

  const onCall = () => {
    setCurrent(project);
    parent();
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
        <button style={{ padding: '2px 5px', borderRadius: '5px' }}>
          Move to requirement
        </button>
        <div className='user-glasstoolbar' style={{ display: 'flex' }}>
          <a href='!#'>
            <i className='fab fa-github'> </i>
          </a>
          <div
            className='subtoolbar'
            style={{ display: 'flex', flexDirection: 'row-reverse' }}
          >
            <i class='fas fa-edit' onClick={onCall}></i>
            <i class='fas fa-trash' onClick={onDelete}></i>
          </div>
        </div>
      </div>

      {/* popup for  project desc*/}
      <div id='popup-userproject'>
        <i
          className='fas fa-window-close'
          onClick={toggle}
          style={{ fontSize: '2rem' }}
        ></i>
        <h2>popup</h2>
        <h3>Description</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
          corrupti consequuntur modi tempore, ducimus adipisci deleniti est
          sequi, laborum ipsam voluptatem recusandae fuga quas molestias aliquam
          at pariatur dolor assumenda? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Cumque corrupti consequuntur modi tempore, ducimus
          adipisci deleniti est sequi, laborum ipsam voluptatem recusandae fuga
          quas molestias aliquam at pariatur dolor assumenda? Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Cumque corrupti consequuntur
          modi tempore, ducimus adipisci deleniti est sequi, laborum ipsam
          voluptatem recusandae fuga quas molestias aliquam at pariatur dolor
          assumenda? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Cumque corrupti consequuntur modi tempore, ducimus adipisci deleniti
          est sequi, laborum ipsam voluptatem recusandae fuga quas molestias
          aliquam at pariatur dolor assumenda? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Cumque corrupti consequuntur modi
          tempore, ducimus adipisci deleniti est sequi, laborum ipsam voluptatem
          recusandae fuga quas molestias aliquam at pariatur dolor assumenda?
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

export default Userproject;
