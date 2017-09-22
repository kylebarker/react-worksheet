import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'



class App extends Component {
  state = {
    currentName: 'Name',
    newName: ''
  }

  handleChange = (val) => {
    this.setState({ newName: val })
  }

  changeClick = () => {
    this.setState({
      currentName: this.state.newName
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Body
          handleChange = {this.handleChange}
          changeClick = {this.changeClick}
          currentName = {this.state.currentName}
          newName = {this.state.newName}/>
        <Footer />
      </div>
    );
  }
}

export default App;
