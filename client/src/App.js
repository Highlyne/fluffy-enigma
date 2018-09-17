import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import ScrapeBtn from './components/ScrapeBtn/ScrapeBtn';

class App extends Component {
  
    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    handleFormSubmit = event => {
      event.preventDefault();
     
        // API.saveBook({
        //   title: this.state.title,
        //   author: this.state.author,
        //   synopsis: this.state.synopsis
        // })res => this.loadBooks()
       
        console.log("Scrape button is ready to run function");     
    };
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          This is where I will put all of the components and details of the app.
        </p>
        <Nav />
        <ScrapeBtn onClick={this.handleFormSubmit}/>
        <Jumbotron />
      </div>
    );
  }
}

export default App;
