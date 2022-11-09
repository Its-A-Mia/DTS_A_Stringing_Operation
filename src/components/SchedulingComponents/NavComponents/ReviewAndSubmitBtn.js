import React, { useEffect, useState } from 'react'

const ReviewAndSubmitBtn = (props) => {

  // state to grab validity of of inputs into an array
    const [inputValidityForSubmitArray, setInputValidityForSubmitArray] = useState([])
  // color states to change labels 
  // tension
    const [tensionMainsValidity, setTensionMainsValidity] = useState(null)
    const [tensionCrossesValidity, setTensionCrossesValidity] = useState(null)
  // contact info
    const [contactNameValidity, setContactNameValidity] = useState(null)
    const [contactPhoneValidity, setContactPhoneValidity] = useState(null)
    const [contactEmailValidity, setContactEmailValidity] = useState(null)
  // scheduling
    const [schedulingDropOffValidity, setSchedulingDropOffValidity] = useState(null)
    const [schedulingPickUpValidity, setSchedulingPickUpValidity] = useState(null)

  // grabbing the labels that will change colors
  // tension
  // contact
  // scheduling


    useEffect(() => {
    // grabs submit button object
      const submit = document.getElementById('submit')
    // changes to be made when input is not valid
      const notValidated = () => {
        submit.disabled = true
        document.documentElement.style.setProperty('--submitBGBorderColor', 'darkgray')
        document.documentElement.style.setProperty('--submitHoverBGColor', 'darkgray')
        document.documentElement.style.setProperty('--submitTextColor', 'white')
      }
    // changes to be made when input is valid
      const validated  = () => {
        submit.disabled = false
        document.documentElement.style.setProperty('--submitBGBorderColor', 'black')
        document.documentElement.style.setProperty('--submitHoverBGColor', 'white')
        document.documentElement.style.setProperty('--submitTextColor', 'black')
      }
    // checks if the validity state is false
      for (let i = 0; i < 6; i++) {
        console.log(inputValidityForSubmitArray[i])
        if (inputValidityForSubmitArray[i] === false) {
          notValidated()
          setInputValidityForSubmitArray([])
          break
        }
        if (inputValidityForSubmitArray[i] === true) {
          validated()
        }
      }
    // changes color UI on review and submit page depending on if an option has invalid input
    // tension
      if (tensionMainsValidity === false) {
        const tensionMainsLabel = document.getElementById('tensionMainsReviewAndSubmit')
        setTensionMainsValidity(null)
        tensionMainsLabel.style.color = ('red')
      } else if (tensionMainsValidity === true) {
        const tensionMainsLabel = document.getElementById('tensionMainsReviewAndSubmit')
        tensionMainsLabel.style.color = ('black')
      }

      if (tensionCrossesValidity === false) {
        const tensionCrossesLabel = document.getElementById('tensionCrossesReviewAndSubmit')
        setTensionCrossesValidity(null)
        tensionCrossesLabel.style.color = ('red')
      } else if (tensionCrossesValidity === true) {
        const tensionCrossesLabel = document.getElementById('tensionCrossesReviewAndSubmit')
        tensionCrossesLabel.style.color = ('black')
      }

    // contact
      if (contactNameValidity === false) {
        const contactNameLabel = document.getElementById('contactNameReviewAndSubmit')
        setContactNameValidity(null)
        contactNameLabel.style.color = ('red')
      } else if (contactNameValidity === true) {
        const contactNameLabel = document.getElementById('contactNameReviewAndSubmit')
        contactNameLabel.style.color = ('black')
      }

      if (contactPhoneValidity === false) {
        const contactPhoneLabel = document.getElementById('contactPhoneReviewAndSubmit')
        setContactPhoneValidity(null)
        contactPhoneLabel.style.color = ('red')
      } else if (contactPhoneValidity === true) {
        const contactPhoneLabel = document.getElementById('contactPhoneReviewAndSubmit')
        contactPhoneLabel.style.color = ('black')
      }

      if (contactEmailValidity === false) {
        const contactEmailLabel = document.getElementById('contactEmailReviewAndSubmit')
        setContactEmailValidity(null)
        contactEmailLabel.style.color = ('red')
      } else if (contactEmailValidity === true) {
        const contactEmailLabel = document.getElementById('contactEmailReviewAndSubmit')
        contactEmailLabel.style.color = ('black')
      }

    // scheduling
      if (schedulingDropOffValidity === false) {
        const schedulingDropOffLabel = document.getElementById('schedulingDropOffReviewAndSubmit')
        setSchedulingDropOffValidity(null)
        schedulingDropOffLabel.style.color = ('red')
      } else if (schedulingDropOffValidity === true) {
        const schedulingDropOffLabel = document.getElementById('schedulingDropOffReviewAndSubmit')
        schedulingDropOffLabel.style.color = ('black')
      }

      if (schedulingPickUpValidity === false) {
        const schedulingPickUpLabel = document.getElementById('schedulingPickUpReviewAndSubmit')
        setSchedulingPickUpValidity(null)
        schedulingPickUpLabel.style.color = ('red')
      } else if (schedulingPickUpValidity === true) {
        const schedulingPickUpLabel = document.getElementById('schedulingPickUpReviewAndSubmit')
        schedulingPickUpLabel.style.color = ('black')
      }

    
  })

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

      // validation
      

      // checks tension value
      if (isNaN(props.mainsTensionInput)  || props.mainsTensionInput < 10 || props.mainsTensionInput > 70) {
        setInputValidityForSubmitArray(current => [false, ...current])
        setTensionMainsValidity(false)
      } else {
        setTensionMainsValidity(true)
        setInputValidityForSubmitArray(current => [true, ...current])
      }
      
      if (isNaN(props.crossesTensionInput) || props.crossesTensionInput < 9 || props.crossesTensionInput > 70) {
        setInputValidityForSubmitArray(current => [false, ...current])
        setTensionCrossesValidity(false)
      } else {
        setTensionCrossesValidity(true)
        setInputValidityForSubmitArray(current => [true, ...current])
      }

      // checks contact info values
      if (props.nameInput === ''){ 
        setInputValidityForSubmitArray(current => [false, ...current])
        setContactNameValidity(false)
      } else {
        setContactNameValidity(true)
        setInputValidityForSubmitArray(current => [true, ...current])
      }
      
      if (!props.phoneNumberInput.match('^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$')){
        setInputValidityForSubmitArray(current => [false, ...current])
        setContactPhoneValidity(false)
      } else {
        setContactPhoneValidity(true)
        setInputValidityForSubmitArray(current => [true, ...current])
      }
      
      if (!props.emailInput.match('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+).([a-zA-Z]{2,5})$')){
        setInputValidityForSubmitArray(current => [false, ...current])
        setContactEmailValidity(false)
      } else {
        setContactEmailValidity(true)
        setInputValidityForSubmitArray(current => [true, ...current])
      }

      // checks scheduling
      if (props.dropOffInput === '' || props.dropOffInput >= props.pickUpInput){
        setInputValidityForSubmitArray(current => [false, ...current])
        setSchedulingDropOffValidity(false)
      } else {
        setSchedulingDropOffValidity(true)
        setInputValidityForSubmitArray(current => [true, ...current])
      }
      
      if (props.pickUpInput === ''){
        setInputValidityForSubmitArray(current => [false, ...current])
        setSchedulingPickUpValidity(false)
      } else {
        setSchedulingPickUpValidity(true)
        setInputValidityForSubmitArray(current => [true, ...current])
      }
        
        
    } 

  return (
    <button className='reviewAndSubmitBtn' id='aptOptnBtn' onClick={e => handleReviewAndSubmitBtnClick(e)}>
        Review & Submit
    </button>
  )
}

export default ReviewAndSubmitBtn