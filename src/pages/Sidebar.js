import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

const Sidebar = () => {
    return (
        <div className="side">
            <>
                <title>W3.CSS</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
                <div className='side'>
                <div className="w3-sidebar w3-bar-block w3-teal" style={{ margintop: "12px", width: "20%"}}>
                    <p  className="w3-bar-item w3-button">
                       <Link to='/dashboard'> Dashboard</Link>
                    </p>
                    <p  className="w3-bar-item w3-button">
                    <Link to='/adduser'> Add User</Link>
                    </p>
                    <p className="w3-bar-item w3-button">
                    <Link to='/department'> Department</Link>
                    </p>
                    <p  className="w3-bar-item w3-button">
                    <Link to='/search'> Search</Link>
                    </p>
                </div>
                </div>
                
            </>

        </div>
    )
}

export default Sidebar;


















// import React from 'react';
// import '../main.css';
// import {Link} from 'react-router-dom';

// const Sidebar = () => {
// 	return (
		
// 			<div className="main">
			

// 				<nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-info" style={{ marginTop: "0px" }}>
// 					<div className="position-sticky" >
// 						<div className="list-group list-group-flush mx-3 mt-2" >
// 							<Link
// 								to="/dashboard"
// 								className="list-group-item list-group-item-action py-2 ripple"
// 								aria-current="true"
// 							>
// 								<i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Dashboard</span>
// 							</Link>
// 							{/* <Link to="/website" className="list-group-item list-group-item-action py-2 ripple ">
// 								<i className="fas fa-chart-area fa-fw me-3"></i><span>Webiste</span>
// 							</Link> */}

// 							<Link  to="/orders" className="list-group-item list-group-item-action py-2 ripple"
// 							><i className="fas fa-chart-bar fa-fw me-3"></i><span>User List</span></Link>
							
// 							<Link to="/password" className="list-group-item list-group-item-action py-2 ripple"
// 							><i className="fas fa-lock fa-fw me-3"></i><span>Password</span></Link>
							
// 							<Link to="/department" className="list-group-item list-group-item-action py-2 ripple"
// 							><i className="fas fa-chart-line fa-fw me-3"></i><span>Department</span></Link>
							
					
// 							{/* <Link to="/salery" className="list-group-item list-group-item-action py-2 ripple">
// 								<i className="fas fa-chart-pie fa-fw me-3"></i><span>Salery</span>
// 							</Link> */}
					
							
							
							
// 						</div>	
// 					</div>
// 				</nav>
				
// 			</div>
	
// 	)
// }
// export default Sidebar;
