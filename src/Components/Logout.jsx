import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';

export default function Logout() {

    localStorage.clear();
    window.location.assign("http://localhost:3000/login"); 

    return (
        <div>
        
      </div>
    )
}
