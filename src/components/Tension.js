import React from 'react'

const Tension = (props) => {

  const handleMainsTensionInput = e => {
    props.setMainsTensionInput(e.target.value)
  }

  const handleCrossesTensionInput = e => {
    props.setCrossesTensionInput(e.target.value)
  }

  const handleMainsUnitClick = () => {
    if (props.mainsUnit === 'lbs'){
      props.setMainsUnit('kgs')
      document.documentElement.style.setProperty('--lbsKgsMainsLeft', `${50}%`)
    } else {
      props.setMainsUnit('lbs')
      document.documentElement.style.setProperty('--lbsKgsMainsLeft', 0)
    }
  }

  const handleCrossesUnitClick = () => {
    if (props.crossesUnit === 'lbs'){
      props.setCrossesUnit('kgs')
      document.documentElement.style.setProperty('--lbsKgsCrossesLeft', `${50}%`)
    } else {
      props.setCrossesUnit('lbs')
      document.documentElement.style.setProperty('--lbsKgsCrossesLeft', 0)
    }
  }

  return (
    <div className='tension' id='aptOptionsInner'>
      <div id='optionHeader'>
        <h3>Tension</h3>
        <span style={{color: 'darkgray'}}>2/6</span>
      </div>

      <div style={{display: 'flex', justifyContent: 'space-around', flexGrow:'1', alignItems: 'center'}}>
        <div style={{width: '50%', alignItems: 'center', justifyContent: 'center'}}>
          <label>Mains</label>
          <br></br>
          <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
            <input 
              type='number' 
              id='mainsTension' 
              name='mainsTension' 
              size='3'
              placeholder='10-70' 
              onChange={handleMainsTensionInput} 
              required>
            </input>
            <button 
              className='lbsOrKilosBtn'
              onClick={e => handleMainsUnitClick(e)}
            >
              <div className='lbs'>
                lbs
              </div>
              <div className='kgs'>
                kgs
              </div>
              <span className='slider' id='sliderMains'></span>
            </button>
          </div>
        </div>

        <div style={{width: '50%'}}>
          <label>Crosses</label>
          <br></br>
          <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
            <input 
              type='number' 
              id='crossesTension' 
              name='crossesTension' 
              size='3' 
              maxLength='2' 
              placeholder='10-70' 
              onChange={handleCrossesTensionInput} 
              required>
            </input>
            <button 
                className='lbsOrKilosBtn'
                onClick={e => handleCrossesUnitClick(e)}
              >
                <div className='lbs'>
                  lbs
                </div>
                <div className='kgs'>
                  kgs
                </div>
                <span className='slider' id='sliderCrosses'></span>
              </button>
          </div>
        </div>
      </div>
      <div style={{alignSelf: 'center', opacity: '65%', fontSize: '0.7vw', flexGrow:'1'}}>Our machines operate between 10 and 70 lbs/kgs</div>
    </div>
  )
}

export default Tension