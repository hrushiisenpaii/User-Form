import React, { useState } from 'react'
import moment from 'moment'
import "./User.css"

import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { signup, login } from '../../actions/auth.js'

const UserForm = () => {

  const [ IsSignup, SetIsSignup ] = useState(true)
  const [ name, setName] = useState('')
  const [ DOB, setDOB] = useState('')
  const [ email, setEmail] = useState('')
  const [ phone, setPhone] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSwitch = () => {
    SetIsSignup(!IsSignup)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(IsSignup){
      if(!name){
          alert("Enter a name to continue")
      }else if(!DOB){
        alert("Enter your date of birth to continue")
      }else if(!email){
        alert("Enter an Email to continue")
      }else if(!phone){
        alert("Enter phone number to continue")
      }else if( (moment().diff(moment(DOB, 'YYYYMMDD'), 'years')) < 18){
        alert("User must be above 18")
      }
      console.log(name, email, DOB, phone)
      dispatch(signup({ name,DOB, email, phone }, navigate))
    } else{
      dispatch(login({ email, phone }, navigate))
    }
  }

  return (
    <section classname="auth-section">
      <div className="auth-container-1">
      <div>
        { !IsSignup }
        <form onSubmit={handleSubmit}>
          {
            IsSignup && (
              <label htmlFor='name'>
                <h4>Display Name</h4>
                <input type="text" name='name' id='name' placeholder='Name...' onChange={(e) => {setName(e.target.value)}}/>
              </label>
            )
          }
          {
            IsSignup && (
              <label htmlFor='DOB'>
                <h4>Date of Birth</h4>
                <input type="date" name='DOB' id='DOB' onChange={(e) => {setDOB(e.target.value)}}/>
              </label>
            )
          }

          <label htmlFor="email">

            <h4>Email</h4>
            <input type="email" name='email' id='email' placeholder='xxx123@gmail.com' onChange={(e) => {setEmail(e.target.value)}}/>

          </label>

          <label htmlFor="phn-nmbr">

            <div className='phone-box'>
              <h4>Phone number</h4>
            </div>

            <input type="text" name='phn-nmbr' id='phn-nmbr' placeholder='xxxxxx1234' onChange={(e) => {setPhone(e.target.value)}}/>

          </label>

          {
            IsSignup && (
              <p className='terms'>
                Email and Phone number are required to view details later.
              </p>
            )
          }

          <button type='submit' className='submit-btn'>{ !IsSignup ? 'View' : 'Submit' }</button>
          
        </form>
       
      </div>

      <p>
          {IsSignup ? 'Already submitted information?' : "No Submission?"}
          <button type='button' className='handle-Switch-btn' onClick={handleSwitch}>{ IsSignup ? "View" : "Submit" }</button>
        </p>

      </div>

    </section>
  )
}

export default UserForm