import React from 'react'

const NameAndContact = () => {
  return (
    <div className='nameAndContact' id='aptOptionsInner'>
      <div style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
        <h3 style={{flexGrow: '0.2'}}>Contact Information</h3>
        <span style={{color: 'darkgray'}}>4/6</span>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', flexGrow: '1'}}>
        <div>
          <label>Name: </label>
          <input 
            type='text'
            size='20'
            required>  
          </input>
        </div>

        <div>
          <label>Phone Number: </label>
          <input 
            type='text'
            pattern='^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$'
            placeholder='xxx-xxx-xxxx'
            required>
          </input>
        </div>

        <div>
          <label>Email: </label>
          <input 
            type='text'
            pattern='^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$'
            placeholder='janedoe@domain.com'
            required>
          </input>
        </div>    
      </div>
    </div>
  )
}

export default NameAndContact