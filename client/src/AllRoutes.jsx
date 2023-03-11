import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home(userform)/Home'
import Navigate from './Pages/Navigate/Navigate'
import UserProfile from './Pages/UserProfile/UserProfile'

const AllRoutes = () => {
  return (
    <Routes >
      <Route exact path='/' element={<Navigate/>}/>
      <Route exact path='/userform' element={<Home/>}/>
      <Route exact path='/User/:id' element={<UserProfile/>}/>
     
    </Routes>
  )
}

export default AllRoutes