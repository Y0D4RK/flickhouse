import React, { Component } from 'react';
import GameOver from "./GameOver";
import './GameOver.scss';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actors: [],
      movies: [],
      dataLoaded: false,
      correctAnswer: null,
      userAnswer: null,
      randomKeyActor: null,
      randomKeyMovie: null
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.API_TMBD_KEY}&language=en-US&page=1`)
      .then(response => {
        if (!response.ok) {
          const message = `An error has occured : error ${response.status} !`;
          throw new Error(message);
        }
        return response.json();
      })
      .then((data) => {
        let actors = data.results;
        let movies = actors.flatMap( result => result.known_for);
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
          questionCounter : 1,
          userScore: 0,
          userCountMistake: 0
        });
      });
  }

  getUserAnswer = (answer, actorId, movieId) => {
    this.setState({
      userAnswer: answer
    });
    this.getCorrectAnswer(movieId, actorId);
  };

  getCorrectAnswer = async (movieId, actorId) => {
    const{ userCountMistake, userScore } = this.state;

    await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.API_TMBD_KEY}`)
      .then((response) => {
        if (!response.ok) {
          const message = `An error has occured: error ${response.status} !`;
          throw new Error(message);
        }
        return response.json();
      })
      .then((data) => {
        if(data){
          if (data.cast.some(credit => credit.id === actorId)) {
            this.setState({
              correctAnswer: 'yes'
            });
          } else {
            this.setState({
              correctAnswer: 'no',
            });
          }
        }
      });

      if (this.state.userAnswer === this.state.correctAnswer && this.state.correctAnswer !== null){
        this.setState({
          userScore : userScore+1
        });
      }else if (this.state.userAnswer !== this.state.correctAnswer && this.state.correctAnswer !== null) {
        this.setState({
          userCountMistake: userCountMistake+1
        })
      }
  };


  handleNextQuestion = () => {
    const { countActors, countMovies, questionCounter } = this.state;
    if (questionCounter < countActors){
      this.setState({
        randomKeyActor: Math.floor(Math.random() * countActors),
        randomKeyMovie: Math.floor(Math.random() * countMovies),
        correctAnswer: null,
        questionCounter: questionCounter + 1
      });
    }
  };

  render() {
    const { actors, movies, countActors, randomKeyActor, randomKeyMovie, questionCounter, userScore } = this.state;

    let moviePoster;
    let actorPhoto;

    let question;
    let yesButton;
    let noButton;

    let questionRemain;

    let message;

    let nextButton;

    if (this.state.dataLoaded) {
      questionRemain = <div className="question-remaining"> Q.{ questionCounter+' / '+countActors } </div>;
      moviePoster = <img className="movie-poster" src={ 'https://image.tmdb.org/t/p/w200'+movies[randomKeyMovie]['poster_path'] } alt={ movies[randomKeyMovie]['name'] } />;
      actorPhoto = <img className="actor-photo" src={ 'https://image.tmdb.org/t/p/w200'+actors[randomKeyActor]['profile_path'] } alt={ actors[randomKeyActor]['name'] } />;

      question = <p>Did <span className="random-item">{ actors[randomKeyActor]['name'] }</span> star in <span className="random-item">{ movies[randomKeyMovie]['name'] || movies[randomKeyMovie]['title']}</span>&nbsp;?</p>;

      if(this.state.correctAnswer === null){
        yesButton = <button className="button-yes" onClick={()=>this.getUserAnswer('yes', actors[randomKeyActor]['id'], movies[randomKeyMovie]['id'] )}>Yes</button>;
        noButton = <button className="button-no" onClick={()=>this.getUserAnswer('no', actors[randomKeyActor]['id'], movies[randomKeyMovie]['id'] )}>No</button>;
      }
    }

    if (this.state.userAnswer === this.state.correctAnswer && this.state.correctAnswer !== null){
      message = <h6>Good answer, your score is : { userScore+' / '+this.state.countActors } !</h6>;
      if( questionCounter < 20){
        nextButton = <button className="button-next" onClick={this.handleNextQuestion}> Next </button>
      }
    }else if (this.state.userAnswer !== this.state.correctAnswer && this.state.correctAnswer !== null && this.state.userCountMistake < 3) {
      message = <h6>Bad answer !</h6>;
      nextButton = <button className="button-next" onClick={this.handleNextQuestion}> Next </button>
    }else if (3 <= this.state.userCountMistake){
      message = <GameOver score={userScore}/>;
    }

    return (
      <div className="wrap-question">
        { questionRemain }
        <div className="wrap-question-image">
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
