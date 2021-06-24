import React, { Fragment } from 'react';
import './Required.css';
import Tag from '../Tags';
const Required = (props) => {
  const { required } = props;

  const { name, Author, description, tags, githubUrl, like, dislike } =
    required;

  const likeproject = () => {};

  const dislikeproject = () => {};

  const toggle = () => {
    var popup = document.getElementById('requiredpopup-project');
    popup.classList.toggle('active');
  };
  return (
    <Fragment>
      <div className='empty'></div>
      <div className='requiredglass-panel'>
        <i class='fas fa-expand-arrows-alt' onClick={toggle}></i>
        <h1>{name}</h1>
        <p>{description}</p>
        <div className='requiredglass-toolbar' style={{ display: 'flex' }}>
          <i className='far fa-thumbs-up '></i>
          <i className='far fa-thumbs-down '></i>
        </div>
      </div>
      <div id='requiredpopup-project'>
        <i class='fas fa-window-close' onClick={toggle}></i>
        <h2>popup</h2>
        <h3>Autor: {Author.name}</h3>
        <h3>Requirement</h3>
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
        <i class='fab fa-github' style={{ float: 'left', fontSize: '1.6em' }}>
          {' '}
          {githubUrl}
        </i>
      </div>
    </Fragment>
  );
};

export default Required;
