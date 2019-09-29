import React, { Component } from 'react';
import './styles.css';
import ScoreCard from '../Common/ScoreCard/ScoreCard';
import { NavLink } from 'react-router-dom';
import Button from '../Common/Button/Button';

export default class HomeOwnerMainScreen extends Component {
	render() {
		return (
			<main>
				<h2 className="homeScreenHeader">Welcome Back Bill</h2>
				<section className="homeownerScreenContainer">
					<NavLink to="/Safety">
						<ScoreCard image="" className="card-one">
							Your Safety Score
						</ScoreCard>
					</NavLink>
					<NavLink to="/Insurance">
						<ScoreCard text="$5,625.72" className="card-two">
							Money Saved
						</ScoreCard>
					</NavLink>
					<NavLink to="/LastScan">
						<ScoreCard text="96 Days" className="card-three">
							Since Last Scan
						</ScoreCard>
					</NavLink>
					<NavLink to="/Scan">
						<ScoreCard image="" className="card-four">
							3D Room Scan
						</ScoreCard>
					</NavLink>
					<NavLink to="/Checklist">
						<ScoreCard image="" className="card-five">
							View Checklist
						</ScoreCard>
					</NavLink>
					<NavLink to="/Hazards">
						<ScoreCard image="" className="card-six">
							Hazards Found
						</ScoreCard>
					</NavLink>
					<p className="log-out">
						<NavLink to="/">
							<Button onPress={this.handleSubmit}>Log Out</Button>
						</NavLink>
					</p>
				</section>
			</main>
		);
	}
}
