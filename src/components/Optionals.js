import React from 'react'

const Optionals = () => {
  return (
    <div className='optionals' id='aptOptionsInner'>
       <fieldset>
              <label>DTS Stencil: </label>
              <input 
                type='checkbox' 
                id='stencilCheckbox'
              /> 
                <br></br>
              <label>Regrip: </label>
              <input type='checkbox'></input>
          </fieldset>
    </div>
  )
}

export default Optionals