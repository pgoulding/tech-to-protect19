import React, { Component } from 'react';
import Button from '../Common/Button/Button';
import Input from '../Common/Input/Input';

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
        <Button onPress={this.handleSubmit}>I am a HomeOwner</Button>
        <Button onPress={this.handleSubmit}>I am a First Responder</Button>
      </main>
    )
  }
}
