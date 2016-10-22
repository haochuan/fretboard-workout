import React, { Component } from 'react';
import './App.css';
import Timer from './components/Timer';
import Chord from './components/Chord';
import Controller from './components/Controller';

// const INTERVAL = 1; // 1 sec

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {chord: 'C', scheduler: null, lastChord: null, duration: 3, currentTime: 0};
    this.getRandomInt = this.getRandomInt.bind(this);
    this.toggle = this.toggle.bind(this);
    this.scheduler = this.scheduler.bind(this);
    this.changeDuration = this.changeDuration.bind(this);
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  changeDuration(time) {
    this.setState({duration: time});
  }

  scheduler() {
    const {currentTime, duration} = this.state;
    // console.log("current time: ", currentTime);
    if (currentTime === duration - 1) {
      const lastChord = this.state.lastChord;
      const chordLibrary = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
      let randomNumber = this.getRandomInt(0, chordLibrary.length - 1);
      // make sure not showing the same chord twice
      while (lastChord === chordLibrary[randomNumber]) {
        randomNumber = this.getRandomInt(0, chordLibrary.length - 1);
      }
      this.setState({chord: chordLibrary[randomNumber], lastChord: chordLibrary[randomNumber], currentTime: 0});
    } else {
      this.setState({currentTime: currentTime + 1});
    }

    // setTimeout(this.scheduler, 1000);
  }

  toggle() {
    if (this.state.scheduler) {
      clearInterval(this.state.scheduler);
      this.setState({chord: 'C', scheduler: null, lastChord: null, currentTime: 0});
    } else {
      this.setState({scheduler: setInterval(this.scheduler, 1000)});
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Fretboard Workout</h2>
        </div>
        <Timer duration={this.state.duration} currentTime={this.state.currentTime}/>
        <Chord chord={this.state.chord} />
        <div className="App-footer">
          <Controller toggle={this.toggle} changeDuration={this.changeDuration}/>
        </div>
      </div>
    );
  }
}

export default App;
