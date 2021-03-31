import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import {ThemeProvider} from 'styled-components';
import {theme} from './themes/theme';


ReactDOM.render(
  <ThemeProvider theme={theme} >
      <App />
  </ThemeProvider>,
  document.getElementById('root')
);


