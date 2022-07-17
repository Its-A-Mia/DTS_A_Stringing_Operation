import React from 'react'

const OpenAptOption = (props) => {

    const handleAptOptionsBtnClick = () => {
        // make button take up less room, show section
        const aptOptionsBtnWrapper = document.getElementById('aptOptionsBtnWrapper')
        aptOptionsBtnWrapper.style.height = '10%'
        document.documentElement.style.setProperty(props.newWidthProperty, `${100}%`)
        document.documentElement.style.setProperty(props.newDisplayProperty, 'block')
    }

  return (
    <div style={{width: '100%', height: '100%', alignSelf: 'center'}} id='aptOptionsBtnWrapper'>
      <button className='aptOptionsBtn' onClick={e => handleAptOptionsBtnClick()}>
        <h3>{props.title}</h3>
      </button>
    </div>
  )
}

export default OpenAptOption