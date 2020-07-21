import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      term: '',
      sortBy: 'best_match'
    };

    this.sortByOptions = {
      'By Movie': 'best_match'
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

  }

  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  handleKeyPress(event) {
    if (event.charCode === 13) {
      this.handleSearch(event);
    }
  }

  handleSearch(event) {
    this.props.searchMovies(this.state.term);
    event.preventDefault();
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <h1>The Movie Data Base</h1>
          <h3 className="Search-title">Movies, series, episodes </h3>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Here!" onChange={this.handleTermChange} onKeyPress={this.handleKeyPress}/>
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
