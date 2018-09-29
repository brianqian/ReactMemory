import React, { Component } from 'react';
import Card from './Card';
import images from '../img/';

export default class Game extends Component {
  state = {
    correctGuesses: 0,
  };
  componentDidMount = () => {
    console.log(images);
  };

  saveClickedCard = () => {};

  render() {
    return (
      <div className="game-container">
        <Card />
      </div>
    );
  }
}
