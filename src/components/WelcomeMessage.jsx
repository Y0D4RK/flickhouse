import React, { Component } from 'react';
import './WelcomeMessage.scss';

class WelcomeMessage extends Component {
  render() {
      return (
      <div className="title">
          <h1>Welcome on <span className="logo">FlickHouse&nbsp;Game</span></h1>
          <p>You'll be asked a series of <span className="button-yes">Yes</span>&nbsp;or&nbsp;<span className="button-no">No</span> questions. <br /> Answer as many as you can in the allowed time !<br /> Good luck !</p>
      </div>
    );
  }
}

export default WelcomeMessage;
