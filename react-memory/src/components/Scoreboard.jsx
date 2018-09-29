import React from 'react';

const Scoreboard = props => {
  return (
    <div className="scoreboard">
      <p>Current Score: {props.currentScore}</p>
      <p>High Score: {props.highScore}</p>
      <p>{props.currentStatus}</p>
    </div>
  );
};

export default Scoreboard;
