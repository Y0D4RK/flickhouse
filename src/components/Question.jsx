import React, { Component } from 'react';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actors: [],
      movies: [],
      dataLoaded: false,
      correctAnswer: null,
      userAnswer: null,
      countActors: 0,
      countMovies: 0,
      randomKeyActor: null,
      randomKeyMovie: null,
      score: 0
    };
  }

  componentDidMount() {
  }

  render() {

    let question;

    if (this.state.dataLoaded) {
      question = <p>Did <span className="random-item">TEST</span> star in <span className="random-item">TEST</span>&nbsp;?</p>;
    }

    return (
      <div className="wrap-question">
        <Timer />
        <div className="question">
          { question }
        </div>
      </div>
    );
  }
}

export default Question;
