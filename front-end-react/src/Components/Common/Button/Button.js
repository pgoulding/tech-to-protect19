import React from 'react';
import './styles.css';

export default function Button(props){
  return (
    <main>
      <button className="button">{props.children}</button>
    </main>
  )
}

