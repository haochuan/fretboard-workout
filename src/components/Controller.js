import React, { Component } from 'react';
import Toggle from 'material-ui/Toggle';

const styles = {
  toggle: {
    marginBottom: 16,
  },
  label: {
    color: '#fff'
  }
};

class Controller extends Component {
  render() {
    return (
      <div className="App-controller">
        <Toggle
          label=" "
          style={styles.toggle}
          labelStyle={styles.label}
          onToggle={this.props.toggle}
        />
      </div>
    );
  }
}

export default Controller;
