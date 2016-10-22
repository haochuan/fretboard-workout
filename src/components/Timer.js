import React, { Component } from 'react';
import LinearProgress from 'material-ui/LinearProgress';

const style = {
  width: '80%',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  fontSize: '100'
};

class Timer extends Component {
  constructor(props) {
    super(props);
  }

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
