import React, { Component } from 'react';
import './WelcomeMessage.scss';

class WelcomeMessage extends Component {
  render() {
      return (
      <div className="title">
          <h1>Welcome on <span className="logo">FlickHouse&nbsp;Game</span></h1>
        <p>You must to answer a questions series<br /> by <span className="button-yes">"Yes"</span>&nbsp;or&nbsp;<span className="button-no">"No"</span> in <strong>5 minutes</strong>.</p>
      </div>
    );
  }
}

export default WelcomeMessage;
