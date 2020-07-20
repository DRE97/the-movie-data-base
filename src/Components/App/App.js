import React from 'react';
import './App.css';
import MoviesList from '../MoviesList/MoviesList.js';
import SearchBar from '../SearchBar/SearchBar.js';
import database from '../../database'

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
    database.search(movie_title).then(movies => {
      this.setState({ movies: movies })
    });

  }

  render() {
    return (
      <div className="App">
        
        <SearchBar searchMovies={this.searchMovies}/>
        <MoviesList movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
