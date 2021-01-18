import React, { Component } from 'react';

class GameOver extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrap-gameover">
        <h6>GAME OVER !</h6>
        <h4> Your score is { this.props.score +' / 20'} </h4>
        <button className="button-share"> SHARE </button>
      </div>
    );
  }
}

export default GameOver;
