import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Common/Button/Button';
import './styles.css';

export default class HomeOwnerInsurance extends Component {
	render() {
		return (
			<main>
				<h2 className="homeScreenHeader">Your Insurance Savings</h2>
				<section className="homeownerScreenContainer">
					<div className="savings-container">
						<h4 className="savings-header">Money Savings</h4>
            <p className="savings-text">Hello Bill,</p>
            <p className="savings-text">Thank you for using Home Protech.</p>
						<p className="savings-text">
							 Since you have completed the home scan and immplemented 3/10 recommended
							changes, you are receiving BIG SAVINGS!
						</p>
						<p className="savings-amount">$5,625.72</p>
						<p className="savings-text"> To earn back more, complete the rest of your tasks.</p>
            <p className="savings-text"> Thank you for making your home & neighborhood safe</p>
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
