import React from 'react';
import './App.css';
import Button from '../Components/Common/Button/Button';
import { NavLink } from 'react-router-dom';


function App() {
  return (
  <main className="mainContainer">
    <h1 className="header">HomeProtech</h1>
        <div>
          <NavLink to="/LogIn">
            <Button>
             Log In
            </Button>
          </NavLink>
          <NavLink to="/CreateAccount">
            <Button>Create Account</Button>
          </NavLink>
          </div>
    {/* <p>Photo by Aidan Bartos on Unsplash</p> */}
    <p className="photoCredit">Photo by Scott Webb on Unsplash</p>
  </main>
  );
}

export default App;


  
