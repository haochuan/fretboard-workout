import React, { Component } from 'react';
import LinearProgress from 'material-ui/LinearProgress';

class Timer extends Component {
  render() {
    const {duration, currentTime} = this.props;
    const progress = Math.floor(((currentTime + 1) / duration) * 100);
    // console.log('progress: ', progress);
    return (
      <div className="App-timer">
        <LinearProgress mode="determinate" value={progress}/>
      </div>
    );
  }
}

export default Timer;
