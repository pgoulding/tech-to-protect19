import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Common/Button/Button';
import './styles.css';

export default class HomeOwnerScan extends Component {
	render() {
		return (
			<main>
				<h2 className="homeScreenHeader">Your Home Scan</h2>
				<section className="homeownerScreenContainer">
					<div className="savings-container">
						<p className="savings-text">Let's Start Scanning</p>
            <div className="scan-div">
            {/* insert image of room here */}
            </div>
						<p className="text-large">Tip:</p>
						<p className="savings-text"> For best results, ensure the room is evenly lit. Remove any visual obstructions. Then press START.</p>
          <Button onPress={this.handleSubmit}>Start</Button>
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
