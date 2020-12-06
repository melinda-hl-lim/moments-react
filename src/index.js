import React from 'react';
import ReactDOM from 'react-dom';
import 'fontsource-quicksand';
import './assets/main.css';
import App from './containers/App';
import makeServer from './server';

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
