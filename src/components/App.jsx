import React, { Component } from 'react';
import WelcomeMessage from "./WelcomeMessage";
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageDisplayed: true,
      startButton: true,
      gameStarted: false
    };
  }

  handleStartGame = () => {
    this.setState({
      messageDisplayed: false,
      startButton: false,
      gameStarted: true
    });
  };

  render() {
    let wrapImage;
    let welcomeMessage;
    let startButton;

    if(this.state.messageDisplayed) {
      wrapImage = <img className="img" src="../../assets/images/popcorn.png" alt="popcorn" />;
      welcomeMessage = <WelcomeMessage />
    }

    if (this.state.startButton) {
      startButton = <button className="button-start" onClick={this.handleStartGame}>Play<i className="icon">&#10148;</i></button>;
    }

    return (
      <div className="wrap">
        <div className="wrap-image">
          { wrapImage }
          { wrapImage }
        </div>
        { welcomeMessage }
        { startButton }
      </div>
    );
  };
}

export default App;
