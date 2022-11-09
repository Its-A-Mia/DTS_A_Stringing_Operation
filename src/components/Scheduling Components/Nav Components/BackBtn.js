import React from 'react'

const BackBtn = (props) => {

  const handleBackBtnClick = (e) => {
    e.stopPropagation()
    document.documentElement.style.setProperty(props.unfocus, 'white')
    document.documentElement.style.setProperty(props.currentOption, 'none')
    document.documentElement.style.setProperty(props.previousOption, 'flex')
    document.documentElement.style.setProperty(props.toFocus, 'black')
  }

  return (
    <button className='backBtn' onClick={e => handleBackBtnClick(e)}>
      {'<'}
    </button>
  )
}

export default BackBtn