import React from 'react'

const ReviewAndSubmit = (props) => {

  // combines tension inputs to be submitted easily below
  let tensionMains = props.mainsTensionInput + ' ' + props.mainsUnit
  let tensionCrosses = props.crossesTensionInput + ' ' + props.crossesUnit

  // handles when user clicks on title to edit input

  const handleLegendClick = (e, optionToEdit) => {
    document.documentElement.style.setProperty('--reviewAndSubmitDisplay', 'none') 

    if (optionToEdit === 'string') {
      document.documentElement.style.setProperty('--stringTypeDisplay', 'flex')
    }
    if (optionToEdit === 'tension') {
      document.documentElement.style.setProperty('--tensionDisplay', 'flex')
    }
    if (optionToEdit === 'optionals') {
      document.documentElement.style.setProperty('--optionalsDisplay', 'flex')
    }
    if (optionToEdit === 'contact') {
      document.documentElement.style.setProperty('--nameAndContactDisplay', 'flex')
    }
    if (optionToEdit === 'scheduling') {
      document.documentElement.style.setProperty('--schedulingDisplay', 'flex')
    }
    if (optionToEdit === 'comments') {
      document.documentElement.style.setProperty('--commentsDisplay', 'flex')
    }
    setTimeout(() => {
      document.documentElement.style.setProperty('--aptBackerHeight', `${26}%`)
      document.documentElement.style.setProperty('--aptOptionHeight', `${25}%`)
    }, 1)
  }

  return (
    <div className='reviewAndSubmit' id='aptOptionsInner'>
        <div style={{display: 'flex', justifyContent:'center', alignItems: 'center', marginTop: '17px'}}>
            <h3 style={{flexGrow: '0.2'}}>Review & Submit</h3>
        </div>

    <span style={{color: 'gray'}}>Click on option title to edit | *required</span>

    <form name='finalForm'>
      <fieldset id='reviewAndSubmitRowContainer'>
        <fieldset id='reviewAndSubmitContentContainer'>
          <legend onClick={e => handleLegendClick(e, 'string')}>String</legend>
        
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <label>Mains:</label>
              &nbsp;
            <span className='inputSizingWrapper'>
              {props.mainsStringType}
            <input
              name='mainsStringType'
              type='text'
              value={props.mainsStringType}
              readOnly 
              required>
            </input>
            </span>
          </div>

          <div>
            <label>Crosses:</label>
              &nbsp;
            <span className='inputSizingWrapper'>
              {props.crossesStringType}
            <input
              name='crossesStringType' 
              type='text' 
              value={props.crossesStringType} 
              readOnly 
              required>   
            </input>
            </span>
          </div>
        </fieldset>

        <fieldset id='reviewAndSubmitContentContainer'>
          <legend onClick={e => handleLegendClick(e, 'tension')}>Tension</legend>
          
          <div>          
            <label id='tensionMainsReviewAndSubmit'>*Mains:</label>
              &nbsp;
            <span className='inputSizingWrapper'>
              {tensionMains}
            <input 
              name='tensionMains'
              type='text' 
              value={tensionMains} 
              readOnly 
              required>
            </input>
            </span>
          </div>
              
          
          <div>
            <label id='tensionCrossesReviewAndSubmit'>*Crosses:</label>
              &nbsp;
            <span className='inputSizingWrapper'>
              {tensionCrosses}
            <input 
              name='tensionCrosses'
              type='text' 
              value={tensionCrosses} 
              readOnly 
              required>
            </input>
            </span>
          </div>

        </fieldset>
      </fieldset>

      <fieldset id='reviewAndSubmitRowContainer'>
        <fieldset id='reviewAndSubmitContentContainer'>
          <legend onClick={e => handleLegendClick(e, 'optionals')}>Optionals</legend>
          
          <div>
            <label>Stencils:</label>
              &nbsp;
            <span className='inputSizingWrapper'>
              {props.stencilInput}
            <input 
              name='stencilInput'
              type='text' 
              value={props.stencilInput} 
              readOnly 
              required>
            </input>
            </span>
          </div>
              
          
          <div>
            <label>Regrip:</label>
              &nbsp;
            <span className='inputSizingWrapper'>
              {props.regripInput}
            <input 
              name='regripInput'
              type='text' 
              value={props.regripInput} 
              readOnly 
              required>
            </input>
            </span>
          </div>
        </fieldset>

        <fieldset id='reviewAndSubmitContentContainer'>
          <legend onClick={e => handleLegendClick(e, 'contact')}>Contact Information</legend>
          
          <div>
            <label id='contactNameReviewAndSubmit'>*Name:</label>
              &nbsp;
            <span className='inputSizingWrapper'>
              {props.nameInput}
            <input 
              name='nameInput'
              type='text' 
              value={props.nameInput} 
              readOnly 
              required>  
            </input>
            </span>
          </div>
              
          
          <div>
            <label id='contactPhoneReviewAndSubmit'>*Phone Number:</label>
              &nbsp;
            <span className='inputSizingWrapper'>
              {props.phoneNumberInput}
            <input 
              name='phoneNumberInput'
              type='text' 
              value={props.phoneNumberInput} 
              pattern='^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$'
              readOnly 
              required>
            </input>
            </span>
          </div>
              
          
          <div>
            <label id='contactEmailReviewAndSubmit'>*Email:</label>
              &nbsp;
            <span className='inputSizingWrapper'>
              {props.emailInput}
            <input 
              name='emailInput'
              type='email' 
              value={props.emailInput} 
              readOnly 
              required>
            </input>
            </span>
          </div>

        </fieldset>
      </fieldset>

      <fieldset id='reviewAndSubmitRowContainer'>
        <fieldset id='reviewAndSubmitContentContainer' style={{minWidth: '300px'}}>
          <legend onClick={e => handleLegendClick(e, 'scheduling')}>Scheduling</legend>
          
          <div>
            <label id='schedulingDropOffReviewAndSubmit'>*Drop Off Date:</label>
              &nbsp;
              <span className='inputSizingWrapper'>
                {props.dropOffInput}
              <input 
                name='dropOffInput'
                type='text' 
                value={props.dropOffInput} 
                readOnly 
                required>       
                </input>
              </span>
          </div>
              
          <div>
            <label id='schedulingPickUpReviewAndSubmit'>*Pick Up Date:</label>
              &nbsp;
              <span className='inputSizingWrapper'>
                {props.pickUpInput}
              <input 
                name='pickUpInput'
                type='text' 
                value={props.pickUpInput} 
                readOnly 
                required>                
                </input>
              </span>
          </div>
        </fieldset>

        <fieldset id='reviewAndSubmitContentContainer'>
          <legend onClick={e => handleLegendClick(e, 'comments')}>Special Requests</legend>
          <textarea 
            name='commentInput'
            type='text' 
            value={props.commentsInput} 
            rows='4'
            readOnly 
            required>
          </textarea>
        </fieldset>
      </fieldset>
    {/* submit button */}
      <input 
        className='submit'
        id='submit'
        type='submit' 
        value='Submit'
        >
      </input>

    </form>

    </div>
  )
}

export default ReviewAndSubmit