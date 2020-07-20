// API key:
//`http://www.omdbapi.com/?apikey=${apiKey}&s=${movie_title}`

const apiKey = 'efd0f855';

let database = {
  async search(movie_title) {
    const api_url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${movie_title}`;
    const response = await fetch(api_url);
    const data = await response.json();

    //console.log(data);
    //const results = [data.Title, data.Year, data.Poster];

    return data.Search;
  }
};

export default database;
