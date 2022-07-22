import React from 'react'

const NextBtn = (props) => {

  const handleNextBtnClick = () => {
    document.documentElement.style.setProperty(props.unfocus, 'white')
    document.documentElement.style.setProperty(props.currentOption, 'none')
    document.documentElement.style.setProperty(props.nextOption, 'flex')
    document.documentElement.style.setProperty(props.toFocus, 'black')
  }

  return (
    <button className='backNextBtns' onClick={e => handleNextBtnClick()}>
      {'>'}
    </button>

  )
}

export default NextBtn