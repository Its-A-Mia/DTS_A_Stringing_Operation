import React from 'react'

const NameAndContact = (props) => {

  const handleNameInput = e => {
    props.setNameInput(e.target.value)
  }

  const handlePhoneNumberInput = e => {
    props.setPhoneNumberInput(e.target.value)
  }

  const handleEmailInput = e => {
    props.setEmailInput(e.target.value)
  }

  return (
    <div className='nameAndContact' id='aptOptionsInner'>
      <div id='optionHeader'>
        <h3>Contact Information</h3>
        <span style={{color: 'darkgray'}}>4/6</span>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', flexGrow: '1', alignItems: 'center'}}>
        <div>
          <label>Name: </label>
          <input 
            type='text'
            size='20'
            onChange={handleNameInput}
            required>  
          </input>
        </div>

        <div>
          <label>Phone Number: </label>
          <input 
            type='text'
            pattern='^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$'
            placeholder='xxx-xxx-xxxx'
            onChange={handlePhoneNumberInput}
            required>
          </input>
        </div>

        <div>
          <label>Email: </label>
          <input 
            type='email'
            pattern='^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$'
            placeholder='janedoe@domain.com'
            onChange={handleEmailInput}
            required>
          </input>
        </div>    
      </div>
    </div>
  )
}

export default NameAndContact