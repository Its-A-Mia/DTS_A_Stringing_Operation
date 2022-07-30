import React from 'react'
import OpenAptOption from './OpenAptOption'

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

    <span style={{color: 'gray'}}>Click on option title to edit</span>

    <form name='finalForm'>
      <fieldset id='reviewAndSubmitRowContainer'>
        <fieldset id='reviewAndSubmitContentContainer'>
          <legend onClick={e => handleLegendClick(e, 'string')}>String</legend>
        
            <label>Mains:</label>
              &nbsp;
            <input 
              type='text' 
              value={props.mainsStringType}
              readOnly 
              required>
            </input>

              <br></br>

            <label>Crosses:</label>
              &nbsp;
            <input 
              type='text' 
              value={props.crossesStringType} 
              readOnly 
              required>   
            </input>
        </fieldset>

        <fieldset id='reviewAndSubmitContentContainer'>
          <legend onClick={e => handleLegendClick(e, 'tension')}>Tension</legend>

            <label className='tensionMainsReviewAndSubmit'>Mains:</label>
              &nbsp;
            <input 
              type='text' 
              value={tensionMains} 
              readOnly 
              required>
            </input>

              <br></br>

            <label>Crosses:</label>
              &nbsp;
            <input 
              type='text' 
              value={tensionCrosses} 
              readOnly 
              required>
            </input>
        </fieldset>
      </fieldset>

      <fieldset id='reviewAndSubmitRowContainer'>
        <fieldset id='reviewAndSubmitContentContainer'>
          <legend onClick={e => handleLegendClick(e, 'optionals')}>Optionals</legend>

            <label>Stencils:</label>
              &nbsp;
            <input 
              type='text' 
              value={props.stencilInput} 
              readOnly 
              size='1' 
              required>
            </input>

              <br></br>

            <label>Regrip:</label>
              &nbsp;
            <input 
              type='text' 
              value={props.regripInput} 
              readOnly 
              size='1' 
              required>
            </input>
        </fieldset>

        <fieldset id='reviewAndSubmitContentContainer'>
          <legend onClick={e => handleLegendClick(e, 'contact')}>Contact Information</legend>

            <label>Name:</label>
              &nbsp;
            <input 
              type='text' 
              value={props.nameInput} 
              readOnly 
              required>  
            </input>

              <br></br>

            <label>Phone Number:</label>
              &nbsp;
            <input 
              type='text' 
              value={props.phoneNumberInput} 
              pattern='^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$'
              readOnly 
              required>
            </input>

              <br></br>

            <label>Email:</label>
              &nbsp;
            <input 
              type='email' 
              value={props.emailInput} 
              readOnly 
              required>
            </input>
        </fieldset>
      </fieldset>

      <fieldset id='reviewAndSubmitRowContainer'>
        <fieldset id='reviewAndSubmitContentContainer' style={{minWidth: '300px'}}>
          <legend onClick={e => handleLegendClick(e, 'scheduling')}>Scheduling</legend>

            <label>Drop Off Date:</label>
              &nbsp;
            <span>
            {props.dropOffInput}
              <input type='text' value={props.dropOffInput} readOnly size='10' required></input>
            </span>
              <br></br>
            <label>Pick Up Date:</label>
              &nbsp;
            <span>
            {props.pickUpInput}
              <input type='text' value={props.pickUpInput} readOnly size='10' required></input>
            </span>

        </fieldset>

        <fieldset id='reviewAndSubmitContentContainer'>
          <legend onClick={e => handleLegendClick(e, 'comments')}>Special Requests</legend>
          <textarea 
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
        type='submit' 
        value='Submit'>
      </input>

    </form>

    </div>
  )
}

export default ReviewAndSubmit