import React, { useState } from 'react'
import moment from 'moment'
import validator from 'email-validator'
import {phone} from 'phone'
import "./User.css" 

import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { signup, login } from '../../actions/auth.js'

const UserForm = () => {

  const [ IsSignup, SetIsSignup ] = useState(true)
  const [ name, setName] = useState('')
  const [ DOB, setDOB] = useState('')
  const [ email, setEmail] = useState('')
  const [ phones, setPhone] = useState('')

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
      } else if(!phones){
        alert("Enter phone number to continue")
      }else if(!phone(phones).isValid){
        alert("Not a Valid Number")
      }else if (!validator.validate(email)){
        alert("Not a valid Email")
      }else if( (moment().diff(moment(DOB, 'YYYYMMDD'), 'years')) < 18){
        alert("User must be above 18")
      }else{
        dispatch(signup({ name, DOB, email, phones }, navigate))
      }
      
      //console.log(moment().diff(moment(DOB, 'YYYYMMDD'), 'years'))
    } else{
      dispatch(login({ email, phones }, navigate))
    }
  }

  return (
    <section classname="auth-section">
      <div className="auth-container-1">
      <div>
        { !IsSignup }
        <form>
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

            <input type="text" name='phn-nmbr' id='phn-nmbr' placeholder='+91xxxxxx1234' onChange={(e) => {setPhone(e.target.value)}}/>

          </label>

          {
            IsSignup && (
              <p className='terms'>
                Email and Phone number are required to view details later.
              </p>
            )
          }
         
          <button type='submit' className='submit-btn'  onClick={handleSubmit}>{ !IsSignup ? 'Log in' : 'Submit Details' }</button>
      
        </form>
       
      </div>

      <p>
        {IsSignup ? 'Already a member?' : "Not a member?"}
        
        <button type='button' className='handle-Switch-btn' onClick={handleSwitch}>{ IsSignup ? "View" : "Join" }</button>
      </p>

      </div>
     
    </section>
  )
}

export default UserForm