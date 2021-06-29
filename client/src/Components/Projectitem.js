import React, { Fragment, useEffect, useContext } from 'react';
import Project from './Projects';
import ProjectContext from '../context/project/projectContext';
import './Projectitem.css';
function Projectitem() {
  const projectContext = useContext(ProjectContext);

  const { showProject, projectary } = projectContext;

  useEffect(() => {
    showProject();
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div className='empty'></div>
      <div
        className='projectcontainer'
        style={{ display: 'flex', flexWrap: 'wrap' }}
      >
        {projectary.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </Fragment>
  );
}

export default Projectitem;
