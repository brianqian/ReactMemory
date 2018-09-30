import React from 'react';

const Card = props => {
  const columnSize = `s${Math.sqrt(props.size)}`;
  return <div className={`card-container ${columnSize}`}>{props.children}</div>;
};

export default Card;
