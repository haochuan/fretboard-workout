import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

const style = {
  width: '80%',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  fontSize: '100'
};

class Chord extends Component {
  render() {
    return (
      <div className="App-chord">
        <Paper style={style} zDepth={1}>
          {this.props.chord}
        </Paper>
      </div>
    );
  }
}

export default Chord;
