import React from 'react'
import { useSelector } from 'react-redux'

const Confirm = () => {

    var User = useSelector((state) => (state.currentUserReducer))
    console.log(User.result.email)

  return (
    <div className='confirm-container'>
        <div>
            <p>Thanks! {User.result.name} for Submitting the form.</p>
            <p>An E-mail will be sent to you after successfull completion.</p>
            <p className='terms'>(check spam folder if not received, this might take a few mins)</p>
            <p className='terms'>You can also click back to view form, the mail will come later...</p>
            <p>Click on Continue and start verify process.</p>
            <br />
            <p className='terms'>You can also login later to view your details.</p>
        </div>
        <form action={`https://formsubmit.co/${User.result.email}`} method="POST" target='_blank'>
            <input type="hidden" name="_subject" value="Thanks for your submission!"/>
            <input type="hidden" name="_next" value="https://userformhp.netlify.app" />
            <input type="hidden" name="_autoresponse" value="Thanks"></input>
            <button type="submit" className='submit-btn'>Continue</button>
        </form>
    </div>
  )
}

export default Confirm