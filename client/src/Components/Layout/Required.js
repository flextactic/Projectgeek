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
        <h1>C1</h1>
        <p>
          Glassmorphism is achieved using transparency and background blur to
          get a frosted-glass like effect.
        </p>
        <div className='requiredglass-toolbar' style={{ display: 'flex' }}>
          <i className='far fa-thumbs-up '></i>
          <i className='far fa-thumbs-down '></i>
        </div>
      </div>
      <div id='requiredpopup-project'>
        <i class='fas fa-window-close' onClick={toggle}></i>
        <h2>popup</h2>
        <h3>Autor: </h3>
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
          assumenda?
        </p>
        <h3>Requirement</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          assumenda quasi fugit debitis ab praesentium repudiandae eaque,
          dolorem nemo obcaecati temporibus ducimus similique distinctio,
          doloribus molestias! Numquam maxime sapiente amet? Ex, quasi sunt
          tempora reiciendis ratione eaque voluptatum nisi cupiditate voluptate
          veniam deleniti omnis quibusdam aperiam debitis cum perspiciatis
          corrupti. At, consequuntur eligendi voluptates dolor possimus atque.
          Nemo, quam culpa.
        </p>
        <h2>Tags</h2>
        <div
          className='requiredprojectags'
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          <Tag />
        </div>
        <br />
        <br />
        <i class='fab fa-github' style={{ float: 'left', fontSize: '1.6em' }}>
          {' '}
          GithubUrl
        </i>
      </div>
    </Fragment>
  );
};

export default Required;
