import React, { Component } from 'react';
import Button from '../Common/Button/Button';
import Input from '../Common/Input/Input';
import { NavLink } from 'react-router-dom';

export default class LogIn extends Component {
	state = {
		username: '',
		password: '',
		role: ''
	};

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	render() {
		return (
			<main className="background">
			<main className="mainContainer">
				<h1 className="header">HomeProtech</h1>
				<Input placeholder="Username" name="username" onChange={this.handleChange} value={this.state.username} />
				<Input placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} />
				<NavLink to="/HomeOwner">
					<Button onPress={this.handleSubmit}>HomeOwner Log In</Button>
				</NavLink>
				<NavLink to="/Responder">
					<Button onPress={this.handleSubmit}>Responder Log In</Button>
				</NavLink>
				<p className="photoCredit">Photo by Scott Webb on Unsplash</p>
			</main>
			</main>
		);
	}
}
