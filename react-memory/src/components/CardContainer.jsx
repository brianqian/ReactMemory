import React from 'react';

const Card = props => {
  //A custom grid is created for each different grid size applied via css class.
  const columnSize = `s${Math.sqrt(props.size)}`;
  return <div className={`card-container ${columnSize}`}>{props.children}</div>;
};

export default Card;
