import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import Button from '@material-ui/core/Button';

export default function Login() {
  const history = useHistory();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const loginSubmit = e => {

    e.preventDefault();


    const userData = {username,password};
    console.log(userData)
    axios.post('http://localhost:5000/users/login',userData)
      .then((res) => {
          console.log("res : ",res)
          console.log("res.data : ",res.data)
          localStorage.setItem('username',res.data);
          history.push("/dashboard");
          const userGetItem = localStorage.getItem('username');
          console.log('userGetItem : ',userGetItem)
      })
      .catch(err=>{
          console.log(err)
      })
      console.log("Hello")

  }

  return (
    // <div>
    //   <div className="container mt-4">
    //     <h2>Login</h2>
    //     <div className="row mt -3">
    //       <div className="col-md-4">
    //         <div className="form-group">
    //           <div className="mb-3">
    //             <input type="text" placeholder="Enter your username" className="form-control"
    //               onChange={(e) => { setUserName(e.target.value) }}
    //             />
    //           </div>
    //           <div className="mb-3">
    //             <input type="password" placeholder="Enter your password" className="form-control"
    //               onChange={(e) => { setPassword(e.target.value) }}
    //             />
    //           </div>
    //           <button type="submit" className="btn btn-primary"
    //             onClick={loginSubmit}
    //           >Submit</button>
    //           {/* <Button variant="contained" color="primary" type="submit" onClick={loginSubmit}>Submit</Button> */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 login-section-wrapper">
            <div className="brand-wrapper">
              <img src="assets/images/ibm.svg" className="logo" alt="ibm-logo" />
            </div>
            <div className="login-wrapper my-auto">
              <h1 className="login-title">Login</h1>
              <form action="" onSubmit={loginSubmit}>
                <div className="form-group">
                  <label htmlFor="emailInput">Email</label>
                  <input type="text" id="emailInput" placeholder="example@example.com" className="form-control"
                    onChange={(e) => { setUserName(e.target.value) }} />
                </div>
                <div className="form-group">
                  <label htmlFor="passwordInput">Password</label>
                  <input type="password" id="passwordInput"
                    placeholder="Enter your Password"
                    className="form-control"
                    onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <input type="submit" className="btn btn-block login-btn"
                  value="Login" />
              </form>
              <p className="login-wrapper-footer-text">Don't have an account? </p>
              <a href="/register">Register here.</a>
            </div>
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img src="assets/images/man-cricket.jpeg" alt="man-cricket-side" className="login-img" />
          </div>
        </div>
      </div>
    </div>
  )
}
