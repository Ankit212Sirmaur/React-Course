import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const heading = <h1>heading 1</h1>
// const container = <div>
//   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, eius.</p>
//   <h2>heading 2</h2>
// </div>

// const heading = {
//   backgroundColor: "green",
//   border: '2px solid red',
//   // justify-content: 'center'
//   textAlign: 'center'
// }

// const a = 5+2;
// const container = (
//   <div>
//     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quidem?</p>
//     <h2 style={heading}>heading 2 is {a}</h2>
//     <p className='para'>Lorem ipsum dolor sit amet.</p>
//   </div>
// )

function myclock() {
  root.render(
    <div>
      <p>{new Date().toLocaleTimeString()}</p>
      <h2>heading 2</h2>
    </div>
  );
  setTimeout(myclock, 1000);
}

myclock();

// root.render(
//   myclock
// );


