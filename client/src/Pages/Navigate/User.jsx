import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'


const User = ({user}) => {
  return (
    <Link className='user-profile-link'>
        <h5>{user.name}</h5>
        <h6>{moment(user.DOB).fromNow().substring(0, 8)}</h6>
    </Link>
  )
}

export default User