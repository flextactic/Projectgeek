import React, { Fragment } from 'react';
import './Tags.css';
const Tags = (props) => {
  const { tag } = props;
  return (
    <Fragment>
      <div className='tag'>{tag}</div>
    </Fragment>
  );
};

export default Tags;
