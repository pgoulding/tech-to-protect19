import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../Common/Button/Button';
import Input from '../Common/Input/Input';
import './styles.css';
import { NavLink } from 'react-router-dom';

export class ResponderMainScreen extends Component {
	state = {
		address: '1644 Platte St Denver',
		neighborhood_type: 'Urban',
		building_type: 'House',
		building_material: 'Stone and Wood',
		current_wind_speed: '15 mph',
		current_humidity: '10%',
		number_of_elderly: 0,
		number_of_adults: 2,
		number_of_children: 3,
		number_of_animals: 2,
		floors: 3,
		rooms: 13,
		exit_doors: 2,
		clutter_rating: 'High',
		areas_of_concern: 'Kitchen, Basement'
	};

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	render() {
		return (
			<main className="homeScreenContainer">
				<h2 className="homeScreenHeader">Welcome & Thank You For Your Service!</h2>
				<nav className="navigation">
					<Button>My Profile</Button>
					<Button>My Team</Button>
					<Input
						placeholder="Location Address..."
						name="Address"
						onChange={this.handleChange}
						value={this.state.address}
					/>
					<Button>Search</Button>
					<NavLink to="/">
						<Button onPress={this.handleSubmit}>Log Out</Button>
					</NavLink>
				</nav>
				<section className="googleMapContainer" />
				<section className="preincidentPlanContainer">
					<h4 className="location">Incident Plan For: {this.state.address}</h4>
					<section className="preincident-plan-grid">
						<article className="neighborhood-container">
							<p>Neighborhood Type: <span className="style-home-details">{this.state.neighborhood_type}</span></p>
							<p>Building Type: <span className="style-home-details">{this.state.building_type}</span> </p>
							<p>Building Material: <span className="style-home-details">{this.state.building_material}</span> </p>
							<p>Current Wind Speed: <span className="style-home-details">{this.state.current_wind_speed}</span> </p>
							<p>Current Humidity: <span className="style-home-details">{this.state.current_humidity}</span> </p>
						</article>
						<article className="occupants-container">
							<p>Number of Elderly: <span className="style-home-details">{this.state.number_of_elderly}</span></p>
							<p>Number of Adults: <span className="style-home-details">{this.state.number_of_adults}</span> </p>
							<p>Number of Children: <span className="style-home-details">{this.state.number_of_children}</span> </p>
							<p>Number of Animals: <span className="style-home-details">{this.state.number_of_animals}</span> </p>
							<p>Floors: <span className="style-home-details">{this.state.floors}</span></p>
						</article>
						<article className="house-details-container">
							<p>Rooms: <span className="style-home-details">{this.state.rooms}</span></p>
							<p>Exit Doors: <span className="style-home-details">{this.state.exit_doors}</span> </p>
							<p>Clutter Rating: <span className="style-home-details">{this.state.clutter_rating}</span> </p>
							<p>Areas of Concern: <span className="style-home-details">{this.state.areas_of_concern}
                </span></p>
						</article>
					</section>
				</section>
				<section className="route-container">
					<NavLink to="/FloorPlan">
						<Button onPress={this.handleSubmit}>Show Best Rescue Route</Button>
					</NavLink>
				</section>
			</main>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ResponderMainScreen);
