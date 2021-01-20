import React, { Component } from 'react';

import './App.css';
/*import FirstComponent from './components/learning-examples/FirstComponent'
import SecondComponent from './components/learning-examples/SecondComponent'
import ThirdComponent from './components/learning-examples/ThirdComponent'*/
import Counter from './components/counter/Counter'

 
class App extends Component 
{
  render() 
  {
    return   (
     <div classname="App">
     <Counter by={1}/>
     <Counter by={5}/>
     <Counter by={10}/>
     </div>
             );
  }
}

/*class LearningComponents extends Component
{
 render()
  {
    return   (
      <div className="LearningComponents">
      My Hello World
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      </div> );
  }
  }

//Class Component which is called as a nested or "child" component above
//We export these classes from a component folder as shown above
/*class FirstComponent extends Component {
  render() {
    return (
      <div className="firstComponent">
      First Component 
      </div>
    );
  }
}*/

/*class SecondComponent extends Component {
  render() {
    return (
      <div className="secondComponent">
      Second Component 
      </div>
    );
  }
} */



export default App;