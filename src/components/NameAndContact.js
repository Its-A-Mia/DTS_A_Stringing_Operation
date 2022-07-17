import React from 'react'

const NameAndContact = () => {
  return (
    <div className='nameAndContact' id='aptOptionsInner'>
       <fieldset>
           
              <label>Name: </label>
              <input 
                type='text'
                size='20'
                required>  
              </input>
                <br></br>
              <label>Phone Number: </label>
              <input 
                type='text'
                pattern='^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$'
                placeholder='xxx-xxx-xxxx'
                required>
              </input>
                <br></br>
              <label>Email: </label>
              <input 
                type='text'
                pattern='^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$'
                placeholder='janedoe@domain.com'
                required>
              </input>
          </fieldset>
    </div>
  )
}

export default NameAndContact