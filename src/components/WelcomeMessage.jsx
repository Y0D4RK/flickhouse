import React, { Component } from 'react';

class WelcomeMessage extends Component {
  render() {
      return (
      <div className="title">
          <h1>Welcome on <span className="logo">FlickHouse&nbsp;Game</span></h1>
          <h4>You must to answer a questions series<br /> by <span className="button-yes">"Yes"</span>&nbsp;or&nbsp;<span className="button-no">"No"</span> in 10 minutes.</h4>
      </div>
    );
  }
}

export default WelcomeMessage;
