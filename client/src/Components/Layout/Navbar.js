import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import AuthContext from '../../context/auth/authContext';
import ProjectContext from '../../context/project/projectContext';
const Navbar = () => {
  const authContext = useContext(AuthContext);

  const projectContext = useContext(ProjectContext);

  const toggle = () => {
    var popup = document.getElementById('nav-bar');
    popup.classList.toggle('active');
  };

  const { logout, isAuthenticated } = authContext;

  const { clearUser } = projectContext;

  const onLogout = () => {
    logout();
    clearUser();
  };
  const reguser = (
    <Fragment>
      <li>
        <Link
          to='/projects'
          style={{ textDecoration: 'none' }}
          onClick={toggle}
        >
          PROJECTS
        </Link>
      </li>
      <li>
        <Link
          to='/required'
          style={{ textDecoration: 'none' }}
          onClick={toggle}
        >
          REQUIREMENT
        </Link>
      </li>
      <li>
        <Link to='/profile' style={{ textDecoration: 'none' }} onClick={toggle}>
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
        <Link to='/' style={{ textDecoration: 'none' }} onClick={toggle}>
          HOME
        </Link>
      </li>
      <li>
        <Link to='/login' style={{ textDecoration: 'none' }} onClick={toggle}>
          LOGIN/REGISTER
        </Link>
      </li>
    </Fragment>
  );

  return (
    <nav>
      <input type='checkbox' id='check' />
      <label for='check' className='checkbtn'>
        <i className='fa fa-bars' onClick={toggle}></i>
      </label>
      <label className='logo'>ProjectGeek</label>
      <ul id='nav-bar'>{isAuthenticated ? reguser : guestuser}</ul>
    </nav>
  );
};
export default Navbar;
