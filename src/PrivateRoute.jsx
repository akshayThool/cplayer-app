import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        localStorage.getItem('username') === null ? (
          <Redirect to='/login' />
        ) : (
          <>
            <Header />
            <Component {...routeProps} />
            <Footer />
          </>
        )
      }
    />

  )
}
