import React, { Component } from 'react';
import Button from '../Common/Button/Button';
import Input from '../Common/Input/Input';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import HomeOwnerMainScreen from '../HomeOwnerMainScreen/HomeOwnerMainScreen';
import ResponderMainScreen from '../ResponderMainScreen/ResponderMainScreen';

export default class CreateAccount extends Component {
  state = {
    username: '',
    password: '',
    role: ''
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (props) => {
    this.setState({
      role: props.children
    });
    //create new user object using state
    // post new user to database
  }

  render() {
    return (
      <main>
       <Input placeholder="Username" name="Username" onChange={this.handleChange} value={this.state.username}/>
       <Input placeholder="Password" name="Password" onChange={this.handleChange} value={this.state.password}/>
        <Router>
        <div>
          <NavLink to="/HomeOwnerMainScreen">
            <Button onPress={this.handleSubmit}>
             I am a HomeOwner
            </Button>
            </NavLink>
            <NavLink to="/ResponderMainScreen">
            <Button onPress={this.handleSubmit}>
             I am a First Responder
            </Button>
            </NavLink>
          </div>
        <Route exact path="/HomeOwnerMainScreen" component={HomeOwnerMainScreen}/>
         <Route exact path="/ResponderMainScreen" component={ResponderMainScreen}/>
      </Router>
      </main>
    )
  }
}
