import React, { Component } from 'react';

class GameOver extends Component {
  render() {
    return (
      <div className="wrap-gameover">
        <h6>GAME OVER !</h6>
        <button className="button-share"> SHARE </button>
      </div>
    );
  }
}

export default GameOver;