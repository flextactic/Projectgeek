import React, { Fragment, useEffect, useContext } from 'react';
import Required from './Required';
import ProjectContext from '../../context/project/projectContext';
import './Requireditem.css';
const Requireditem = () => {
  const projectContext = useContext(ProjectContext);

  const { showProjectreq, requiredary } = projectContext;

  useEffect(() => {
    showProjectreq();
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div className='empty'></div>
      <div
        className='requiredprojectcontainer'
        style={{ display: 'flex', flexWrap: 'wrap' }}
      >
        {requiredary.map((required) => (
          <Required required={required} />
        ))}
      </div>
    </Fragment>
  );
};

export default Requireditem;
