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
// use paranthesis ()if you have to go in multiple line of code
// and  curly {} used to write js expression like importing 
// const container = ( 
//   <div>
//     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quidem?</p>
//     <h2 style={heading}>heading 2 is {a}</h2>
//     <p className='para'>Lorem ipsum dolor sit amet.</p>
//   </div>
// )

// let check = false;
// function myclock() {
//   root.render(
//     <div>
//       <p>{new Date().toLocaleTimeString()}</p>
//       <h2>heading 2</h2>
//       {/* 
//         it render only above because it changing every second some updation happend 
//         not heading 
//        */}
//        {/* conditional statement like to render  */}
//        <p> if it is true then have to render it {check ? "hi" : "bye  "} </p>
//     </div>
//   );
//   setTimeout(myclock, 1000);
// }

// myclock();

// root.render(
//   myclock
// );



// function FirstComponent(){  // this is like custom component can be reuse many times
//   return(
//     <div>
//       <h1>heading 1</h1>
//       <p> Lorem, ipsum.</p>
//     </div>
//   );
// }

function SecondComponet(props) {
  return (
    <div>
      <p> Lorem ipsum dolor sit and passing props is : {props.name}
      <p> age is {props.age} and mail id : {props.email} </p>
      </p>
    </div>
  )
}

// class based component
// class Welcome extends React.Component {
//   render() {
//     return <h1> hello, </h1>
//   }
// }

function Card({name, ...props}){
  return (
    <div>
      <Avatar image = {props.image} />
      <p> {name}</p> <hr />
      <p> {props.age} </p>
    </div>
  )
}

function Avatar(props){
  return(
    <img src= {props.image} alt= {props.name} />
  )
}

const myankit = 'kumar';
root.render(
  <>
    {/* <FirstComponent/> 
  <SecondComponet/>
  
  <FirstComponent/> 
  <SecondComponet/> */}

    {/* <SecondComponet name = 'ankit'/>
    <SecondComponet name = {myankit}/>

    <SecondComponet age = '21' email = 'ankit12@gmail.com'/>  */}
    <Card name = "ankit" age = "21" image = 'https://via.placeholder.com/200'/>
  </>
);