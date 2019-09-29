import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LogIn from '../LogIn/LogIn';
import CreateAccount from '../CreateAccount/CreateAccount';
import App from '../../App/App';
import HomeOwnerMainScreen from '../HomeOwnerMainScreen/HomeOwnerMainScreen';
import ResponderMainScreen from '../ResponderMainScreen/ResponderMainScreen';
import ResponderHomeFloorPlan from '../ResponderHomeFloorPlan/ResponderHomeFloorPlan';

export default function Routes() {
	return (
		<Switch>
			<Route exact path="/" component={App} />
			<Route path="/Login" component={LogIn} />
			<Route path="/CreateAccount" component={CreateAccount} />
			<Route path="/HomeOwner" component={HomeOwnerMainScreen} />
			<Route path="/Responder" component={ResponderMainScreen} />
			<Route path="/FloorPlan" component={ResponderHomeFloorPlan} />
		</Switch>
	);
}
