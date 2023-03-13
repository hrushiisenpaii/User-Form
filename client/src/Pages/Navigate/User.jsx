import React from 'react'
import moment from 'moment'
import { Link } from "react-router-dom";


const User = ({user}) => {
  
  return (
    <Link className='user-profile-link'>
        <h5>{user.name}</h5>
        <h6>{moment(user.DOB).fromNow().substring(0, 8)}</h6>
    </Link>
  )
}

export default User