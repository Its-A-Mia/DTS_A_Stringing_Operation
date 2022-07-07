import React, { useEffect, useState } from 'react'
import tennisRacketDTSStencil from '../images/tennisracketdtsstencil.png'
import tennisRacketNoDTSStencil from '../images/tennisracketnodtsstencil.png'
import tennisRacketNoStenCrossesHL from '../images/tennisracketnostencrosseshl.png'
import tennisRacketNoStenMainsHL from '../images/tennisracketnostenmainshl.png'
import tennisRacketStenCrossesHL from '../images/tennisracketstencrosseshl.png'
import tennisRacketStenMainsHL from '../images/tennisracketstenmainshl.png'
import AppointmentPageBG from '../images/appointmentpagebg.png'

const MakeAppointment = (props) => {
  //Creates a state for Mains in order to update page when clicked
  const [mainsDisplayBoolean, setMainsDisplayBoolean] = useState(false)

  function handleMainsInputClick(event) {
    event.stopPropagation()
    const mainsTension = document.getElementById('mainsTension')
    const mainsStringType = document.getElementById('mainsStringType')
    mainsTension || mainsStringType === document.activeElement ? setMainsDisplayBoolean(true) : setMainsDisplayBoolean(false)
    setCrossesDisplayBoolean(false)
  }

  //Creates a state for Mains in order to update page when clicked
  const [crossesDisplayBoolean, setCrossesDisplayBoolean] = useState(false)

  function handleCrossesInputClick(event) {
    event.stopPropagation()
    const crossesTension = document.getElementById('crossesTension')
    const crossesStringType = document.getElementById('crossesStringType')
    crossesTension || crossesStringType === document.activeElement ? setCrossesDisplayBoolean(true) : setCrossesDisplayBoolean(false)
    setMainsDisplayBoolean(false)
  }

  //Creates a state for DTS Stencil in order to update page when clicked
  const [stencilDisplayBoolean, setStencilDisplayBoolean] = useState(false)

  function handleStencilChkBxClick() {  
    const stencilCheckbox = document.getElementById('stencilCheckbox')
    stencilCheckbox.checked === false ? setStencilDisplayBoolean(false) : setStencilDisplayBoolean(true)
  }

  // Clears all highlights on racket
  function handleHighlightClear() {
    setMainsDisplayBoolean(false)
    setCrossesDisplayBoolean(false)
  }

  //Posts to Twilio through their REST API
  function handleOrderFormSubmit() {
    
  }

  useEffect (() => {
    //logic to replace pictures showing highlighted strings
    const appointmentRacketBase = document.getElementById('appointmentRacketBase')
    const appointmentRacketStencil = document.getElementById('appointmentRacketStencil')
    const appointmentRacketStencilMainsHL = document.getElementById('appointmentRacketStencilMainsHL')
    const appointmentRacketBaseMainsHL = document.getElementById('appointmentRacketBaseMainsHL')
    const appointmentRacketStencilCrossesHL = document.getElementById('appointmentRacketStencilCrossesHL')
    const appointmentRacketBaseCrossesHL = document.getElementById('appointmentRacketBaseCrossesHL')

    if (stencilDisplayBoolean === true) {
      appointmentRacketStencil.style.display = 'flex'
      appointmentRacketBase.style.display = 'none'
      appointmentRacketStencilMainsHL.style.display = 'none'
      appointmentRacketStencilCrossesHL.style.display = 'none'
      appointmentRacketBaseCrossesHL.style.display = 'none'
      appointmentRacketBaseMainsHL.style.display = 'none'
        if (mainsDisplayBoolean === true) {
          appointmentRacketStencilMainsHL.style.display = 'flex'
          appointmentRacketBaseMainsHL.style.display = 'none'
          appointmentRacketStencil.style.display = 'none'
        } else if (crossesDisplayBoolean === true) {
          appointmentRacketStencilCrossesHL.style.display = 'flex'
          appointmentRacketStencil.style.display = 'none'
        }
    } else {
      appointmentRacketBase.style.display = 'flex'
      appointmentRacketStencil.style.display = 'none'
      appointmentRacketStencilMainsHL.style.display = 'none'
      appointmentRacketBaseMainsHL.style.display = 'none'
      appointmentRacketStencilCrossesHL.style.display = 'none'
      appointmentRacketBaseCrossesHL.style.display = 'none'
        if (mainsDisplayBoolean === true) {
          appointmentRacketBaseMainsHL.style.display = 'flex'
          appointmentRacketBase.style.display = 'none'
        } else if (crossesDisplayBoolean === true) {    
          appointmentRacketBaseCrossesHL.style.display = 'flex' 
          appointmentRacketBase.style.display = 'none'
          appointmentRacketBaseMainsHL.style.display = 'none'  
        }
      }   
  })

  //Creates minDate for Drop-off
  let minDate = new Date()
  let day = minDate.getDate()
  let minMonth = minDate.getMonth() + 1
  let maxMonth = minDate.getMonth() + 2
  let year = minDate.getFullYear()
  if (day < 10) {
    day = '0' + day
  } 
  if (minMonth || maxMonth < 10) {
    minMonth = '0' + minMonth
    maxMonth = '0' + maxMonth
  }
  minDate = year + '-' + minMonth + '-' + day
  let maxDate = year + '-' + maxMonth + '-' + '28'
  
  return (
    <div 
      className='makeAppointmentWrapper' 
      id='makeAppointment' 
      onClick={() => handleHighlightClear()}
      style={{backgroundImage: `url(${AppointmentPageBG})`}}
      >
        <form className='orderFormWrapper' onSubmit={handleOrderFormSubmit()}>
          <h2 className='underline'>Order Form</h2>
            <br></br>
          
          <fieldset>
            <legend>Tension</legend>
              <label>Mains: </label>
              <input 
                type='number' 
                id='mainsTension' 
                name='mainsTension' 
                size='3'
                placeholder='55' 
                min='10' max='70' 
                onClick={(e) => handleMainsInputClick(e)} 
                required>
              </input>
              <select name='lbsOrKilos' id='lbsOrKilos'>
                <option value='lbs'>lbs</option>
                <option value='kgs'>kgs</option>
              </select>          
                <br></br>
              <label>Crosses: </label>
              <input 
                type='number' 
                id='crossesTension' 
                name='crossesTension' 
                size='3' 
                maxLength='2' 
                placeholder='55' 
                min='10' 
                max='70'
                onClick={(e) => handleCrossesInputClick(e)} 
                required></input>
              <select name='lbsOrKilos' id='lbsOrKilos'>
                <option value='lbs'>lbs</option>
                <option value='kgs'>kgs</option>
              </select> 
                <br></br>
          </fieldset>
         
          <fieldset>
            <legend>String Type</legend>
              <label>Mains: </label>
              <select name='mainsStringType' id='mainsStringType' onClick={(e) => handleMainsInputClick(e)}>
                <option value='RPMBlast'>RPM Blast, 17 ga.</option>
                <option value='HyperG'>Hyper G, 16 ga.</option>
                <option value='Provide String'>Provide Your Own</option>
              </select>
                <br></br>
              <label>Crosses: </label>
              <select name='crossesStringType' id='crossesStringType' onClick={(e) => handleCrossesInputClick(e)}>
                <option value='RPMBlast'>RPM Blast, 17 ga.</option>
                <option value='HyperG'>Hyper G, 16 ga.</option>
                <option value='Provide String'>Provide Your Own</option>
              </select>
          </fieldset>

          <fieldset>
            <legend>Optionals</legend>
              <label>DTS Stencil: </label>
              <input 
                type='checkbox' 
                id='stencilCheckbox'
                onClick={() => handleStencilChkBxClick()}></input> 
                <br></br>
              <label>Regrip: </label>
              <input type='checkbox'></input>
          </fieldset>

          <fieldset>
            <legend>Name & Contact Information</legend>
              <label>Name: </label>
              <input 
                type='text'
                size='31'
                required>  
              </input>
                <br></br>
              <label>Phone Number: </label>
              <input 
                type='text'
                pattern='^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$'
                placeholder='xxx-xxx-xxxx'
                required>
              </input>
                <br></br>
              <label>Email: </label>
              <input 
                type='text'
                pattern='^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$'
                placeholder='janedoe@domain.com'
                required>
              </input>
          </fieldset>

          <fieldset>
            <legend>Scheduling</legend>
              <label>Date of Drop-off: </label>
              <input type='date' min={`${minDate}`} max={`${maxDate}`} required></input>
                <br></br>
              <label>Date of Pick-up: </label>
              <input type='date' min={`${minDate}`} required></input>
                <br></br>
          </fieldset>

          <input type='submit' value='Submit' className='submitAppointmentBtn'></input>
        </form>

        <div className='appointmentRacketWrapper'>
          <img 
            className='appointmentRacketbase' 
            src={tennisRacketNoDTSStencil} 
            id='appointmentRacketBase' 
            alt='DTS Base Racket Head'>         
          </img>
          <img 
            className='appointmentRacketStencil' 
            src={tennisRacketDTSStencil} 
            id='appointmentRacketStencil' 
            alt='DTS Stenciled Racket Head'>
          </img>
          <img 
            className='appointmentRacketStencilCrossesHL' 
            src={tennisRacketStenCrossesHL} id='appointmentRacketStencilCrossesHL' 
            alt='DTS Stenciled Racket Head with crosses highlighted'>     
          </img>
          <img 
            className='appointmentRacketStencilMainsHL' 
            src={tennisRacketStenMainsHL} 
            id='appointmentRacketStencilMainsHL' 
            alt='DTS Stenciled Racket Head with mains highlighted'>  
          </img>
          <img 
            className='appointmentRacketBaseCrossesHL' 
            src={tennisRacketNoStenCrossesHL} 
            id='appointmentRacketBaseCrossesHL' 
            alt='DTS Base Racket Head with crosses highlighted'>  
          </img>
          <img 
            className='appointmentRacketBaseMainsHL' 
            src={tennisRacketNoStenMainsHL} 
            id='appointmentRacketBaseMainsHL' 
            alt='DTS Base Racket Head with mains highlighted'>
          </img>
        </div>
    </div>
        
  )
}

export default MakeAppointment