import React from 'react'

import Navbar from '../../Components/Navbar/Navbar'
import UserForm from '../../Components/UserForm/UserForm'


const Home = () => {

  return (
    <>
    <Navbar/>

    <div className='user-form-container'>
      <UserForm/>
    </div>
    </>
  )
}

export default Home