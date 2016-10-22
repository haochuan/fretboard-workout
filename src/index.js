import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App';
import './index.css';

const Main = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

injectTapEventPlugin();

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);