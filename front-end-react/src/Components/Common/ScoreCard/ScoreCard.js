import React from 'react'
import './styles';

export default function ScoreCard(props) {
  return (
    <main className="score-card-container">
      <image src={props.children} className="score-card-image"/>
      <p className="score-card-text">{props.children}</p>
    </main>
  )
}
