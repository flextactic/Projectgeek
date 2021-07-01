import { React, Fragment } from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer
      className='page-footer blue center-on-small-only'
      style={{
        background: 'linear-gradient(to bottom, #0082e6, #023f70, #023257)',
      }}
    >
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6'>
            <h5 className='title'>Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </div>
          <div className='col-md-3'>
            <h5 className='title'>Links</h5>
            <ul>
              <li>
                <a href='#!'>Link 1</a>
              </li>
              <li>
                <a href='#!'>Link 2</a>
              </li>
              <li>
                <a href='#!'>Link 3</a>
              </li>
              <li>
                <a href='#!'>Link 4</a>
              </li>
            </ul>
          </div>
          <div className='col-md-3'>
            <h5 className='title'>Links</h5>
            <ul>
              <li>
                <a href='#!'>Link 1</a>
              </li>
              <li>
                <a href='#!'>Link 2</a>
              </li>
              <li>
                <a href='#!'>Link 3</a>
              </li>
              <li>
                <a href='#!'>Link 4</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className='footer-copyright'>
        <div className='container-fluid'>
          &copy;{new Date().getFullYear()} THIS IS MINE | All rights reserved |
          Terms Of Service | Privacy
        </div>
      </div>
    </footer>
  );
};

export default Footer;
