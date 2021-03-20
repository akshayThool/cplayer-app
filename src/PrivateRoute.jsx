import React from 'react'
import {Route,Redirect} from "react-router-dom" 
export default function PrivateRoute({component:Component,...rest}) {
    return (
    <Route
      {...rest}
      render={(routeProps) =>
        localStorage.getItem('username') === null ? (
          <Redirect to='/login' />
        ) : (
          <Component {...routeProps} />
        )
      }
    />

    )
}
