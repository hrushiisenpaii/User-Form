import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import './Navigate.css'
import Navbar from '../../Components/Navbar/Navbar'
import UserProfile from '../UserProfile/UserProfile'
import Users from './Users'

const Navigate = () => {
    var User = useSelector((state) => (state.currentUserReducer))

    const location = useLocation()
   
    return(
        <>
        <Navbar/>
        <div className='navigate-container'>
            {
            User === null ?
            <>
                <p>Click on Login to view User-Form</p>
            </> 
            : 
            <>
                <p>Currently logged in as {User.result.name}</p>
                
                <div>
                <UserProfile user={User}/>
                </div> 
                <p>All Submitters</p>
                <Users />
                
                <p className='terms'>This project is created as an Assignment for StackFusion
                 for the position of Full Stack Developer.</p>
            </>
            }
        </div>
        </>  
    )
    
}



export default Navigate