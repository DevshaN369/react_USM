import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../slices/UserSlices'
import UserDetail from '../components/UserDetail'
const Users = () => {
  const user=useSelector((state)=>state.UserData.Users)
const Dispatch=useDispatch()
const handleDelete=(name)=>{
Dispatch(removeUser(name))
}
  return (
    <div>
     {
      user.map((item,index)=>{
        return(
          <UserDetail handleDelete={handleDelete} item={item} key={index}/>
        )
      })
     }
      </div>
  )
}

export default Users