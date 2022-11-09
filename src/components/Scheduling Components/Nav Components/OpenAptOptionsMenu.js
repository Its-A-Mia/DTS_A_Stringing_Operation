import React, { useState } from 'react'


const OpenAptOptionsMenu = () => {

    const handleAptOptionsMenuBtnClick = e => {
      e.stopPropagation()
      document.documentElement.style.setProperty('--aptBackerHeight', `${32}%`)
    }

    // gives access to animation
    const [bouncyButton, setBouncyButton] = useState(false)

    const animation = e => {
      e.stopPropagation()
      setBouncyButton(true)
    }

  return (
    <div className='openAptOptionsMenuBtnWrapper'>
        <button 
          className={bouncyButton ? 'bouncyButton' : ''}
          id='openAptOptionsMenuBtn'
          onClick={e => handleAptOptionsMenuBtnClick(e)} 
          onMouseUp={e => animation(e)}
          onAnimationEnd={() => setBouncyButton(false)}
        >
           ^
        </button>
    </div>
  )
}

export default OpenAptOptionsMenu