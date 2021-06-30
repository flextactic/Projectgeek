import React, { Fragment, useContext, useRef, useEffect } from 'react';
import './Searchbox.css';
import ProjectContext from '../../context/project/projectContext';
const Searchbox = () => {
  const projectContext = useContext(ProjectContext);

  const text = useRef('');

  const { filterProject, clearFilter, filtered } = projectContext;

  useEffect(() => {
    if (filtered === null) text.current.value = '';
  });

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterProject(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <Fragment>
      <form>
        <input
          ref={text}
          type='text'
          placeholder='Filter Projects...'
          onChange={onChange}
        />
      </form>
    </Fragment>
  );
};

export default Searchbox;
