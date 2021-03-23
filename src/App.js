import React from 'react';
import './App.css';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Dashboard from './Components/dashboard/Dashboard';
import Favourite from './Components/favourite/Favourite';
import CurrentMatches from './Components/CurrentMatches/CurrentMatches';
import Login from './Components/login/Login';
import Register from './Components/register/Register';
import PrivateRoute from './PrivateRoute';
import SearchResult from './Components/SearchResult/SearchResult';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/favourite" component={Favourite} />
          <PrivateRoute path="/matches" component={CurrentMatches} />
          <PrivateRoute path="/search/:playername" component={SearchResult} />
          <Route path="/login">
            <>
              <Header />
              <Login />
              <Footer />
            </>
          </Route>
          <Route path="/register">
            <>
              <Header />
              <Register />
              <Footer />
            </>
          </Route>
        </Switch>
      </Router>

    )

  }
}
export default App;
