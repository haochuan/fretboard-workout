import React, { Component } from 'react';
import './App.css';

import Chord from './components/Chord';
import Controller from './components/Controller';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {chord: 'C', start: false};
    this.getRandomInt = this.getRandomInt.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  toggle() {
    if (this.state.start) {
      clearInterval(this.state.start);
      this.setState({start: null});
    } else {
      this.setState({start: setInterval(() => {
        var chordLibrary = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        var randomNumber = this.getRandomInt(0, chordLibrary.length - 1);
        this.setState({chord: chordLibrary[randomNumber]});
      }, 3000)});
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Fretboard Workout</h2>
        </div>
        <Chord chord={this.state.chord} />
        <div className="App-footer">
          <Controller toggle={this.toggle}/>
        </div>
      </div>
    );
  }
}

export default App;
