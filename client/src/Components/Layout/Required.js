import React, { Fragment } from 'react';
import './Required.css';
import Tag from '../Tags';
const Required = (props) => {
  const { key, required } = props;

  const { authorID, _id, description, projectID, like, dislike } = required;

  const { tags, name, githubUrl } = projectID;

  const toggle = () => {
    var popup = document.getElementById(`requiredpopup-project${_id}`);
    popup.classList.toggle('active');
  };
  return (
    <Fragment>
      <div className='empty'></div>
      <div className='requiredglass-panel'>
        <i class='fas fa-expand-arrows-alt' onClick={toggle}></i>
        <h1>{name}</h1>
        <div className='usrdescription'>{description}</div>
        <div className='requiredglass-toolbar' style={{ display: 'flex' }}>
          <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
            <i
              className='fab fa-github'
              style={{ float: 'left', fontSize: '2rem' }}
            ></i>
          </a>
        </div>
      </div>

      {/* popup */}
      <div id={`requiredpopup-project${_id}`}>
        <i
          class='fas fa-window-close'
          onClick={toggle}
          style={{ fontSize: '2rem' }}
        ></i>
        <h2>{name}</h2>
        <h3>Autor: {authorID.name}</h3>
        <h2>Requirement</h2>
        <p>{description}</p>
        <h2>Tags</h2>
        <div
          className='requiredprojectags'
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
};

export default Required;
