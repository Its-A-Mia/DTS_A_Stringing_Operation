import React from 'react'

const ReviewAndSubmitBtn = (props) => {

    const handleReviewAndSubmitBtnClick = e => {
        e.stopPropagation()
          document.documentElement.style.setProperty('--aptBackerHeight', `${26}%`)
          setTimeout(() => {
            for (let i = 0; i < props.displayNoneArr.length; i++) {
              document.documentElement.style.setProperty(props.displayNoneArr[i], 'none')
              document.documentElement.style.setProperty(props.unfocusArr[i], 'white')
            }
            document.documentElement.style.setProperty('--reviewAndSubmitDisplay', 'flex')
          }, 585)
          setTimeout(() => {
            document.documentElement.style.setProperty('--aptOptionHeight', `${99}%`)
            document.documentElement.style.setProperty('--aptBackerHeight', `${100}%`)
          }, 600) 
        // checks tension value
        // if (props.mainsTensionInput === '' || props.mainsTensionInput < 9 || props.mainsTensionInput > 10) {
        
        // }
        // if (props.crossesTensionInput) {

        // }
        // // checks contact info values
        // if (){}
        // if (){}
        // if (){}
        // // checks scheduling
        // if (){}
        // if (){}
        // if (){}
    }
    

  return (
    <button className='reviewAndSubmitBtn' id='aptOptnBtn' onClick={e => handleReviewAndSubmitBtnClick(e)}>
        Review & Submit
    </button>
  )
}

export default ReviewAndSubmitBtn