import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Userdata from './Components/Userdata';
import Navbar from './Components/Layout/Navbar';
import Home from './Components/Layout/Homepage';
// import Login from './Components/Loginpage';
import './App.css';

class App extends Component {
  state={
    user:[
      {username:"JOHN" ,avatar:"https://www.slashfilm.com/wp/wp-content/images/avatar-2-story.jpg",github:""},
    ],
  }
  render(){
    return(
      <Fragment>
        {/* <Login/> */}
        <Navbar/>
        <Home/>
        {/* <Userdata userinfo={this.state.user}/> */}
      </Fragment>
    );
  }
}

export default App;
