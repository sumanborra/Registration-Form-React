// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    errorMesgFirst: false,
    errorMesgLat: false,
    resultpage: false,
  }
  changeResponse = () => {
    this.setState({
      resultpage: false,
      firstName: '',
      lastName: '',
      errorMesgFirst: false,
      errorMesgLat: false,
    })
  }
  submitForm = event => {
    const {firstName, lastName} = this.state
    event.preventDefault()
    if (firstName === "" && lastName === ""){
        this.setState({
        resultpage: false,
        errorMesgFirst: true,
        errorMesgLat:true
        
      })
    }
    if (firstName === '') {
      this.setState({
        resultpage: false,
        errorMesgFirst: true,
        
      })
    }
    else if (lastName === ''){
      this.setState({
        resultpage: false,
        
        errorMesgLat: true,
      })
    }
     else {
      this.setState({
        resultpage: true,
        errorMesgFirst: false,
        errorMesgLat: false,
      })
    }
  }
  changeName = event => {
    console.log(event.target.value)
    if (event.target.value === '') {
      this.setState({errorMesgFirst: true})
    } else {
      this.setState({firstName: event.target.value, errorMesgFirst: false})
    }
  }

  changeNameLat = event => {
    if (event.target.value === '') {
      this.setState({errorMesgLat: true})
    } else {
      this.setState({lastName: event.target.value, errorMesgLat: false})
    }
  }

  render() {
    const {errorMesgFirst, errorMesgLat, resultpage} = this.state
    const className1 = errorMesgFirst ? 'input-error-mesg' : ''
    const className2 = errorMesgLat ? 'input-error-mesg' : ''
    // console.log(className1)
    const errorText1 = errorMesgFirst ? (
      <p className="error-msg-text">Required</p>
    ) : null
    const errorText2 = errorMesgLat ? (
      <p className="error-msg-text">Required</p>
    ) : null
    const result = resultpage ? (
      <div className="container-success">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
          className="image-submit"
        />
        <p className="para-text">Submitted Successfully</p>
        <button
          type="button"
          className="another-response-buttn"
          onClick={this.changeResponse}
        >
          Submit Another Response
        </button>
      </div>
    ) : (
      <div>
        <div className="feilds-container">
          <label className="first-name-label-text " htmlFor="firstName">
            FIRST NAME
          </label>

          <input
            type="text"
            id="firstName"
            className={`input-element ${className1}`}
            placeholder="First name"
            onBlur={this.changeName}
          />
          {errorText1}
        </div>

        <div className="feilds-container">
          <label className="first-name-label-text" htmlFor="lastName">
            LAST NAME
          </label>

          <input
            type="text"
            id="lastName"
            className={`input-element ${className2}`}
            placeholder="Last name"
            onBlur={this.changeNameLat}
          />
          {errorText2}
        </div>
        <div className="fotm-button">
          <button type="submit" className="buttn">
            Submit
          </button>
        </div>
      </div>
    )

    return (
      <div className="backgroubd-container">
        <h1 className="heading-registration">Registration</h1>
        <form className="form-container" onSubmit={this.submitForm}>
          {result}
        </form>
      </div>
    )
  }
}
export default RegistrationForm
