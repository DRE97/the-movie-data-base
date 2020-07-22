import React from 'react';
import './HomePage.css';
import MoviesList from '../MoviesList/MoviesList.js';
import SearchBar from '../SearchBar/SearchBar.js';
import database from '../../database.js';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    }
    this.searchMovies = this.searchMovies.bind(this);
  }

  searchMovies(movie_title) {
    movie_title = movie_title.replace(/\s+/g, '+').toLowerCase();
    database.searchMovies(movie_title).then(movies => {
      this.setState({ movies: movies });
    });
  }

  render() {
    return (
      <div className="HomePage">
        <SearchBar searchMovies={this.searchMovies}/>
        <ErrorBoundary>
          <MoviesList movies={this.state.movies}/>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
