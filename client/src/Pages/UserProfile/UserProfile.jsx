import React from 'react'
import moment from 'moment'

import './UserProfile.css'

const UserProfile = ({user}) => {

  return (
    <div className='user-profile-container'>
      
      <div className="user-profile-sec">
        <p className='user-profile-item'>Name :</p>
        <p>{user.result.name}</p>
      </div>
      <div className="user-profile-sec">
        <p className='user-profile-item'>Date of Birth :</p>
        <p>{moment(user.result.DOB).toLocaleString()}</p>
      </div>
      <div className="user-profile-sec">
        <p className='user-profile-item'>Email-id :</p>
        <p>{user.result.email}</p>
      </div>
      <div className="user-profile-sec">
        <p className='user-profile-item'>Phone number :</p>
        <p>{user.result.phone}</p>
      </div>
      <div className="user-profile-sec">
        <p className='user-profile-item'>Joined :</p>
        <p>{moment(user.result.joinedOn).fromNow()}</p>
      </div>
     
    </div>
  )
}

export default UserProfile