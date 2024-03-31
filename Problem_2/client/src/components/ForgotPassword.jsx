import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {

  const [email,setEmail] = useState()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:3000/auth/forgot-password`,{
      email,
    }).then(response => {
      if(response.data.status){
        alert("Check your Email for forgot password link")
        navigate('/login')
      }
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
        <label htmlFor="email">Email ID:</label>
        <input type="email" autoComplete="off" 
        onChange={(e) => setEmail(e.target.value)}/>

        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default ForgotPassword