import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import "./style.css"

const MainPage = () => {

  const [backendData, setBackendData] = useState([])

  const handlerOnClick = () => {
    localStorage.removeItem("isLogin")
  }

  useEffect(() => {
    fetch("http://localhost:5000/main")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data);
      setBackendData(data)
    })
  }, [])
  
  return (
    <div>

        <header>
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <Link to="/" onClick={handlerOnClick} className="logout-btn">Log Out</Link>
          </ul>
        </header>

        <main>
          <h2>Here are your details:</h2>
            <div className='card'>
            <p><b>Full name:</b> {backendData.fullName}</p>
            <p><b>Job Title:</b> {backendData.jobTitle}</p>
            <p><b>Job Type:</b> {backendData.jobType}</p>
            <p><b>Gender:</b> {backendData.gender}</p>
            <img src={backendData.image} alt="Avatar"/>
            </div>
        </main>

        <footer>
          <ul>
            <li>Email</li>
            <li>Service info</li>
            <li>LinkedIn</li>
          </ul>
        </footer>
    </div>
  )
}

export default MainPage