import React from 'react';

const Card = props => (
  <div onClick={props.onClick} className="image-card">
    {props.value}
    {/* <img src={props.source} alt="" /> */}
  </div>
);

export default Card;
