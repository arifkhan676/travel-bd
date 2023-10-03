import React, { useState } from 'react'
import './login.css'
import { Button } from '@mui/joy'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase.config';
import { contextAPI2 } from '../../App';

const SignUp = () => {


  const [user, setUser] = React.useContext(contextAPI2);



  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUser((preValue) => {
      return {
        ...preValue,
        [name]: value
      }
    })
  }

  const SignUpSubmit = (e) => {

    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        setUser(user)
        console.log('success');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error is: ' + errorMessage);
        // ..
      });


    e.preventDefault();
  }

  return (
    <div style={{ padding: '5%', width: '20%', position: 'relative', left: '35%', }} >
      <h3> Sign Up Please </h3>
      <form action="" onSubmit={SignUpSubmit} >
        <input onChange={handleUserChange} name='name' value={user.name} className='input' type="text" placeholder='Your Name' aria-required />
        <br />  <br />
        <input onChange={handleUserChange} name='email' value={user.email} className='input' type="email" placeholder='Your Email' aria-required />
        <br />  <br />
        <input onChange={handleUserChange} name='password' value={user.password} className='input' type="password" placeholder='Password' />
        <br />  <br />
        <input className='submit' type="submit" value="submit" />
      </form>
    </div>
  )
}

export default SignUp
