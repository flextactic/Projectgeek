import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Userdata from './Components/Userdata';
import './App.css';
import Navbar from './Components/Layout/Navbar';

class App extends Component {
  state={
    user:[
      {username:"JOHN" ,avatar:"https://www.slashfilm.com/wp/wp-content/images/avatar-2-story.jpg",github:""},
    ],
  }
  render(){
    return(
      <div>
        <Navbar/>
        {/* <Userdata userinfo={this.state.user}/> */}
      </div>
    );
  }
}

export default App;
