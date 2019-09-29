import React, { Component } from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';
import Button from '../Common/Button/Button';

export default class ResponderHomeFloorPlan extends Component {
  render() {
    return (
      <main className="floor-plan-container">
        <h2 className="homeScreenHeader">Best Route Below</h2>
        <image className="model-image"/>
        {/* show image of 3d model best route through home */}
         <p className="warning-message">Warning: Clutter level is high.</p>
         <p  className="warning-message">Potential Asbestos. Wear your gas mask.</p>
         <NavLink to="/Responder">
						<Button>Back</Button>
					</NavLink>
      </main>
    )
  }
}
