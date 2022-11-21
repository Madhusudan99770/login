import React from 'react'
// import {Icon} from 'react-icons-kit'
// import {trash} from 'react-icons-kit/feather/trash'

export const View = ({user,deleteUser}) => {
    
    return user.map(user=>(
        
        <tr key={user.address}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
            <td className='delete-btn' onClick={()=>deleteUser(user.address)}>
                {/* <Icon icon={trash}/> */}<button>delete</button>
            </td>           
        </tr>            
    
))
}