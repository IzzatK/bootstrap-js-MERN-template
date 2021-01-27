import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class ToDoApp extends Component { //certain situations will call for logincomponent or welcomecomponent
    //use react-route to do this, can probably do this to display modals as well? not sure, must look at MenteeBook
    //the exact keyword below ensures that the default path in the DOM nav routing is not always shown on the webpage. For example, WelcomeComponent is not always shown
    render(){
        return(
            <div className="todoapp">
                <Router>
                    <>
                    <Switch>
                        <Route path ="/" exact component={LoginComponent}/>
                        <Route path ="/login" exact component={LoginComponent}/>
                        <Route path ="/welcome" exact component={WelcomeComponent}/>
                        <Route component={ErrorComponent}/>
                    </Switch>
                    </>
                </Router>
               {/*<LoginComponent></LoginComponent>*/}
            </div>
        )
    }
}
class WelcomeComponent extends Component {
    render(){
        return <div>Welcome in28minutes</div>
    }
}

function ErrorComponent(){
    return<div>An error occured. I don't know what to do! Contact support at abcd-efgh-ijkl</div>
}

class LoginComponent extends Component{ //surround it in a div or empty fragment
    
    constructor(props){
        super(props)
        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }
//     handleUsernameChange(event){
//                 console.log(event.target.name)
//                 this.setState(
//                                  {
//                                      [event.target.name]:event.target.value //must use square brackets for variable assignments
//                                  }
//                             )
//     }
//     handlePasswordChange(event){
//         console.log(event.target.value)
//         this.setState({password:event.target.value})
// }

handleChange(event){
    //console.log(this.state)
    this.setState(
                     {
                         [event.target.name]:event.target.value //must use square brackets for variable assignments
                     }
                )
}
loginClicked(){
    //in28minutes,dummy
    if(this.state.username==='in28minutes' && this.state.password==='dummy')
    {
    this.props.history.push("/welcome")
    // this.setState({showSuccessMessage:true})
    // this.setState({hasLoginFailed:false})
    console.log('Successful')
    }
    else //if invalid credentials are entered, set the SuccessMessage to false and LoginFailed to true
    {
        console.log('failed')
        this.setState({showSuccessMessage:false})
        this.setState({hasLoginFailed:true})
    }
   
   // console.log(this.state)
}
    
    render(){
        return(
            <div> 
            {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
               {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
               {this.state.showSuccessMessage && <div>Successful Login!</div>}
              { /* <ShowValidCredentials showSuccessMessage={this.state.showSuccessMessage}/>*/}
            User Name: <input type ="text" name="username" value={this.state.username} onChange={this.handleChange}/>
            Password: <input type ="password" name="password" value={this.state.password} onChange={this.handleChange}/>
            <button onClick={this.loginClicked}>Login</button>
            </div>
        );
    }
   
}
// function ShowInvalidCredentials(props){
//         if(props.hasLoginFailed){
//             return <div>Invalid Credentials</div>
//         }
//         return null
// }
// function ShowValidCredentials(props){
//     if(props.showSuccessMessage){
//         return <div>Successful Login</div>
//     }
//     return null
// }

export default ToDoApp