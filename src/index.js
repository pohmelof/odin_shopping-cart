import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import RouteSwitch from './RouteSwitch';
import { Route } from 'react-router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouteSwitch />
  </React.StrictMode>
);