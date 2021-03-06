import React, { Component } from 'react';
import WelcomeMessage from "./WelcomeMessage";
import './App.scss';
import Question from './Question';
import './Question.scss';

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
    let question;

    if(this.state.messageDisplayed) {
      wrapImage =<div className="wrap-image">
                   <img className="img" src="../../assets/images/popcorn.png" alt="popcorn" />
                   <img className="img" src="../../assets/images/ticket.png" alt="ticket" />
                 </div>;
      welcomeMessage = <WelcomeMessage />
    }

    if (this.state.startButton) {
      startButton = <button className="button-start" onClick={this.handleStartGame}>Play<i className="icon">&#10148;</i></button>;
    }

    if (this.state.gameStarted){
      question = <Question />
    }

    return (
      <div className="wrap">
        { wrapImage }
        { welcomeMessage }
        { startButton }
        { question }
      </div>
    );
  };
}

export default App;
