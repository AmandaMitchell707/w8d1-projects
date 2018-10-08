import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import { signup, login, logout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  window.signup = signup;
  window.login = login;
  window.logout = logout;

  const store = configureStore;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to the awesome benches! Take a seat.</h1>, root);
});
