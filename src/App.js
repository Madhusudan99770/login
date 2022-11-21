import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Registration from './Components/Registeration';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import AddUser from './side/AddUser'
import Dashboard from './side/Dashboard';
import Department from './side/Department';
import Search from './side/Search';

function App() {
  return (
    <Router>
      {/* <div className="App"> */}
        {/* <div className="outer"> */}
          <div >



            <Routes>
              
              
              <Route exact path='/' element={<Registration />} />
              <Route path='/login' element={<Login/>}/>
              <Route path='/home' element={<Home/>} />
              <Route path='/adduser' element={<AddUser/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/department' element={<Department/>}/>
              <Route path='/search' element={<Search/>}/>
            </Routes>

          {/* </div>
        </div> */}
      </div>
    </Router>
  );
}

export default App;

















// import React, { Component } from 'react'
// import axios from 'axios';

// export default class App extends Component {

//   constructor(props){
//     super(props);
//     this.state={
//       items:[],
//       isLoaded:false
//     }
//   }

//   componentDidMount(){
//     axios.get(`https://633e9f7783f50e9ba3b47630.mockapi.io/user`)
//     .then(data=>{
//       console.log(data)
//       this.setState({
//         items:data,
//         isLoaded:true,
//       })
//     });
//   }items

//   render() {
//     debugger
//     let items=this.state.items
//     //  axios.get(`https://633e9f7783f50e9ba3b47630.mockapi.io/user`)
//     // .then(data=>{
//       // this.setState({
//       //   items:data,
//       //   // isLoaded:true,
//       // })
//       // item=data
//     // });
//     // if(!isLoaded)
//     // return (
//     //   <div>Loding.....</div>
//     // )
//     // console.log(data)
    
//       return(
//         <div>
//           <table>
//             <tr>
//               <th>Fname</th>
//               <th>Lname</th>
//               <th>Email</th>
//               <th>Number</th>
//             </tr>

//             {items?.map(item=>(
//               <tr>
//                 <td>{item.fname}</td>
//                 <td>{item.lname}</td>
//                 <td>{item.email}</td>
//                 <td>{item.phone}</td>
//               </tr>
//             ))}
//           </table>
//         </div>

//       );
//     }
//   }
// // }

