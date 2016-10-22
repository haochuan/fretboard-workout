import React, { Component } from 'react';
import Toggle from 'material-ui/Toggle';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  toggle: {
    top: 18,
  },
  label: {
    color: '#000'
  },
  dropdown: {
    width: 200
  }
};

class Controller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 3,
    };
  }

  durationHandler = (event, index, value) => {
    this.setState({duration: value});
    this.props.changeDuration(value);
  }
  
  render() {
    return (
      <div className="App-controller App-row">
        <div className="row">
            <div className="col-xs-6
                        col-sm-6
                        col-md-6
                        col-lg-6">
                <DropDownMenu
                  value={this.state.duration}
                  onChange={this.durationHandler}
                  style={styles.dropdown}
                  autoWidth={false}
                >
                  <MenuItem value={1} primaryText="1" />
                  <MenuItem value={2} primaryText="2" />
                  <MenuItem value={3} primaryText="3" />
                  <MenuItem value={4} primaryText="4" />
                  <MenuItem value={5} primaryText="5" />
                </DropDownMenu>
            </div>
            <div className="col-xs-6
                        col-sm-6
                        col-md-6
                        col-lg-6">
              <Toggle
                label="On/Off"
                style={styles.toggle}
                labelStyle={styles.label}
                onToggle={this.props.toggle}
              />
            </div>
        </div>
      </div>
    );
  }
}

export default Controller;
