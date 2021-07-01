import React, { Fragment, useContext, useState, useEffect } from 'react';
import './Requireduserprojects.css';
import Requireduserproject from './Requireduserproject';
import ProjectContext from '../../context/project/projectContext';
const Requireduserprojects = () => {
  const projectContext = useContext(ProjectContext);

  const { required } = projectContext;

  return (
    <Fragment>
      {required.map((require) => (
        <Requireduserproject require={require} />
      ))}
    </Fragment>
  );
};

export default Requireduserprojects;
