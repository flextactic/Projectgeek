import {React, Fragment} from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="main-footer">
        <div className="footer-container">
          <div className="row">
            {/* Column1 */}
            <div className="col">
              <h4>ABOUT US</h4>
              <h1 className="list-unstyled">
                <li>dd</li>
                <li>ans</li>
                <li>kri</li>
              </h1>
            </div>
            {/* Column2 */}
            <div className="col">
              <h4>heading</h4>
              <ui className="list-unstyled">
                <li>xD</li>
                <li>PP</li>
                <li>Dx</li>
              </ui>
            </div>
            {/* Column3 */}
            <div className="col">
              <h4>Heading</h4>
              <ui className="list-unstyled">
                <li>no1</li>
                <li>no2</li>
                <li>no3</li>
              </ui>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} THIS IS MINE | All rights reserved |
              Terms Of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    )
}

export default Footer;
