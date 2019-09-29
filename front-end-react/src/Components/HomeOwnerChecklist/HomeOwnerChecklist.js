import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Common/Button/Button';
import './styles.css';

export default class HomeOwnerChecklist extends Component {
	render() {
		return (
			<main>
				<h2 className="homeScreenHeader">Your Room Checklist</h2>
				<section className="homeownerScreenContainer">
					<div className="savings-container">
						<h4 className="savings-header">Check It Twice:</h4>
						<p>Smoke Alarms</p>
						<ul>
							{/* list component */}
						</ul>
            <p>Electrical & Applicance Safety</p>
            <ul>
									{/* list component */}
						</ul>
						<Button onPress={this.handleSubmit}>Finish Up</Button>
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
