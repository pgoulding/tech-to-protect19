import React, { Component } from 'react'
import Button from '../Common/Button/Button';
import Input from '../Common/Input/Input';

export default class LogIn extends Component {
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
  
  render() {
    return (
      <main>
        <Input placeholder="Username" name="Username" onChange={this.handleChange} value={this.state.username}/>
       <Input placeholder="Password" name="Password" onChange={this.handleChange} value={this.state.password}/>
        <Button onPress={this.handleSubmit}>Log In</Button>
      </main>
    )
  }
}
