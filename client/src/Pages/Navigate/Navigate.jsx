import React from 'react'
import { useSelector } from 'react-redux'

import './Navigate.css'
import Navbar from '../../Components/Navbar/Navbar'
import UserProfile from '../UserProfile/UserProfile'

const Navigate = () => {
    var User = useSelector((state) => (state.currentUserReducer))
   
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

                <p className='terms'>This project is created as an Assignment for StackFusion
                 for the position of Full Stack Developer.</p>
            </>
            }
        </div>
        </>  
    )
    
}



export default Navigate