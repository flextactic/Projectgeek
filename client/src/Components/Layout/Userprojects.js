import React, { Fragment, useContext, useState, useEffect } from 'react';
import Userproject from './Userproject';
import Searchbar from './Searchbox';
import './Userprojects.css';
import ProjectContext from '../../context/project/projectContext';

const Userprojects = () => {
  const projectContext = useContext(ProjectContext);

  const { addProject, projects, filtered } = projectContext;

  const [project, setProject] = useState({
    tags: '',
    name: '',
    description: '',
    githubUrl: '',
  });

  if (projects.length === 0) {
    return <h3>Please Add Some Projects</h3>;
  }

  const { tags, name, description, githubUrl } = project;

  const onChange = (e) =>
    setProject({ ...project, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    toggleproject();
    e.preventDefault();
    toggleproject();
    addProject(project);
    setProject({
      tags: '',
      name: '',
      description: '',
      githubUrl: '',
    });
  };

  const toggleproject = () => {
    var popup = document.getElementById('popup-projectfield');
    popup.classList.toggle('active');
  };

  return (
    <Fragment>
      <div className='empty'></div>
      <Searchbar />
      <i
        className='fas fa-plus-circle'
        style={{
          margin: '30px 0 0 5%',
          cursor: 'pointer',
          display: 'block',
          fontSize: '3em',
          width: '50px',
        }}
        onClick={toggleproject}
      ></i>{' '}
      {filtered !== null
        ? filtered.map((usrproject) => <Userproject usrproject={usrproject} />)
        : projects.map((usrproject) => <Userproject usrproject={usrproject} />)}
      {/* popup for edit project */}
      <div id='popup-projectfield'>
        <i className='fas fa-window-close' onClick={toggleproject}></i>
        <form className='profile-form2' onSubmit={onSubmit}>
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
            name='githubUrl'
            value={githubUrl}
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

export default Userprojects;
