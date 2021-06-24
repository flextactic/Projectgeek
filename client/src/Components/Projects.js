import React, { Fragment } from 'react';
import './Projects.css';
import Tag from './Tags';
function Projects(props) {
  const { project } = props;

  const { name, Author, description, tags, githubUrl, like, dislike } = project;

  const likeproject = () => {};

  const dislikeproject = () => {};

  const toggle = () => {
    var popup = document.getElementById('popup-project');
    popup.classList.toggle('active');
  };
  return (
    <Fragment>
      <div className='glass-panel'>
        <i className='fas fa-expand-arrows-alt' onClick={toggle}></i>
        <h1>{name}</h1>
        <p>{description}</p>
        <div className='glass-toolbar' style={{ display: 'flex' }}>
          <i className='far fa-thumbs-up ' onClick={likeproject}></i>
          <i className='far fa-thumbs-down ' onClick={dislikeproject}></i>
        </div>
      </div>
      <div id='popup-project'>
        <i className='fas fa-window-close' onClick={toggle}></i>
        <h2>popup</h2>
        <h3>Autor: {Author} </h3>
        <h3>Description</h3>
        <p>{description}</p>
        <h2>Tags</h2>
        <div
          className='projectags'
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          {tags.map((tag) => (
            <Tag tag={tag} />
          ))}
        </div>
        <br />
        <br />
        <i
          className='fab fa-github'
          style={{ float: 'left', fontSize: '1.6em' }}
        >
          {' '}
          {githubUrl}
        </i>
      </div>
    </Fragment>
  );
}

export default Projects;
