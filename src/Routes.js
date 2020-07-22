import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/HomePage/HomePage.js';
import MovieDetails from './Components/MovieDetailsPage/MovieDetailsPage.js';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movieDetails" component={MovieDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
