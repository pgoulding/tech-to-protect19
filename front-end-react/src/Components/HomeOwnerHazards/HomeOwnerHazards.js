import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Common/Button/Button';
import './styles.css';

export default class HomeOwnerInsurance extends Component {
	render() {
		return (
			<main>
				<h2 className="homeScreenHeader">Your Home Hazards</h2>
				<section className="homeownerScreenContainer">
					<div className="savings-container">
						<h4 className="savings-header">Uh Oh!</h4>
						<p className="savings-text">Hello Bill,</p>
						<p className="savings-text">Thank you for using Home Protech.</p>
						<p className="savings-text">Since you have last completed the home scan, we have found</p>
						<p className="savings-amount">4</p>
						<p className="savings-text"> home hazards.</p>
						<p className="savings-text"> Please complete the following:</p>
						<ul>
							<li className="unordered-list">Add a fire alarm in the basement</li>
							<li className="unordered-list">Clear out the clutter in the office</li>
							<li className="unordered-list">Tie back the curtains in the living room</li>
							<li className="unordered-list">Move the clutter away from the back door</li>
						</ul>
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
