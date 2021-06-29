import React, { Fragment, useContext, useState } from 'react';
import './Requireduserprojects.css';
import Requireduserproject from './Requireduserproject';
import ProjectContext from '../../context/project/projectContext';
const Requireduserprojects = () => {
  const projectContext = useContext(ProjectContext);

  const { addProject, required } = projectContext;

  const [project, setProject] = useState({
    tags: '',
    name: '',
    requirement: '',
    url: '',
  });

  const { tags, name, requirement, url } = project;

  const onChange = (e) =>
    setProject({ ...project, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    toggledit();
    addProject(project);
    setProject({
      tags: '',
      name: '',
      requirement: '',
      url: '',
    });
  };

  const toggledit = () => {
    var popup = document.getElementById('popup-requiredfield');
    popup.classList.toggle('active');
  };

  return (
    <Fragment>
      {required.map((require) => (
        <Requireduserproject require={require} />
      ))}
      {/* popup for edit project */}
      <div id='popup-requiredfield'>
        <i className='fas fa-window-close' onClick={toggledit}></i>
        <form className='profile-form1' onSubmit={onSubmit}>
          <input
            type='text'
            placeholder='Project Title'
            name='name'
            value={name}
            onChange={onChange}
          />
          <input
            type='text'
            placeholder='Enter Project Tags with , in between'
            name='tags'
            value={tags}
            onChange={onChange}
          />
          <input
            type='url'
            placeholder='Project GithubUrl'
            name='url'
            value={url}
            onChange={onChange}
          />
          <textarea
            type='text'
            placeholder='Requirement'
            name='requirement'
            value={requirement}
            onChange={onChange}
          />
          hange={onChange}
          <input type='submit' />
        </form>
      </div>
    </Fragment>
  );
};

export default Requireduserprojects;
