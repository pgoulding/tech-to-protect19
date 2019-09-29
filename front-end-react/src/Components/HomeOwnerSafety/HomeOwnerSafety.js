import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Common/Button/Button';
import './styles.css';

export default class HomeOwnerSafety extends Component {
	render() {
		return (
			<main>
				<h2 className="homeScreenHeader">Your Home Safety</h2>
				<section className="homeownerScreenContainer">
					<div className="savings-container">
						<h4 className="savings-header">Be Careful...</h4>
						<p className="savings-text">Hello Bill,</p>
						<p className="savings-text">Thank you for using Home Protech.</p>
						<p className="savings-text">Since you have last completed the home scan, your home is</p>
						<p className="savings-amount">30%</p>
						<p className="savings-text"> safe and has a</p>
						<p className="savings-amount">HIGH</p>
						<p className="savings-text"> clutter rating.</p>
            <p className="savings-text"> We are woried about your safety.</p>
            <p className="savings-text"> Please complete your checklist to improve the safety of your home.</p>
					</div>
					<p className="log-out">
						<NavLink to="/HomeOwner">
							<Button onPress={this.handleSubmit}>Back</Button>
						</NavLink>
					</p>
				</section>
			</main>
		);
	}
}
