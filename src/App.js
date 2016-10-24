import React, { Component } from 'react';
import './App.css';
import Timer from './components/Timer';
import Instruction from './components/Instruction';
import Chord from './components/Chord';
import Controller from './components/Controller';

// const INTERVAL = 1; // 1 sec

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chord: ['C'], 
      scheduler: null, 
      lastChord: [], 
      duration: 3, 
      sequence: false,
      currentTime: 0
    };
    this.getRandomInt = this.getRandomInt.bind(this);
    this.toggle = this.toggle.bind(this);
    this.scheduler = this.scheduler.bind(this);
    this.changeDuration = this.changeDuration.bind(this);
    this.sequenceToggle = this.sequenceToggle.bind(this);
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  changeDuration(time) {
    this.setState({duration: time});
  }

  scheduler() {
    const {currentTime, duration} = this.state;
    if (currentTime === duration - 1) {
      const lastChord = this.state.lastChord;
      const chordLibrary = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
      let nextChords = [];
      if (this.state.sequence) {
        // if showing a sequence of chords     
        for (let i = 0; i < 3; i++) {
          let randomNumber = this.getRandomInt(0, chordLibrary.length - 1);
          nextChords.push(chordLibrary[randomNumber]);
        }
      } else {
        // for single chord
        let randomNumber = this.getRandomInt(0, chordLibrary.length - 1);
        // make sure not showing the same chord twice
        while (lastChord.indexOf(chordLibrary[randomNumber]) > -1) {
          randomNumber = this.getRandomInt(0, chordLibrary.length - 1);
        }
        nextChords.push(chordLibrary[randomNumber]);
      }
      this.setState({chord: nextChords, lastChord: nextChords, currentTime: 0});
    } else {
      this.setState({currentTime: currentTime + 1});
    }

    // setTimeout(this.scheduler, 1000);
  }

  toggle() {
    if (this.state.scheduler) {
      clearInterval(this.state.scheduler);
      this.setState({chord: ['C'], scheduler: null, lastChord: [], currentTime: 0});
    } else {
      this.setState({scheduler: setInterval(this.scheduler, 1000)});
    }
  }

  sequenceToggle() {
    if (this.state.sequence) {
      this.setState({sequence: false});
    } else {
      this.setState({sequence: true});
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
        <Instruction />
        <div className="App-footer">
          <Controller 
            toggle={this.toggle} 
            changeDuration={this.changeDuration}
            sequenceToggle={this.sequenceToggle}
          />
        </div>
      </div>
    );
  }
}

export default App;
