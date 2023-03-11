import React, {useEffect} from 'react'
import decode from 'jwt-decode'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { setCurrentUser } from '../../actions/currentUser'
import './Navbar.css'

const Navbar = () => {

  var User = useSelector((state) => (state.currentUserReducer))

  const dispatch = useDispatch()
  const Navigate = useNavigate()

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [User?.token, dispatch]);
  

  const handleLogout = () => {
    dispatch({type: "LOGOUT"})
    dispatch(setCurrentUser(null))
    Navigate('/userform')
    alert("You have been logged out..")
  }

  return (
    <nav className='main-nav'>
        <div className="navbar">
            <Link to={'/'} className="nav-item">
            <h1>FullStackDev</h1>
            </Link> 

            <div>
            { User === null ? 
                <>
                <Link to={'/userform'} className='nav-item'>
                <p>Log in</p>
                </Link>
                </>
                :
                <>
                <p className='nav-item' onClick={handleLogout}>Log out</p>
                </>
            } 
            </div>
            
        </div>
    </nav>
  )
}

export default Navbar