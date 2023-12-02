import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const heading = <h1>heading 1</h1>
// const container = <div>
//   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, eius.</p>
//   <h2>heading 2</h2>
// </div>

const a = 5+2;
const container = (
  <div>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quidem?</p>
    <h2>heading 2 is {a}</h2>
  </div>
)

root.render(
  container
);


