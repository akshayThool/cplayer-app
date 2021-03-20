import React from 'react'
import {Link} from "react-router-dom";
import Logout from "../Logout"

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link to="/dashboard" className="navbar-brand" >C Player
  </Link>
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link to="/dashboard" className="nav-link" >Dashboard </Link>
      </li>
    </ul>
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link to="/favourite" className="nav-link">Favourites</Link>
      </li>
    </ul>
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Logout></Logout>
      </li>
    </ul>
  </div>
  </nav>
    )
}

