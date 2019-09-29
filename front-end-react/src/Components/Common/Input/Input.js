import React from 'react';
import './styles.css';

export default function Input(props) {
  return (
    <main className="inputContainer">
      <input className="userInput" {...props} placeholder={props.placeholder} value={props.value} name={props.name}/>
    </main>
  )
}
