import React from 'react'
import './login.css'
import { Button } from '@mui/material'

const Login = () => {
  return (
    <div style={{ display: 'grid', padding: '5%', width: '20%', position: 'relative', left: '35%', }} >

      <h3> Login to the form </h3>

      <label htmlFor=""  > Email </label>
      <input className='input' type="email" placeholder='Your Name' aria-required />

      <label htmlFor=""  > Password </label>
      <input className='input' type="password" placeholder='Password' />

      <Button style={{ marginTop: '10px' }} variant='outlined' > Submit </Button>

    </div>
  )
}

export default Login
