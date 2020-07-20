import React from 'react';
import './MoviesList.css';
import Movie from '../Movie/Movie';

class MoviesList extends React.Component {
  render() {
    let i = 0;
    return (
      <div className="MoviesList">
        {
          this.props.movies.map(movies => {
            i++;
            return <Movie movies={movies} key={i}/>
          })
        }
      </div>
    );
  }
}

export default MoviesList;
