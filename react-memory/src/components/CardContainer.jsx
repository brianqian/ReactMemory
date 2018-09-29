import React from 'react';

const Card = props => {
  switch (props.size) {
    case 49:
      return <div className="card-container seven">{props.children}</div>;
    case 36:
      return <div className="card-container six">{props.children}</div>;
    case 25:
      return <div className="card-container five">{props.children}</div>;
    case 16:
      return <div className="card-container four">{props.children}</div>;
    case 9:
      return <div className="card-container three">{props.children}</div>;
    default:
      return <div className="card-container five">{props.children}</div>;
  }
};

export default Card;
