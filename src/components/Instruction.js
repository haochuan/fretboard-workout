import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

const style = {
  fontSize: 14
};

class Instruction extends Component {
  render() {
    // console.log('progress: ', progress);
    return (
      <div className="App-instruction">
        <List>
          <Subheader>One-String notes practice</Subheader>
          <ListItem
            primaryText="Choose a string, every time when you see a random note on the screen, play the note on your guitar"
            style={style}
          />
          <Divider inset={true} />
          <ListItem
            primaryText="You can change the duration of changing the notes"
            style={style}
          />
          <Divider inset={true} />
          <ListItem
            primaryText="You can select seeing a note one time, or three notes one time"
            style={style}
          />
        </List>
      </div>
    );
  }
}

export default Instruction;
