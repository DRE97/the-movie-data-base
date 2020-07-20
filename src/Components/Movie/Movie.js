import React from 'react';
import './Movie.css';
import notAvailable from '../../images/not-available.jpg';

class Movies extends React.Component {
  constructor(props) {
    super(props);

    this.checkPoster = this.checkPoster.bind(this);
  }

  checkPoster(poster) {
    if(poster === 'N/A'){
      return notAvailable;
    } else {
      return poster;
    }
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
            <a>More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
