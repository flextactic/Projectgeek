import  {React, Fragment } from 'react';
import './Homepage.css';
import Userepos from '../Userepos';
import Profilecard from '../profilecard';

export const Homepage = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                  <div className="col"> <br /> </div>
                </div>
              </div>
  <div className="row text-center m-3">
    <div className="col">
      <Profilecard/>
    </div>
    <div className="col">
      2 of 2
    </div>
  </div>
        </Fragment>
    )
}

export default Homepage;