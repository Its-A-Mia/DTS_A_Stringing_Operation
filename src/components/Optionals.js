import React, { useState } from 'react'

const Optionals = (props) => {

  // gives access to animation
  const [stencilBouncyButton, setStencilBouncyButton] = useState(false)
  const [regripBouncyButton, setRegripBouncyButton] = useState(false)

  const stencilAnimation = e => {
    e.stopPropagation()
    setStencilBouncyButton(true)
  }

  const regripAnimation = e => {
    e.stopPropagation()
    setRegripBouncyButton(true)
  }

  const handleStencilOnUp = e => {
    stencilAnimation(e)
    const stencilBtn = document.getElementById('stencilBtn')
    if (props.stencilInput === 'No') {
      props.setStencilInput('Yes')
      stencilBtn.innerHTML='Yes'
      document.documentElement.style.setProperty('--stencilBackgroundColor', 'linear-gradient(180deg, rgba(227,240,87,1) 0%, rgba(146,168,29,1) 100%)')
    } else {
      props.setStencilInput('No')
      stencilBtn.innerHTML='No'
      document.documentElement.style.setProperty('--stencilBackgroundColor', 'darkgray')
    }
  }

  const handleRegripOnUp = e => {
    regripAnimation(e)
    const regripBtn = document.getElementById('regripBtn')
    if (props.regripInput === 'No') {
      props.setRegripInput('Yes')
      regripBtn.innerHTML='Yes'
      document.documentElement.style.setProperty('--regripBackgroundColor', 'linear-gradient(180deg, rgba(227,240,87,1) 0%, rgba(146,168,29,1) 100%)')
    } else {
      props.setRegripInput('No')
      regripBtn.innerHTML='No'
      document.documentElement.style.setProperty('--regripBackgroundColor', 'darkgray')
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
          <label>DTS Stencil</label>
            <br></br>
          <button
            id='stencilBtn'
            className={stencilBouncyButton ? 'bouncyButton' : ''}
            onMouseUp={e => handleStencilOnUp(e)}
            onAnimationEnd={() => setStencilBouncyButton(false)}
          >
            No
          </button>
        </div>

        <div>
          <label>Regrip</label>
            <br></br>
          <button
            id='regripBtn'
            className={regripBouncyButton ? 'bouncyButton' : ''}
            onMouseUp={e => handleRegripOnUp(e)}
            onAnimationEnd={() => setRegripBouncyButton(false)}
          >
            No
          </button>
        </div>     
      </div>
    </div>
  )
}

export default Optionals