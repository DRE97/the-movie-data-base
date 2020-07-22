import React from 'react';
import './MovieDetailsPage.css';
import notAvailable from '../../images/not-available.jpg';
import database from '../../database.js';
import { Link } from 'react-router-dom';

class MovieDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: []
    };

    this.getMovieInfo = this.getMovieInfo.bind(this);
    this.checkPoster = this.checkPoster.bind(this);
  }

  getMovieInfo(title) {
    title = title.replace(/\s+/g, '+').toLowerCase();
    database.searchMovie(title).then(movie => {
      this.setState({ movie: movie });
    });
  }

  checkPoster(poster) {
    if(poster === 'N/A'){
      return notAvailable;
    } else {
      return poster;
    }
  }

  render() {
    const { title } = this.props.location.state;
    this.getMovieInfo(title);
    const movie = this.state.movie;
    movie.poster = this.checkPoster(movie.poster);
    return (
      <div className="MovieDetailsPage">
        <div className="movieContainer">
          <div className="moviePoster">
            <img src={movie.poster} alt="poster"/>
          </div>
          <div className="movieTitle">
            <h1>{title}</h1>
          </div>
          <div className="movieInfo">
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Actors:</strong> {movie.actors}</p>
            <p><strong>Runtime:</strong> {movie.runTime}</p>
            <p><strong>Year:</strong> {movie.year}</p>
            <p><strong>Rating:</strong> {movie.rating}</p><br/>
            <p><strong>Review:</strong><br/> {movie.plot}</p>
          </div>
          <div className="homeButton">
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetailsPage;
