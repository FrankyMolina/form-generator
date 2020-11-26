import React from 'react';
import ReactDOM from 'react-dom';

import GlobalState from './components/GlobalState';
import App from './App';

import './styles/index.scss';
import './styles/reset.scss';

ReactDOM.render(
  <GlobalState>
    <App />
  </GlobalState>,
  document.getElementById('root')
);
