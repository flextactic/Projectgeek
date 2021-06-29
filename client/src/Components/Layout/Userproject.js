import React, { Fragment, useContext, useEffect, useState } from 'react';
import './Userproject.css';
import Tag from '../Tags';
import ProjectContext from '../../context/project/projectContext';

const Userproject = (props) => {
  const projectContext = useContext(ProjectContext);

  const {
    deleteProject,
    setCurrent,
    clearCurrent,
    updateProject,
    current,
    addRequired,
  } = projectContext;

  const { usrproject, key } = props;

  const { _id, tags, name, description, githubUrl } = usrproject;

  useEffect(() => {
    if (current !== null) {
      setProjectdetail(current);
    } else {
      setProjectdetail({
        name: '',
        description: '',
        githubUrl: '',
      });
    }
  }, [projectContext, current]);

  const toggle = () => {
    var popup = document.getElementById(`popup-userproject${_id}`);
    popup.classList.toggle('active');
  };

  const toggleproject = () => {
    var popup = document.getElementById(`popup-projectfield${_id}`);
    popup.classList.toggle('active');
  };

  const [projectdetail, setProjectdetail] = useState({
    _id: '',
    name: '',
    description: '',
    githubUrl: '',
  });

  const onSubmit = (e) => {
    toggleproject();
    e.preventDefault();
    console.log(projectdetail);
    updateProject(projectdetail);
    setProjectdetail({
      name: '',
      description: '',
      githubUrl: '',
    });
  };

  const onChange = (e) =>
    setProjectdetail({ ...projectdetail, [e.target.name]: e.target.value });

  const onDelete = () => {
    deleteProject(_id);
    clearCurrent();
  };

  const onCall = () => {
    setCurrent(usrproject);
    toggleproject();
  };

  const clearAll = () => {
    clearCurrent();
  };

  const change = () => {
    setProjectdetail({ _id: _id, description: description });
    addRequired(setProjectdetail);
    setProjectdetail({ _id: '', description: '' });
  };

  return (
    <Fragment>
      <div className='user-glasspanel'>
        <i className='fas fa-expand-arrows-alt' onClick={toggle}></i>
        <h1>{name}</h1>
        <p>{description}</p>
        <button
          style={{ padding: '2px 5px', borderRadius: '5px' }}
          onclick={change}
        >
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
      <div id={`popup-userproject${_id}`}>
        <i
          className='fas fa-window-close'
          onClick={toggle}
          style={{ fontSize: '2rem' }}
        ></i>
        <h2>{name}</h2>
        <h3>Description</h3>
        <p>{description}</p>
        <h2>Tags</h2>
        <div
          className='projectags'
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          {tags && tags.map((tag) => <Tag tag={tag} />)}
        </div>
        <br />
        <br />
        <i
          className='fab fa-github'
          style={{ float: 'left', fontSize: '1.3rem' }}
        >
          {' ' + githubUrl}
        </i>
      </div>

      {/* popup for edit project */}
      <div id={`popup-projectfield${_id}`}>
        <i className='fas fa-window-close' onClick={toggleproject}></i>
        <form className='profile-form2' onSubmit={onSubmit}>
          <input
            type='text'
            placeholder='Project Title'
            name='name'
            value={projectdetail.name}
            onChange={onChange}
          />
          <input
            type='url'
            placeholder='Project GithubUrl'
            name='githubUrl'
            value={projectdetail.githubUrl}
            onChange={onChange}
          />
          <textarea
            className='desc'
            type='text'
            placeholder='Description'
            name='description'
            value={projectdetail.description}
            onChange={onChange}
          />
          <input type='submit' />
        </form>
      </div>
    </Fragment>
  );
};

export default Userproject;
