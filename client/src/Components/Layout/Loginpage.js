import React, { useState, useContext, useEffect } from 'react';
import './Loginpage.css';
import AuthContext from '../../context/auth/authContext';
const Loginpage = (props) => {
  const authContext = useContext(AuthContext);

  const { register, login, error, clearErrors, isAuthenticated } = authContext;

  // useEffect(()=> {
  //   if(isAuthenticated){
  //     props.history.push('/profile');
  //   }

  //   // if(error==='User already registered.'){
  //   //   setAlert(error,'danger');
  //   //   clearErrors();
  //   // }
  //   //eslint-disable-next-line
  // }, [isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmitsif = (e) => {
    e.preventDefault();
    login({
      email,
      password,
    });
  };

  const onSubmitsuf = (e) => {
    e.preventDefault();
    register({
      name,
      email,
      password,
    });
  };

  window.onload = function () {
    const sign_in_btn = document.querySelector('#sign-in-btn');
    const sign_up_btn = document.querySelector('#sign-up-btn');
    const container = document.querySelector('.logincontainer');

    sign_up_btn.addEventListener('click', () => {
      container.classList.add('sign-up-mode');
    });

    sign_in_btn.addEventListener('click', () => {
      container.classList.remove('sign-up-mode');
    });
  };

  return (
    <div className='logincontainer'>
      <div className='forms-container'>
        <div className='signin-signup'>
          <form action='#' className='sign-in-form' onSubmit={onSubmitsif}>
            <h2 className='title'>Sign in</h2>
            <div className='input-field'>
              <i className='fas fa-envelope'></i>
              <input
                type='email'
                name='email'
                value={email}
                onChange={onChange}
                required
                placeholder='Email  '
              />
            </div>
            <div className='input-field'>
              <i className='fas fa-lock'></i>
              <input
                type='password'
                name='password'
                value={password}
                onChange={onChange}
                required
                placeholder='Password'
              />
            </div>
            <input type='submit' value='Login' className='btn solid' />
          </form>
          <form action='#' className='sign-up-form' onSubmit={onSubmitsuf}>
            <h2 className='title'>Sign up</h2>
            <div className='input-field'>
              <i className='fas fa-user'></i>
              <input
                type='text'
                name='name'
                value={name}
                onChange={onChange}
                required
                placeholder='Username'
              />
            </div>
            <div className='input-field'>
              <i className='fas fa-envelope'></i>
              <input
                type='email'
                name='email'
                value={email}
                onChange={onChange}
                required
                placeholder='Email  '
              />
            </div>
            <div className='input-field'>
              <i className='fas fa-lock'></i>
              <input
                type='password'
                name='password'
                value={password}
                onChange={onChange}
                required
                placeholder='Password'
              />
            </div>
            <input type='submit' className='btn' value='Register' />
          </form>
        </div>
      </div>

      <div className='panels-container'>
        <div className='panel left-panel'>
          <div className='content'>
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className='btn transparent' id='sign-up-btn'>
              Sign up
            </button>
          </div>
          <img src='img/log.svg' className='image' alt='' />
        </div>
        <div className='panel right-panel'>
          <div className='content'>
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className='btn transparent' id='sign-in-btn'>
              Sign in
            </button>
          </div>
          <img src='img/register.svg' className='image' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
