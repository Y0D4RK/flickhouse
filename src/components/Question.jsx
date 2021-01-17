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
        if (!response.ok) {
          const message = `An error has occured: ${response.status}`;
          throw new Error(message);
        }
        return response.json();
      })
      .then((data) => {
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
    const { actors, movies, countActors, randomKeyActor, randomKeyMovie, questionCounter } = this.state;

    let moviePoster;
    let actorPhoto;

    let question;
    let yesButton;
    let noButton;

    let questionRemain;

    let message;

    let nextButton;

    if (this.state.dataLoaded) {
      questionRemain = <div className="question-remaining"> { questionCounter }/{ countActors } </div>;
      moviePoster = <img className="movie-poster" data-id={movies[randomKeyMovie]['id']} src={ 'https://image.tmdb.org/t/p/w200/'+movies[randomKeyMovie]['poster_path'] } alt="movie poster" />;
      actorPhoto = <img className="actor-photo" data-id={actors[randomKeyActor]['id']} src={ 'https://image.tmdb.org/t/p/w200/'+actors[randomKeyActor]['profile_path'] } alt="actor photo" />;

      question = <p>Did <span className="random-item">{ actors[randomKeyActor]['name'] }</span> star in <span className="random-item">{ movies[randomKeyMovie]['name'] || movies[randomKeyMovie]['title']}</span>&nbsp;?</p>;
      yesButton = <button className="button-yes" data-option='yes' data-actor={ actors[randomKeyActor]['id']} data-movie={ movies[randomKeyMovie]['id'] } onClick={this.getUserAnswer}>Yes</button>;
      noButton = <button className="button-no" data-option='no' data-actor={ actors[randomKeyActor]['id']} data-movie={ movies[randomKeyMovie]['id'] } onClick={this.getUserAnswer}>No</button>;
    }

    if (this.state.userAnswer === this.state.correctAnswer && this.state.correctAnswer !== null){
      message = <h6>Good anwser { this.state.score } !</h6>;
      nextButton = <button className="button-next" onClick={this.handleClick}> Next </button> }
    else if (this.state.userAnswer !== this.state.correctAnswer && this.state.correctAnswer !== null) {
      message = <h6>Bad anwser !</h6>;
    }

    return (
      <div className="wrap-question">
        { questionRemain }
        <div className="question-profil">
          { actorPhoto }
          { moviePoster }
        </div>
        <div className="question">
          { question }
          { yesButton }
          { noButton }
          { message }
          { nextButton }
        </div>
      </div>
    )
  }
}

export default Question;
