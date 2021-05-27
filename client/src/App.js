import React, { Component } from 'react';
import Userdata from './Components/Userdata';
import './App.css';
import Homepage from './Components/Homepage';

class App extends Component {
  state={
    user:[
      {username:"john" ,avatar:"",github:""},
      {username:"conner" ,avatar:"",github:""},
      {username:"steph" ,avatar:"",github:""}
    ],
  }
  render(){
    return(
      <div>
        <Userdata userinfo={this.state.user}/>
        
      </div>
    );
  }
}

export default App;
