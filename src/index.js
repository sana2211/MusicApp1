import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import Dashboard from './components/Dashboard';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
      <Route exact={true} path="/"><App /></Route>
      <Route path="/signin"><SignIn></SignIn></Route>
      <Route path="/signup"><SignUp></SignUp></Route>
      <Route path="/dashboard"><Dashboard></Dashboard></Route>
    </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
