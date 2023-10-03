import React from 'react'
import './login.css'
import { Button } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase.config';

const Login = () => {

  const googleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.

        const user = result.user;
        console.log('login success ' + user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error show ' + errorMessage);

      });
  }

  const facebookAuth = () => {

  }

  const loginForm = () => {

  }

  return (
    <div style={{ padding: '5%', width: '20%', position: 'relative', left: '35%', }} >

      <h3> Login to the form </h3>
      <form action="" onSubmit={loginForm} >
        <input className='input' type="email" placeholder='Your Name' aria-required />
        <br />   <br />
        <input className='input' type="password" placeholder='Password' />
        <br />
        <Button style={{ marginTop: '10px', marginBottom: '20px' }} variant='outlined' > Submit </Button>
      </form>

      <h3> Login With </h3>
      <div className="icon">
        <GoogleIcon onClick={googleAuth} className='pointer' />
        <FacebookIcon onClick={facebookAuth} className='pointer' />
      </div>
    </div>
  )
}

export default Login
