import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import Logout from "../Logout"

export default function Header() {
  const [playername, setPlayerName] = useState();
  const history = useHistory();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
      <Link to="/dashboard" className="navbar-brand" ><img src="/assets/logo.svg" width="40px" height="40px" alt="" />CPlayer
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
          <li className="nav-item active">
            <Link to="/matches" className="nav-link">Matches</Link>
          </li>
        </ul>
        <form className="d-flex search-form">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
            onChange={(e) => setPlayerName(e.target.value)} />
          <button className="btn btn-outline-primary" type="submit"
            onClick={(e) =>
              history.push(`/search/${playername}`)}>Search Players</button>
        </form>

        <ul className="navbar-nav">
          <li className="nav-item active">
            <Logout></Logout>
          </li>
        </ul>
      </div>

    </nav>
  )
}

