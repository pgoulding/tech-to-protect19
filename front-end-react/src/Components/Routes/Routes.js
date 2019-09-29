import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LogIn from '../LogIn/LogIn';
import CreateAccount from '../CreateAccount/CreateAccount';
import App from '../../App/App';
import HomeOwnerMainScreen from '../HomeOwnerMainScreen/HomeOwnerMainScreen';
import ResponderMainScreen from '../ResponderMainScreen/ResponderMainScreen';
import ResponderHomeFloorPlan from '../ResponderHomeFloorPlan/ResponderHomeFloorPlan';
import HomeOwnerScan from '../HomeOwnerScan/HomeOwnerScan';
import HomeOwnerChecklist from '../HomeOwnerChecklist/HomeOwnerChecklist';
import HomeOwnerHazards from '../HomeOwnerHazards/HomeOwnerHazards';
import HomeOwnerInsurance from '../HomeOwnerInsurance/HomeOwnerInsurance';
import HomeOwnerSafety from '../HomeOwnerSafety/HomeOwnerSafety';
import HomeOwnerLastScan from '../HomeOwnerLastScan/HomeOwnerLastScan';

export default function Routes() {
	return (
		<Switch>
			<Route exact path="/" component={App} />
			<Route path="/Login" component={LogIn} />
			<Route path="/CreateAccount" component={CreateAccount} />
			<Route path="/HomeOwner" component={HomeOwnerMainScreen} />
			<Route path="/Responder" component={ResponderMainScreen} />
			<Route path="/FloorPlan" component={ResponderHomeFloorPlan} />
			<Route path="/Scan" component={HomeOwnerScan} />
			<Route path="/Checklist" component={HomeOwnerChecklist} />
			<Route path="/Hazards" component={HomeOwnerHazards} />
			<Route path="/Insurance" component={HomeOwnerInsurance} />
			<Route path="/Safety" component={HomeOwnerSafety} />
			<Route path="/LastScan" component={HomeOwnerLastScan} />
		</Switch>
	);
}
