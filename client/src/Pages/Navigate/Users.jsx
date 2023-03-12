import React from 'react'
import UsersList from './UsersList'

import { useLocation } from 'react-router-dom'

const Users = () => {

    const location = useLocation()

  return (
    <div>
         {
                location.pathname === '/' ?
                <UsersList /> :
                <></>
            }
    </div>
  )
}

export default Users