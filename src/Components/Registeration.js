import React, { useState } from "react";
import { Alert } from "react-bootstrap";
// import Login from "./Login";
import {useNavigate} from "react-router-dom"


function Registration() {
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("")
 

  function handleFormSubmit(e) {
    e.preventDefault();

      let arr=[];
      if(localStorage.getItem("user")){
        arr= JSON.parse(localStorage.getItem("user"))
      }
      let obj={name,lname,email,password,phone};
      arr.push(obj);
      localStorage.setItem("user", JSON.stringify(arr));
     
      console.log("Saved in Local Storage");
      navigate('/login');
   }

  const navigate=useNavigate();

  function handleClick() {
    navigate("/login")
  }


  return (
        <div >
            <form onSubmit={handleFormSubmit}>
              <div className="inner">          
                  <h3>Register</h3>

              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Lname</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Lname"
                  name="lname"
                  onChange={(event) => setLname(event.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone No.</label>
                <input
                  type="Phone"
                  className="form-control"
                  placeholder="Enter contact no"
                  onChange={(event) => setPhone(event.target.value)}
                  required
                />
              </div>

              <button type="submit"  className="btn btn-dark btn-lg btn-block my-3 ">
                Register
              </button>
              <p   onClick={handleClick}  className="forgot-password text-right">
                Already registered{" "}log in?
                
              </p>
             
              </div>

            </form>
      
        </div>
    
    
  );
}

export default Registration;
