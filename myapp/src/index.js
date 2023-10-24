import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const name = "Jay Prakash";
const spacing = {
  letterSpacing: '0.3rem'
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1 className='fa fa-solid ' style={spacing}>Hello! {name}</h1>
  </React.StrictMode>
);

