import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

const style = {
  width: '20%',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  fontSize: 100
};

class Chord extends Component {
  render() {
    return (
      <div>
        {
          this.props.chord.map((chord, key) => {
            return (
              <Paper style={style} zDepth={1} key={key}>
                {chord}
              </Paper>
            )
          })
        }
      </div>
    );
  }
}

export default Chord;
