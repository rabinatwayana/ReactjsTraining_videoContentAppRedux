import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Home"
import Movie from "./Movie";
import Movies from "./Movies"
import TVshows from "./TVshows"
import TVshow from "./TVshow";
import SearchMovie from "./SearchMovie";


class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/tvshows" component={TVshows} />
            <Route exact path="/movies/:movieid" component={Movie} />
            <Route exact path="/tvshows/:tvshowid" component={TVshow} />
            <Route exact path="/movies/search_movies/:movie_name" component={SearchMovie} />
          </Switch>
        </Router>
      </>
    )
  }
}
export default App;
