import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import "./style.css"

const Login = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const navigate = useNavigate()

  const handleOnChangeEmail = (e) => {
      setEmail(e.target.value)
      //console.log(email);
  }

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value)
    //console.log(password);
}

  const handleOnSumbit = (e) => {
    e.preventDefault()

      const user = {email, password}
      //console.log(user);

      fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("isLogin", true)
        if (data.success) {
          navigate("/main");
        } else {
          localStorage.removeItem("isLogin")
          navigate("/")
        }
      });

  }

  return (
    <div className='login-wrapper'>
        <h1>Welcome to our website</h1>
        <form>
          <div className='sign-in'>
            <p>Enter your credentials here:</p>
            <input type="email" placeholder="Enter valid email" onChange={handleOnChangeEmail}></input>
            <input type="password" placeholder='Enter valid password' onChange={handleOnChangePassword}></input>
            <button onClick={handleOnSumbit}>Sign in</button>
          </div>
          <div className='register-here'>
          <p>Don't have an account?</p>
            <button>
            <Link to="/registration" style={{textDecoration: "none"}}>
            Sign up here
            </Link>
            </button>
          </div>


        </form>
    </div>
  )
}

export default Login