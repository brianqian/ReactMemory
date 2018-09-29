import React from 'react';

const Card = props => (
  <div data-id={props.value} onClick={props.onClick} className="image-card">
    <img src={`img/${props.value}`} alt="" />
  </div>
);

export default Card;
