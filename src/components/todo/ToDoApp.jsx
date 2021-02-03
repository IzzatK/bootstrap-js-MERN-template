import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './ToDoApp.css'
import Form from 'react-bootstrap/Form'
import NavDropdown from 'react-bootstrap/NavDropdown'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class ToDoApp extends Component { //certain situations will call for logincomponent or welcomecomponent
    //use react-route to do this, can probably do this to display modals as well? not sure, must look at MenteeBook
    //the exact keyword below ensures that the default path in the DOM nav routing is not always shown on the webpage. For example, WelcomeComponent is not always shown
    render(){
        return(
            <div className="todoapp">
                <Router>
                    <>
                    <HeaderComponent/>
                    <Switch>
                        <Route path ="/" exact component={LoginComponent}/>
                        <Route path ="/login" exact component={LoginComponent}/>
                        <Route path ="/welcome/:name" exact component={WelcomeComponent}/>
                        <Route path ="/todos" exact component={ListToDosComponent}/>
                        <Route component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent/>
                    </>
                </Router>
               {/*<LoginComponent></LoginComponent>*/}
            </div>
        )
    }
}
//each webpage consists of 1 or 2 components, and is displayed in the parent component called ToDoApp as shown above
//ToDoApp is exported into 

class ListToDosComponent extends Component{ //figure out how to iterate the id automatically using a for  loop

    constructor(props){
        super(props)
        this.state = {
            todos : [
                        {id: 1, description: 'Learn React', done: false, targetDate:new Date()}, 
                        {id: 2, description: 'Learn Java',  done: false, targetDate:new Date()},
                        {id: 3, description: 'Learn Angular', done: false, targetDate:new Date()},
                      
                    ]
        }
    }

    render(){
        return ( 
              <div>
                        <h1>List Todos</h1>
                            <table>
                                <thead>
                                <tr>
                                <th>id</th>
                                <th>description</th>
                                <th>Is Completed</th>
                                <th>Target Date</th>
                                </tr> {/* end the table row on the left side here */}
                                </thead>
                                    <tbody>
                                        
                                            {
                                                this.state.todos.map (
                                                    todo =>
                                                    <tr>
                                                    <td>{todo.id}</td>
                                                    <td>{todo.description}</td>
                                                    <td>{todo.done.toString()}</td>
                                                    <td>{todo.targetDate.toString()}</td>
                                                    </tr>
                                                )
                                           
                                            }
                                        
                                    </tbody>
                            </table>
              </div>
              );
    }
}

class WelcomeComponent extends Component { //the below function displays the name of user
    render(){
        return (
                    <div>Welcome {this.props.match.params.name} You can manage your todos <Link to="/todos">here</Link></div>
               )
    }
}

class HeaderComponent extends Component {
    render(){
        return (
                   
                        <header>
                        <Navbar className ="mb-5"bg="dark" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <p className =" hiddenText d-xs-none d-lg-none mr-5">Click the menu for site navigation</p>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/welcome/in28minutes">Home</Nav.Link>
      <Nav.Link href="/aboutus">About Us</Nav.Link>
      
        <Nav.Link href="/todos">ToDos</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="#action/3.3">Logout</Nav.Link>
        <NavDropdown.Divider />
        <Nav.Link href="#action/3.4">Separated link</Nav.Link>
     
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

                           
                        </header>
                      
               )
    }
}

class FooterComponent extends Component {
    render(){
        return (
                    <div>
                        <hr/>
                        Footer
                    </div>
               )
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
    this.props.history.push(`/welcome/${this.state.username}`)
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
}  //end of loginClicked function above here
    
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