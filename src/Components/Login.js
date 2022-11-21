import React, { useState } from "react";
import {  useNavigate } from "react-router-dom"



function Login() {
  const [email, setEmaillog] = useState(" ");
  const [password, setPasswordlog] = useState(" ");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    
    let userDetails = JSON.parse(localStorage.getItem("user"));
    userDetails.find(element => {
      if (element.email === email && element.password === password) {
        navigate("/home");
        localStorage.setItem("user_login",JSON.stringify(userDetails))
      } else {
        //  setFlag(true);
        // alert('Invalid User');

      }
    }
    )
  }

  return (
    <div>

      <form onSubmit={handleLogin}>
        <div className="inner">
          <h3>LogIn</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block my-3">
            Login
          </button>

     
        </div>
      </form>
    
    </div>
  );
}

export default Login;
