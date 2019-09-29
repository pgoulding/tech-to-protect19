import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Common/Button/Button';
import './styles.css';

export default class HomeOwnerInsurance extends Component {
	render() {
		return (
			<main>
				<h2 className="homeScreenHeader">Your Last Scan</h2>
				<section className="homeownerScreenContainer">
					<div className="savings-container">
						<h4 className="savings-header">We Missed You!</h4>
						<p className="savings-text">Hello Bill,</p>
						<p className="savings-text">It has been</p>
						<p className="savings-amount">96 Days</p>
						<p className="savings-text"> since your last scan.</p>
						<p className="savings-text"> Maybe a lot has changed since then.... maybe not.</p>
            <p className="savings-text"> However, if you have:</p>
						<ul>
							<li className="unordered-list">Moved Locations</li>
							<li className="unordered-list">Clear out the clutter</li>
							<li className="unordered-list">Implemented recommended changes</li>
							<li className="unordered-list">Rearranged furniture</li>
						</ul>
						<p className="savings-text"> Pleae rescan so firefighters have the most up-to-date information and you can get the MOST savings from your insurance.</p>

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
