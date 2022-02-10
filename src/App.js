import React, { Component } from 'react';
import './App.css';
import Person from './Components/person';

class App extends Component{
  state={
    persons:[
      {firstname:"Armin",lastname:"parnian",age:"22"}
    ]
  }
change = ()=>{
  this.setState({
    persons:[
      {firstname:"Pouya",lastname:"rajabi",age:"21"}
    ]
  })
}
  render(){
    return (
      <div className="App">
        <h1>Armin Parnian</h1>
        <hr />
        <Person firstname={`${this.state.persons[0].firstname}`}
         lastname={`${this.state.persons[0].lastname}`} 
         age={`${this.state.persons[0].age}`}/>
      <button className="btn" onClick={this.change}>change</button>
      </div>
    );
  }
}

export default App;