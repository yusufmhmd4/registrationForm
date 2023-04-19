import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameErrorMsg: false,
    lastNameErrorMsg: false,
    successLogin: false,
  }

  onSubmitAgain = () => {
    this.setState({
      firstName: '',
      lastName: '',
      firstNameErrorMsg: false,
      lastNameErrorMsg: false,
      successLogin: false,
    })
  }

  onSubmitButton = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '' && lastName === '') {
      this.setState({
        firstNameErrorMsg: true,
        lastNameErrorMsg: true,
        successLogin: false,
      })
    } else {
      this.setState({successLogin: true})
    }

    if (firstName === '' && lastName !== '') {
      this.setState({firstNameErrorMsg: true, successLogin: false})
    }
    if (firstName !== '' && lastName === '') {
      this.setState({lastNameErrorMsg: true, successLogin: false})
    }
  }

  updateFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  updateLastName = event => {
    this.setState({lastName: event.target.value})
  }

  leftFocusFirstName = event => {
    if (event.target.value === '') {
      this.setState({firstNameErrorMsg: true})
    } else {
      this.setState({firstNameErrorMsg: false})
    }
  }

  leftFocusLastName = event => {
    if (event.target.value === '') {
      this.setState({lastNameErrorMsg: true})
    } else {
      this.setState({lastNameErrorMsg: false})
    }
  }

  getSuccessPage = () => (
    <div className="success-page">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p className="success-message">Submitted Successfully</p>
      <button
        type="button"
        className="another-btn"
        onClick={this.onSubmitAgain}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {firstNameErrorMsg, lastNameErrorMsg, successLogin} = this.state
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="login-heading">Registration</h1>
          {!successLogin && (
            <form className="login-container" onSubmit={this.onSubmitButton}>
              <div className="name-container">
                <label htmlFor="firstName" className="label-element">
                  FIRST NAME
                </label>
                <input
                  type="text"
                  className="input-element"
                  id="firstName"
                  placeholder="First Name"
                  onBlur={this.leftFocusFirstName}
                  onChange={this.updateFirstName}
                />
                {firstNameErrorMsg && <p className="error">Required</p>}
              </div>
              <div className="name-container">
                <label htmlFor="lastName" className="label-element">
                  LAST NAME
                </label>
                <input
                  type="text"
                  className="input-element"
                  id="lastName"
                  placeholder="Last Name"
                  onBlur={this.leftFocusLastName}
                  onChange={this.updateLastName}
                />
                {lastNameErrorMsg && <p className="error">Required</p>}
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          )}
          {successLogin && this.getSuccessPage()}
        </div>
      </div>
    )
  }
}
export default RegistrationForm
