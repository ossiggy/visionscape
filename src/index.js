import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import './grid.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
      <App />
    </Router>
, document.getElementById('root'));
registerServiceWorker();
