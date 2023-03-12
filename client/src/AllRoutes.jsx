import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Confirm from './Pages/Confirm'
import Home from './Pages/Home(userform)/Home'
import Navigate from './Pages/Navigate/Navigate'
import UserProfile from './Pages/UserProfile/UserProfile'

const AllRoutes = () => {
  return (
    <Routes >
      <Route exact path='/' element={<Navigate/>}/>
      <Route exact path='/userform' element={<Home/>}/>
      <Route exact path='/User/:id' element={<UserProfile/>}/>
      <Route exact path='/confirm' element={<Confirm/>}/>

    </Routes>
  )
}

export default AllRoutes