import React, { Component } from 'react';

class GameOver extends Component {
  constructor(props) {
    super(props);
  }

  refreshApp = () => {
    window.location.reload(true);
  };

  render() {
    return (
      <div className="wrap-gameover">
        <h6>GAME OVER !</h6>
        <h4> Your score is { this.props.score +' / 20'} </h4>
        <button className="button-share"> SHARE </button>
        <button className="button-reload" onClick={this.refreshApp}> RETRY </button>
      </div>
    );
  }
}

export default GameOver;
