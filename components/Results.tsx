import React from 'react';
import './Results.css';

export default function Results(props: any) {
  return (
      <div className="results-section">
          {props.value}
      </div>
  );
}

