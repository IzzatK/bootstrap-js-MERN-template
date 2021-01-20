import React, {Component} from 'react'
import './Counter.css'

 class Counter extends Component {

    //define the initial state in a constructor
    //state => counter

    constructor(){
        super();
        this.state = {
            counter : 0,
            secondCounter:100
        }
        this.increment = this.increment.bind(this);
    }
    render  ()  {   //can use the below const to style the counter inline, just set style = {style}>this.state.counter 
                   //let || const style = {fontSize:"50px",  padding:"15px 30px"}  //can create an arrow function 
           return (
                    <div className="Counter">
   
                    <button onClick={this.increment}>+{this.props.by}</button>
                     <span className="count">{this.state.counter}</span>
                     
                    
                     </div>
                   )
    }
    increment  ()  { //update state to counter++
       // console.log('increment');
      // this.state.counter++;
            this.setState({
                             counter: this.state.counter + this.props.by,
                             secondCounter: this.state.secondCounter +1
       }
       );
}
 }
export default Counter;
