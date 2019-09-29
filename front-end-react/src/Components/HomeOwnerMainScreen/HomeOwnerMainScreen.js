import React, { Component } from 'react'
import './styles.css';
import ScoreCard from '../Common/ScoreCard/ScoreCard';

export default class HomeOwnerMainScreen extends Component {
  render() {
    return (
      <main>
     <h2 className="homeScreenHeader">Welcome Back Bill</h2>
     <section className="homeownerScreenContainer">
      <ScoreCard image="" className="card-one">Your Safety Score</ScoreCard>
      <ScoreCard text="$5,625.72" className="card-two">Money Saved</ScoreCard>
      <ScoreCard text="96 Days" className="card-three">Since Last Scan</ScoreCard>
      <ScoreCard image="" className="card-four">3D Room Scan</ScoreCard>
      <ScoreCard image="" className="card-five">View Checklist</ScoreCard>
      <ScoreCard image="" className="card-six">Hazards Found</ScoreCard>
     <h2 className="screenHeader">Nice Job!</h2>
     </section>
      </main>
    )
  }
}
