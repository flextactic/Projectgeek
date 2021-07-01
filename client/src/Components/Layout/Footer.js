import { React } from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer
      className='page-footer blue center-on-small-only'
      style={{
        background: 'linear-gradient(to bottom, #0082e6, #023f70, #023257)',
      }}
    >
      <div
        className='container-fluid'
        style={{ display: 'flex', flex: 'flexWrap' }}
      >
        <div className='row' style={{ width: '100%' }}>
          <div className='' style={{ width: '600px' }}>
            <h5 className='title'>Contact US</h5>
            <p>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-google-plus-g'></i>
              <i className='fab fa-linkedin-in'></i>
              <i className='fab fa-buffer'></i>
            </p>
          </div>
          <div className='' style={{ width: '400px' }}>
            <h5 className='title' style={{ marginBottom: '20px' }}>
              Made With <i className='fas fa-heart'></i>
            </h5>
            <ul>
              <li>
                <p>Anshul Sharma</p>
              </li>
              <li>
                <p>Krishan Mishra</p>
              </li>
              <li>
                <p>Drishtdyumn Shrivastava</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className='footer-copyright'>
        <div className='container-fluid'>
          ProjectGeek &copy;{new Date().getFullYear()} All Rights Reserved |
          Terms Of Service | Privacy
        </div>
      </div>
    </footer>
  );
};

export default Footer;
