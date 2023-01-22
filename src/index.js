import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import News from './News-add';
import Events from './Events';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Events />
  </React.StrictMode>
);

reportWebVitals();
