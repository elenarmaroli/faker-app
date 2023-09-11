import React from 'react'
import { useRef } from 'react'
import {useNavigate} from "react-router-dom"
import "../Registration/style.css"

const Registration = () => {

  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()

  const navigate = useNavigate()

  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(e);

    const data = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    }

    //console.log("Current values are", data);
    fetch("http://localhost:5000/registration", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        navigate("/")
      }
    })
  }

  return (
    <div className='registration-wrapper'>
      <h1>Registration</h1>
        <form onSubmit={handleOnSubmit} className='registration-form'>
            <label>First name:</label><input type="text" ref={firstNameRef} placeholder="Enter your first name"/>
            <label>Last name:</label><input type="text" ref={lastNameRef} placeholder="Enter your last name"/>
            <label>Email:</label><input type="email" ref={emailRef} placeholder="Enter your email"/>
            <label>Password:</label><input type="password" ref={passwordRef} placeholder="Choose a password"/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Registration

