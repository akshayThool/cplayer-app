import React from 'react';
import './App.css';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Dashboard from './Components/dashboard/Dashboard';
import Favourite from './Components/favourite/Favourite';
import Login from './Components/login/Login';
import Register from './Components/register/Register';
import PrivateRoute from './PrivateRoute';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute path="/favourite" component={Favourite} />
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
        </Switch>
        <Footer />
      </Router>

    )

  }
}
export default App;
