import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Button} from 'react-bootstrap';

export default function Logout() {

    const logout = () =>{
      localStorage.clear();
      alert('Logged out')
      window.location.assign("http://localhost:3000/login"); 
    }
    
    return (
        <div>
          <Button onClick={logout}>Log Out</Button>
        </div>
    )
}
