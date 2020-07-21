import React from 'react';
import './Movie.css';
import notAvailable from '../../images/not-available.jpg';
import database from '../../database.js';

class Movies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }

    this.checkPoster = this.checkPoster.bind(this);
    this.handleMore = this.handleMore.bind(this);
  }

  checkPoster(poster) {
    if(poster === 'N/A'){
      return notAvailable;
    } else {
      return poster;
    }
  }

  handleMore() {
    const { movies } = this.props;
    const movie_title = movies.Title.replace(/\s+/g, '+').toLowerCase();
    database.searchMovie(movie_title);
  }

  render() {
    const { movies } = this.props;
    movies.Poster = this.checkPoster(movies.Poster);
    return (
      <div className="Movies">
        <div className="poster">
          <img src={movies.Poster} alt="poster" />
        </div>
        <div className="info">
          <h3>{movies.Title}</h3>
          <p>
            Year: {movies.Year}<br/>
          </p>
          <div className="more-info">
            <a onClick={this.handleMore}>More</a>
          </div>
        </div>
        <div className={this.state.visible?'visible':'no-visible'}>
        </div>
      </div>
    );
  }
}

export default Movies;
