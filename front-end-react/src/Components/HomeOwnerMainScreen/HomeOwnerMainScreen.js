import React, { Component } from 'react';
import './styles.css';
import ScoreCard from '../Common/ScoreCard/ScoreCard';
import { NavLink } from 'react-router-dom';
import Button from '../Common/Button/Button';
import cameraImg from '../../resources/camera.png';
import homeImg from '../../resources/home.png'
import moneyImg from '../../resources/money.png'
import listImg from '../../resources/shopping-list.png'
import warningImg from '../../resources/triangular-warning-sign.png'
import calendar from '../../resources/calendar.png'
export default class HomeOwnerMainScreen extends Component {
	render() {
		return (
			<main>
				<h2 className="homeScreenHeader">Welcome Back Bill</h2>
				<section className="homeownerScreenContainer">
					<NavLink to="/Safety">
						<ScoreCard image={homeImg} text="30%" className="card-one">
							Your Safety Score
						</ScoreCard>
					</NavLink>
					<NavLink to="/Insurance">
						<ScoreCard image={moneyImg} text="$5,625.72" className="card-two">
							Money Saved
						</ScoreCard>
					</NavLink>
					<NavLink to="/LastScan">
						<ScoreCard image={calendar} text="96 Days" className="card-three">
							Since Last Scan
						</ScoreCard>

					</NavLink>
					<NavLink to="/Scan">
						<ScoreCard image={cameraImg} className="card-four">
							3D Room Scan
						</ScoreCard>
					</NavLink>
					<NavLink to="/Checklist">
						<ScoreCard image={listImg} className="card-five">
							View Checklist
						</ScoreCard>
					</NavLink>
					<NavLink to="/Hazards">
						<ScoreCard image={warningImg} className="card-six">
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
