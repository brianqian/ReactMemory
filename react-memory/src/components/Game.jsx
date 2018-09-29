import React, { Component } from 'react';
import Card from './Card';
import Scoreboard from './Scoreboard';

export default class Game extends Component {
  state = {
    highScore: 0,
    currentScore: 0,
    gridSize: 25,
    currentStatus: '',
    currentGuesses: [],
    gameArray: [],
  };

  createGameArray = () => {
    // prettier-ignore
    const allImages = '1-happy.png 21-sleeping.png 33-surprised-2.png 45-happy-3.png 10-embarrassed.png 22-surprised-1.png 34-dead.png 46-demon.png 11-surprised.png 23-shocked-1.png 35-happy-2.png 47-in-love.png 12-sad-1.png 24-happy-1.png 36-shocked-2.png 48-tongue-1.png 13-kiss.png 25-rich.png 37-cat-1.png 49-angry-3.png 14-thinking.png 26-devil.png 38-cowboy.png 5-tongue.png 15-angel.png 27-skull.png 39-angry-2.png 50-calm.png 16-nerd.png 28-cat.png 4-angry.png 6-angry-1.png 17-cool.png 29-robot.png 40-thinking-1.png 7-wink.png 18-shocked.png 3-crying.png 41-laughing-1.png 8-disappointed.png 19-sick.png 30-poo.png 42-injured.png 9-sad.png 2-laughing.png 31-sick-1.png 43-smart.png 20-secret.png 32-alien.png 44-silent.png'.split(' ');
    const shuffledArray = this.shuffleGameArray(allImages);
    const gameArray = [];
    for (let i = 0; i < this.state.gridSize; i++) {
      gameArray.push(shuffledArray[i]);
    }
    this.setState({ gameArray });
  };

  shuffleGameArray = array => {
    const arrayCopy = array.slice();
    const shuffledArray = [];
    while (arrayCopy.length) {
      //prettier-ignore
      const randomNumber = Math.floor(Math.random() * arrayCopy.length);
      shuffledArray.push(arrayCopy[randomNumber]);
      let lastImage = arrayCopy[arrayCopy.length - 1];
      //prettier-ignore
      [arrayCopy[randomNumber], lastImage] = [lastImage, arrayCopy[randomNumber]];
      arrayCopy.pop();
    }
    return shuffledArray;
  };

  componentDidMount = () => {
    this.createGameArray();
  };

  gameOver = status => {
    if (status === 'Lose') {
      console.log('you lose');
    } else if (status === 'Win') {
      console.log('you win');
    }
    if (this.state.currentScore > this.state.highScore)
      this.setState({ highScore: this.state.currentScore });
    this.setState({ currentScore: 0 });
    this.setState({ currentGuesses: [] });
    this.createGameArray();
  };

  handleCardClick = e => {
    console.log(e.currentTarget.dataset.id);
    const currentGuesses = this.state.currentGuesses.slice();
    //Check for incorrect guess
    if (currentGuesses.includes(e.currentTarget.dataset.id)) {
      return this.gameOver('Lose');
    } else {
      currentGuesses.push(e.currentTarget.dataset.id);
      //Check for win
      if (currentGuesses.length === this.state.gridSize) {
        return this.gameOver('Win');
      }
      //Correct guess but no win
      let gameArray = this.state.gameArray.slice();
      gameArray = this.shuffleGameArray(gameArray);
      this.setState({ currentScore: this.state.currentScore + 1 });
      this.setState({ currentGuesses });
      this.setState({ gameArray });
    }
  };

  render() {
    return (
      <div className="game-container">
        <div className="card-container">
          {this.state.gameArray.map(card => (
            <Card
              key={card.split('-')[0]}
              value={card}
              onClick={this.handleCardClick}
            />
          ))}
        </div>
        <div className="score-container">
          <Scoreboard
            currentScore={this.state.currentScore}
            highScore={this.state.highScore}
            currentStatus={this.state.currentStatus}
          />
          <button onClick={this.gameOver}>Restart Game</button>
        </div>
      </div>
    );
  }
}
