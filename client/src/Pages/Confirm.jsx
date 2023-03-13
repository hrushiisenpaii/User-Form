import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Link } from "react-router-dom";

const Confirm = () => {

   useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 20000)
   }, []);

    var User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate()

  return (

    <>
    <div className='confirm-container'>
        <div>
            <p>Thanks! {User.result.name} for Submitting the form.</p>
            <p>An E-mail will be sent to you after clicking on Continue.</p>
            <p className='terms'>(check spam folder if not received, this might take a few mins)</p>
            <p className='terms'>Wait we are redirecting you to your profile...</p>
            <p>Click on Continue to start verify process.</p>
            <br />
            <p className='terms'>You can also login later to view your details.</p>
        </div>
        <form action={`https://formsubmit.co/${User.result.email}`} method="POST" target='_blank'>
            <input type="hidden" name="_subject" value="Thanks for your submission!"/>
            <input type="hidden" name="_next" value="https://userformhp.netlify.app/" />
            <input type="hidden" name="_autoresponse" value="Thanks"></input>
            <button type="submit" className='submit-btn'>Continue</button>
        </form>
    </div>

    <div className='redirect'>
    <p className='terms'>Redirecting in 20 sec...</p>
    <Link to={'/'}>
      <p className='terms'> OR go to profile</p>
    </Link>
    </div>

    </>
  )
}

export default Confirm