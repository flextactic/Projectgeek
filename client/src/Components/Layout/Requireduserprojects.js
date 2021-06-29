import React, { Fragment, useContext, useState } from 'react';
import './Requireduserprojects.css';
import Requireduserproject from './Requireduserproject';
import ProjectContext from '../../context/project/projectContext';
import Tag from '../Tags';
const Requireduserprojects = () => {
  const projectContext = useContext(ProjectContext);

  const { addProject, setCurrentreq, deleteProject, updateProject, profile } =
    projectContext;

  const { projectInRequirement } = profile;

  const [project, setProject] = useState({
    id: '',
    tags: '',
    name: '',
    description: '',
    requirement: '',
    url: '',
  });

  const { id, tags, name, requirement, description, url } = project;

  const onChange = (e) =>
    setProject({ ...project, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    addProject(project);
    setProject({
      id: '',
      tags: '',
      name: '',
      description: '',
      requirement: '',
      url: '',
    });
  };

  const toggledit = () => {
    var popup = document.getElementById('popup-requiredfield');
    popup.classList.toggle('active');
  };

  const prnt = () => {
    toggledit();
  };
  return (
    <Fragment>
      <Requireduserproject key={project.id} project={project} prnt={prnt} />
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
            type='text'
            placeholder='Requirement'
            name='requirement'
            value={requirement}
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
            className='desc'
            type='text'
            placeholder='Description'
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

export default Requireduserprojects;
