// API key:
//`http://www.omdbapi.com/?apikey=${apiKey}&s=${movie_title}`

const apiKey = 'efd0f855';

let database = {
  async searchMovies(movie_title) {
    const api_url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${movie_title}`;

    const response = await fetch(api_url);
    let data = await response.json();

    return data.Search;

  },

  async searchMovie(movie_title) {
    const api_url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movie_title}`;

    const response = await fetch(api_url);
    let data = await response.json();

    console.log(data);
  }
};

export default database;
