import React from 'react'
import UsersList from './UsersList'
import { useSelector } from "react-redux";

import { useLocation } from 'react-router-dom'

const Users = () => {

  const location = useLocation()
  const userList = useSelector((state) => state.usersReducer);
  console.log(userList.data)
  return (
    <div>

      {
        userList.length === 0 ?
        <>
        <p className='terms'>Loading...</p>
        </>
        :
        <>
         {
        location.pathname === '/' ?
        <UsersList /> :
        <></>
        }
        </>
      }
     
    </div>
  )
}

export default Users