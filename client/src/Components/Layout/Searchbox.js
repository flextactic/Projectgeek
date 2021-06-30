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
        <div class='input-container' style={{ width: '100%' }}>
          <i
            className='fas fa-search icon'
            style={{
              height: '30px',
              transform: 'translateX(30px)',
            }}
          ></i>
          <input
            className='Search-styling'
            ref={text}
            type='text'
            placeholder='Filter Projects...'
            onChange={onChange}
            style={{ color: '#4facfe' }}
          ></input>
        </div>
      </form>
    </Fragment>
  );
};

export default Searchbox;
