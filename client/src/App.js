import React, { Component } from "react";
import "./App.css";
import results from "./components/results";
import search from "./components/search";
import saved from "./components/saved"; 
import * as api from './utils/api.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class App extends Component {
  constructor (props){
    super (props)
  }
  
  this.state = {
    topic: null,
    results: [],
    saved: []
  }
  handleInputChange = (event) => {
    const { value, name } = event.target
    this.setState({
      [name] : value
    })
  }
  onSubmitFrom = () => {

  }
  
  componentDidMount() {
    
  }
  render() {
    return (
      <div className="App">
        <Search onHandleInput={handleInputChange} />
        <Results />
        <ul> 
            <li>Response from..</li>
            <li>search will go here.</li>
        </ul>
      </div>
    );
  }
}

export default App;




