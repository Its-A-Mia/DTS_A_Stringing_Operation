import React from 'react'

const OpenAptOption = (props) => {

 const handleAptOptionsBtnClick = () => {
  for (let i = 0; i < props.displayNoneArr.length; i++) {
    document.documentElement.style.setProperty(props.displayNoneArr[i], 'none')
    document.documentElement.style.setProperty(props.unfocusArr[i], 'white')
  } 
  document.documentElement.style.setProperty('--aptOptionHeight', `${25}%`) 
  document.documentElement.style.setProperty('--aptBackerHeight', `${32}%`)
  document.documentElement.style.setProperty(props.display, 'flex')
  document.documentElement.style.setProperty(props.toFocus, 'black')
 } 

  return (
    <div style={{color: props.initialColor}}>
      <button className={props.btnClassName} onClick={e => handleAptOptionsBtnClick()} id={props.btnIdName}>
        {props.title}
      </button>
    </div>
  )
}

export default OpenAptOption