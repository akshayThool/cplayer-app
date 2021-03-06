import React from 'react'

export default function Logout() {

  const logout = () => {
    localStorage.clear();
    alert('Logged out')
    window.location.assign("http://localhost:3000/login");
  }

  return (
    <div>
      <button onClick={logout} className="btn btn-primary navbar-btn navbar-left logout-btn"><span className="logout-text">Log Out</span></button>
    </div>
  )
}
