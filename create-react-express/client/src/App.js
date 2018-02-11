import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          This is where I will put all of the components and details of the app.
        </p>
        <Nav />
        <Jumbotron />
      </div>
    );
  }
}

export default App;
