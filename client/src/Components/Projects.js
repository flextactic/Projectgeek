import React, { Fragment } from 'react';
import './Projects.css';
import Tag from './Tags';
function Projects(props) {
  const { project, key } = props;

  const { name, _id, Author, description, tags, githubUrl, likes, dislikes } =
    project;

  const likeproject = () => {};

  const dislikeproject = () => {};

  const toggle = () => {
    let popup = document.getElementById(`popup-project${_id}`);
    popup.classList.toggle('active');
  };
  return (
    <Fragment>
      <div className='glass-panel'>
        <i className='fas fa-expand-arrows-alt' onClick={toggle}></i>
        <h1>{name}</h1>
        <div className='usrdescription'>{description}</div>
        <div className='glass-toolbar' style={{ display: 'flex' }}>
          <i className='far fa-thumbs-up ' onClick={likeproject}></i>
          <i className='far fa-thumbs-down ' onClick={dislikeproject}></i>
        </div>
      </div>

      {/* pop up */}

      <div id={`popup-project${_id}`}>
        <i
          className='fas fa-window-close'
          style={{ fontSize: '2rem' }}
          onClick={toggle}
        ></i>
        <div className='heading' style={{ width: '10%' }}>
          <h2>{name}</h2>
        </div>

        <h3>Autor: {Author.name} </h3>
        <h2>Description</h2>
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
        <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
          <i
            className='fab fa-github'
            style={{ float: 'left', fontSize: '2rem' }}
          ></i>
        </a>
      </div>
    </Fragment>
  );
}

export default Projects;
