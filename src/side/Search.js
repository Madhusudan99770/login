import React ,{useState} from 'react'
import Navbar from '../pages/Navbar'
import Sidebar from '../pages/Sidebar'
import { Link } from "react-router-dom";
// import React, { useState, useEffect } from "react";

const Search = () => {

  const [user, setUser] =useState({})
 
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [city, setCity] = useState("")


  let Data = JSON.parse(localStorage.getItem("user"))
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className='fwidth '>
        
        <div className="view-container mt-5">
        <form className="form-inline my-2 my-lg-0 ">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={''}>Search</button>
        </form>
                            {user.length > 0 || (
                                <div>
                                    <div className="table-responsive">


                                    
                                    <table className="table">
                                  <tr>
                                    <th>Fname</th>
                                    <th>Lname</th>
                                     <th>Email</th>
                                     <th>Phone</th>
                                     <th>CIty</th>
                                     <th>Department</th>
                                     <th>Salery</th>
                                     <th>Date</th>
                                     
                                  </tr>
                               {Data.map((user) => {
                                    return (
                                    <tr>
                                        <td>{user.name}</td>
                                        <td>{user.lname}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.city}</td>
                                        <td>{user.department}</td>
                                        <td>{user.salery}</td>
                                        <td>{user.date}</td>
                                       
                                    </tr>
                                    )
                                }

                                ) 

                                }
                                
                                </table>
                                        
                                    </div>
                                    <button
                                        className="btn btn-danger btn-md"
                                        onClick={() => ([])}
                                    >
                                        Remove All
                                    </button>
                                </div>
                             )} 
                            {/* {user.length < 1 || <div>No User are added yet</div>} */}
                        </div>
      </div>
    </div>
  )
}

export default Search