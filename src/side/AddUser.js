import React, { useState, useEffect } from "react";
import Navbar from "../pages/Navbar";
import Sidebar from "../pages/Sidebar";
import {View } from "../pages/View";
import { Link } from "react-router-dom";

function AddUser() {
    const [name, setName] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [user, setUser] =useState({})
    // const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")
    const [department, setDepartment] = useState("")
    const [salery, setSalery] = useState("")
    const [date, setDate] = useState("")

   
  
    function handleFormSubmit(e) {
      e.preventDefault();
  
        let arr=[];
        if(localStorage.getItem("user")){
          arr= JSON.parse(localStorage.getItem("user"))
        }
        let user={name,lname,email,phone,city,department,salery,date};
        arr.push(user);
        localStorage.setItem("user", JSON.stringify(arr));
       
        console.log("Saved in Local Storage");
        // navigate('/login');
     }
  


    let Data=JSON.parse(localStorage.getItem("user"))

    return (
        <div>
            <Navbar/>
            <Sidebar/>
        <div className="fwidth">
            <div className="col main   bg-light">
                <div className="wrapper">
               
  
                    <h1>UserList</h1>
                    <p>Add and view your Users using local storage</p>
                    <div className="main">
                        <div className="form-container">
                            <form
                                autoComplete="off"
                                className="form-group"
                                // onSubmit={handleUserSubmit}
                                onSubmit={handleFormSubmit}
                            >
                                <label>First Name :-</label>
                                <input
                                    type="text"
                                    className="form"
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                ></input>
                              

                                <label> Last Name :-</label>
                                <input
                                    type="text"
                                    className="forms"
                                    required
                                    onChange={(e) => setLname(e.target.value)}
                                    value={lname}
                                ></input>
                                  <br></br> <br></br>

                                <label>  Email :-</label>
                                <input
                                    type="text"
                                    className="form"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                ></input>
                                

                                <label>  Number :-</label>
                                <input
                                    type="text"
                                    className="forms"
                                    required
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone}
                                ></input>
                                 <br></br> <br></br>

                                <label>  City :-</label>
                                <input
                                    type="text"
                                    className="form"
                                    required
                                    onChange={(e) => setCity(e.target.value)}
                                    value={city}
                                ></input>
                                

                                <label>  Department :-</label>
                                <input
                                    type="text"
                                    className="forms"
                                    required
                                    onChange={(e) => setDepartment(e.target.value)}
                                    value={department}
                                ></input>
                                <br></br> <br></br>

                                <label>  Salery :-</label>
                                <input
                                    type="text"
                                    className="form"
                                    required
                                    onChange={(e) => setSalery(e.target.value)}
                                    value={salery}
                                ></input>
                               

                                <label>  Join Date :-</label>
                                <input
                                    type="text"
                                    className="forms"
                                    required
                                    onChange={(e) => setDate(e.target.value)}
                                    value={date}
                                ></input>
                                <br></br> <br></br>

                                
                                <button type="submit" className="btn btn-success btn-md">
                                    ADD
                                </button>
                            </form>
                        </div>

                        <div className="view-container">
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
                                     <th>Action</th>
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
                                        <td>
                                            <Link className="btn btn-primary m-2" to={''} >Edit</Link>
                                            <Link className="btn btn-danger m-2" to={''} >Delete</Link>
                                        </td>
                                    </tr>
                                    )
                                }

                                )

                                }
                                
                                </table>
                                        
                                    </div>
                                    <button
                                        className="btn btn-danger btn-md"
                                        onClick={() => AddUser([])}
                                    >
                                        Remove All
                                    </button>
                                </div>
                             )} 
                            {user.length < 1 || <div>No User are added yet</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AddUser;








// import React, { Component } from 'react';
// import './App.css'


// class Apps extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       fname: '',
//       lname: '',
//       email: '',
//       number: ''
//     }

//     // this.handleNum1 = this.handleNum1.bind(this);
//     // this.submit = this.submit.bind(this);

//   }
//   handleNum1 = (evt) => {
//     //console.log(evt.target.value);
//     this.setState({ [evt.target.name]: evt.target.value });
//   }

//   submit = () => {
//     if (localStorage.getItem("data") || localStorage.getItem("data") == null) {
//       debugger
//       let data = JSON.parse(localStorage.getItem("data")) || []
//       var arr = {
//         fname: this.state.fname,
//         lname: this.state.lname,
//         email: this.state.email,
//         number: this.state.number

//       }
//       data.push(arr)
//       localStorage.setItem("data", JSON.stringify(data))
//     }
//     // else{
//     //   var obj=JSON.parse(localStorage.getItem('data'))
//     //   let object={
//     //     fname:this.state.fname,
//     //     lname:this.state.lname,
//     //     email:this.state.email,
//     //     number:this.state.number

//     //    }

//     //   obj.push(object)
//     //   localStorage.setItem('data',JSON.stringify(obj))

//     // }


//     // localStorage.setItem('data', JSON.stringify(event))

//   };
//   render() {
//     let Data = JSON.parse(localStorage.getItem("data"))
//     return (
//       <div className="App">
       
//         <center>
//           <h1> Form</h1>


//           <input type="text" name="fname" value={this.state.fname}
//             onChange={this.handleNum1}
//             placeholder='Fname' /><br />

//           <input type="text" name="lname" value={this.state.lname}
//             onChange={this.handleNum1}
//             placeholder='Lname' /><br />

//           <input type="email" name="email" value={this.state.email}
//             onChange={this.handleNum1}
//             placeholder='Email' /><br />

//           <input type="number" name="number" value={this.state.number}
//             onChange={this.handleNum1}
//             placeholder='Phone' /><br />

//           {/* <input type="submit" onClick={this.submitt}/> */}
//           <button type='button' onClick={this.submit}>Submit</button><br/><br/>



//         <table border={"1"}>
//           <tr>
//             <th>Fname</th>
//             <th>Lname</th>
//             <th>Email</th>
//             <th>Phone</th>
//           </tr>
//           {Data.map((user, x) => {
//             return (
//               <tr>
//                 <td>{user.fname}</td>
//                 <td>{user.lname}</td>
//                 <td>{user.email}</td>
//                 <td>{user.number}</td>
//               </tr>
//             )
//           }

//           )

//           }
         
//         </table>

//         </center>

//       </div>
//     );
//   }
// }

// export default Apps;
