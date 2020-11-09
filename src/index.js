import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './containers/App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
