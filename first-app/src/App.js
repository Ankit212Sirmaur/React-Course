// import { useState } from 'react';
import './App.css';
// import MakingRoutes from './component/router and Navigation/MakingRoutes';
// import DoSome from './component/Form/DoSome';
// import Counter from './component/Counter';
import Child1 from './component/ReactRedux/component/Child1';
import Child2 from './component/ReactRedux/component/Child2';
// import Fruit from './component/Fruit';
// import InputFruit from './component/InputFruit';
// import Notes from './component/Notes';
// import Child1 from './component/Child1';
// import Child2 from './component/child2';
// import UserForm from './component/Form/UserForm';
// import Select from './component/Form/Select';
// import FocusInput from './component/Form/FocusInput';
// import UseEffect from './component/React-LifeCycleEvents/UseEffect';
// import NewsApp from './component/NewApp/NewsApp';


function App() {
  // const [countinParent, setcountinParent] = useState(0);
  
  // function updatecountUpdate(count){
  //   setcountinParent(count);
  // }
  return (
    <div className="App">
      <Child1/>
      <Child2/>
      {/* <Counter/> */}
      {/* <Fruit/> */}
      {/* <InputFruit/> */}
      {/* <Notes/> */}
      {/* <Child1 oncountupdate = {updatecountUpdate} />
      <Child2  getvaluefromparent = {countinParent} /> */}
      {/* <UserForm /> */}
      {/* <Select/> */}
      {/* <FocusInput/> */}
      {/* < UseEffect /> */}
      {/* <NewsApp/> */}
      {/* <Practise/> */}
      {/* <DoSome /> */}
      {/* <MakingRoutes/> */}
    </div>
  );
}

export default App;
