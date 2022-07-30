import React from 'react'

const NextBtn = (props) => {

  const handleNextBtnClick = (e) => {
    e.stopPropagation()
    document.documentElement.style.setProperty(props.unfocus, 'white')
    document.documentElement.style.setProperty(props.currentOption, 'none')
    document.documentElement.style.setProperty(props.nextOption, 'flex')
    document.documentElement.style.setProperty(props.toFocus, 'black')
  }

  return (
    <button className='nextBtn' onClick={e => handleNextBtnClick(e)}>
      {'>'}
    </button>

  )
}

export default NextBtn