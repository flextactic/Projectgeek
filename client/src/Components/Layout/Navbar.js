import React, { useContext, Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css';
import AuthContext from '../../context/auth/authContext';
import ProjectContext from '../../context/project/projectContext';
const Navbar = () => {
  const authContext = useContext(AuthContext);

  const projectContext = useContext(ProjectContext);

  const { logout, isAuthenticated, user } = authContext;

  const { clearUser } = projectContext;

  const onLogout = () => {
    logout();
    clearUser();
  };
  const reguser = (
    <Fragment>
      <li>
        <Link to='/projects' style={{ textDecoration: 'none' }}>
          PROJECTS
        </Link>
      </li>
      <li>
        <Link to='/required' style={{ textDecoration: 'none' }}>
          REQUIREMENT
        </Link>
      </li>
      <li>
        <Link to='/profile' style={{ textDecoration: 'none' }}>
          PROFILE
        </Link>
      </li>
      <li>
        {' '}
        <a href='/' style={{ textDecoration: 'none' }} onClick={onLogout}>
          LOGOUT
        </a>
      </li>
    </Fragment>
  );

  const guestuser = (
    <Fragment>
      <li>
        <Link to='/' style={{ textDecoration: 'none' }}>
          HOME
        </Link>
      </li>
      <li>
        <Link to='/login' style={{ textDecoration: 'none' }}>
          LOGIN/REGISTER
        </Link>
      </li>
    </Fragment>
  );

  return (
    <nav>
      <input type='checkbox' id='check' />
      <label for='check' className='checkbtn'>
        <i className='fa fa-bars'></i>
      </label>
      <label className='logo'>ProjectGeek</label>
      <ul>{isAuthenticated ? reguser : guestuser}</ul>
    </nav>
  );
};
export default Navbar;
