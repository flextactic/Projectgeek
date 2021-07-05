import React, { Fragment, useContext, useState, useEffect } from 'react';
import './Requireduserproject.css';
import ProjectContext from '../../context/project/projectContext';
import Tag from '../Tags';
const Requireduserproject = (props) => {
  const projectContext = useContext(ProjectContext);

  const {
    deleteRequired,
    setCurrentreq,
    clearCurrent,
    updateRequired,
    current,
  } = projectContext;

  const { require } = props;

  const { _id, description, name, tags, githubUrl } = require;

  const [requiredetail, setRequiredetail] = useState({
    _id: '',
    description: '',
  });

  useEffect(() => {
    if (current !== null) {
      setRequiredetail(current);
    } else {
      setRequiredetail({
        description: '',
      });
    } //eslint-disable-next-line
  }, [projectContext, current]);

  const toggle = () => {
    var popup = document.getElementById(`popup-requiredproject${_id}`);
    popup.classList.toggle('active');
  };

  const toggledit = () => {
    var popup = document.getElementById(`popup-requiredfield${_id}`);
    popup.classList.toggle('active');
  };

  const onSubmit = (e) => {
    toggledit();
    e.preventDefault();
    updateRequired(requiredetail);
    setRequiredetail({
      description: '',
    });
  };

  const onChange = (e) =>
    setRequiredetail({
      ...requiredetail,
      _id: _id,
      [e.target.name]: e.target.value,
    });

  const onDelete = () => {
    deleteRequired(_id);
    clearCurrent();
  };

  const onCall = () => {
    setCurrentreq(require);
    toggledit();
  };

  return (
    <Fragment>
      <div className='user-glasspanel'>
        <i className='fas fa-expand-arrows-alt' onClick={toggle}></i>
        <h1 style={{ color: '#00f2fe' }}>{name}</h1>
        <div className='usrdescription'>{description}</div>
        <div className='user-glasstoolbar' style={{ display: 'flex' }}>
          <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-github'> </i>
          </a>
          <div
            className='subtoolbar'
            style={{ display: 'flex', flexDirection: 'row-reverse' }}
          >
            <i className='fas fa-edit' onClick={onCall}></i>
            <i className='fas fa-trash' onClick={onDelete}></i>
          </div>
        </div>
      </div>

      {/* popup for project desc */}
      <div id={`popup-requiredproject${_id}`}>
        <i className='fas fa-window-close' onClick={toggle}></i>
        <h2 style={{ color: '#00f2fe' }}>{name}</h2>
        <h3 style={{ color: '#00f2fe' }}>DESCRIPTION</h3>
        <p>{description}</p>
        <h2 style={{ color: '#00f2fe' }}>TAGS</h2>
        <div
          className='projectags'
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          {tags && tags.map((tag) => <Tag tag={tag} />)}
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

      {/* popup for edit project */}
      <div id={`popup-requiredfield${_id}`}>
        <i className='fas fa-window-close' onClick={toggledit}></i>
        <form className='profile-form1' onSubmit={onSubmit}>
          <textarea
            type='text'
            placeholder='Requirement'
            name='description'
            value={requiredetail.description}
            onChange={onChange}
          />
          <input type='submit' />
        </form>
      </div>
    </Fragment>
  );
};

export default Requireduserproject;
