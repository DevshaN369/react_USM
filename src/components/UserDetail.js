import React from 'react'
import "./Users.css"
const UserDetail = ({item,handleDelete}) => {
  return (
    <div className="user_container">
    <div>
    <p>name: {item.username}</p>
    <p>contact: {item.contact}</p>
    <p>age: {item.age}</p>
    <p>address: {item.address}</p>
    </div>
    <button onClick={()=>handleDelete(item.username)} className='delete_btn'>Delete</button>
   </div>
  )
}

export default UserDetail