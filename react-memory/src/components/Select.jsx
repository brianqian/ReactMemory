import React from 'react';

const Select = props => {
  return (
    <select value={props.value} onChange={props.onChange} id={props.id}>
      <option value="9">3x3</option>
      <option value="16">4x4</option>
      <option value="25">5x5</option>
      <option value="36">6x6</option>
      <option value="49">7x7</option>
    </select>
  );
};

export default Select;
