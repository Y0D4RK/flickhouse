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
    fetch(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.API_TMBD_KEY}&language=en-US&page=1`)
      .then(response => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        let actors = data.results;
        let movies = actors.flatMap(result => result.known_for);
        for(let i=0; i < movies.length; i++){
          if(movies[i].media_type === 'tv'){
            movies.splice(i, 1);
          }
        }
        this.setState({
          actors: actors,
          movies: movies,
          dataLoaded: true,
          countActors: actors.length,
          countMovies: movies.length,
          randomKeyActor: Math.floor(Math.random()* actors.length ),
          randomKeyMovie: Math.floor( Math.random()* movies.length ),
          questionCounter : 1
        });
      });
  }

  render() {
    let question;

    if (this.state.dataLoaded) {
      question = <p>Did <span className="random-item">TEST</span> star in <span className="random-item">TEST</span>&nbsp;?</p>;
    }

    return (
      <div className="wrap-question">
        <div className="question">
          { question }
        </div>
      </div>
    );
  }
}

export default Question;
