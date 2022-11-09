import React from 'react'

const Optionals = (props) => {

  const handleStencilInput = e => {
    if (e.target.checked === false) {
      props.setStencilInput('No')
    } else {
      props.setStencilInput('Yes')
    }
  }

  const handleRegripInput = e => {
    if (e.target.checked === false) {
      props.setRegripInput('No')

    } else {
      props.setRegripInput('Yes')
    }
  }

  return (
    <div className='optionals' id='aptOptionsInner'>
      <div id='optionHeader'>
        <h3>Optionals</h3>
        <span style={{color: 'darkgray'}}>3/6</span>
      </div>

      <div style={{display: 'flex', justifyContent: 'space-around', flexGrow: '1.3', flexBasis: 'auto', alignItems: 'center', marginBottom:'3%'}}>
        <div>
          <label>DTS Stencil: </label>
          <input type='checkbox' id='stencilCheckbox' onChange={handleStencilInput}/> 
        </div>

        <div>
          <label>Regrip: </label>
          <input type='checkbox' onChange={handleRegripInput}></input>
        </div>     
      </div>
    </div>
  )
}

export default Optionals