import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../Common/Button/Button';
import Input from '../Common/Input/Input';

export class ResponderMainScreen extends Component {
state = {
  address: '',
}

handleChange = (e) => {
  const {name, value} = e.target
  this.setState({
    [name]: value
  })
}

  render() {
    return (
      <main className="homeScreenContainer">
        <h2 className="homeScreenHeader">Welcome & Thank You For Your Service!</h2>
        <nav className="navigation">
          <Button>My Profile</Button>
          <Button>My Team</Button>
          <Input placeholder="Search My Area" name="Address" onChange={this.handleChange} value={this.state.address}/>
          {/* street, city, state, zip */}
          <Button>Search</Button>
        </nav>
          <section className="googleMapContainer">

          </section>
          <section className="preincidentPlanContainer">
          <h4 className="location">Incident Plan For:{this.address}</h4>
          <article>
            <p>Neighborhood Type:</p>
            <p>Building Type:</p>
            <p>Building Material:</p>
            <p>Current Wind Speed:</p>
            <p>Current Humidity:</p>
          </article>
          <article>
          <p>Number of Elderly:</p>
          <p>Number of Adults:</p>
          <p>Number of Children:</p>
          <p>Number of Animals:</p>
          </article>
          <article>
            <p>Floors:</p>
            <p>Rooms:</p>
            <p>Exit Doors:</p>
            <p>Clutter Rating:</p>
            <p>Areas of Concern:</p>
          </article>
          </section>
          {/* section that renders 3d model of best route in a component - CR*/}
          <Button>Show Best Route</Button>
          {/* <p>Warning: Clutter level is high. Do XYZ.</p> */}
          <p>Breathe Deep. You Can Do This.</p>
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ResponderMainScreen)
