import React from 'react'
import './styles.css';

export default function ScoreCard(props) {
  return (
    <main className="score-card-container">
      <p className="score-card-text-info">{props.text}</p>
      <img src={props.image} className="score-card-image"/>
      <p className="score-card-text">{props.children}</p>
    </main>
  )
}
