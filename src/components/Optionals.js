import React from 'react'

const Optionals = () => {
  return (
    <div className='optionals' id='aptOptionsInner'>
      <div style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
        <h3 style={{flexGrow: '0.2'}}>Optionals</h3>
        <span style={{color: 'darkgray'}}>3/6</span>
      </div>

      <div style={{display: 'flex', justifyContent: 'space-around', flexGrow: '1.3', flexBasis: 'auto'}}>
        <div>
          <label>DTS Stencil: </label>
          <input type='checkbox' id='stencilCheckbox'/> 
        </div>

        <div>
          <label>Regrip: </label>
          <input type='checkbox'></input>
        </div>     
      </div>
    </div>
  )
}

export default Optionals