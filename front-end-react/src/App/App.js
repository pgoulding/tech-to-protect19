import React from 'react';
import './App.css';
import Button from '../Components/Common/Button/Button';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import LogIn from '../Components/LogIn/LogIn';
import CreateAccount from '../Components/CreateAccount/CreateAccount';

function App() {
  return (
  <main className="mainContainer">
    <h1 className="header">HomeProtech</h1>
      <Router>
        <div>
          <NavLink to="/LogIn">
            <Button>
             LogIn
            </Button>
          </NavLink>
          <NavLink to="/CreateAccount">
            <Button>Create Account</Button>
          </NavLink>
          </div>
        <Route
          path="/Login"
          render={() => (
            <Button
            >Log In</Button>
          )}
        />
         <Route
          path="/CreateAccount"
          render={() => (
            <Button
            >Create Account</Button>
          )}
        />
      </Router>
    {/* <p>Photo by Aidan Bartos on Unsplash</p> */}
    <p className="photoCredit">Photo by Scott Webb on Unsplash</p>
  </main>
  );
}

export default App;


  
