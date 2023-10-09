import React, { useContext, useState } from 'react'
import './login.css'
import { Button } from '@mui/joy'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase.config';
import { contextAPI2 } from '../../App';

const SignUp = () => {

  const [user, setUser] = useContext(contextAPI2);



  const handleUserChange = (e) => {
    const { name, value } = e.target;
    let isValidFrom = true;

    if (name === 'email') {
      const re = /\S+@\S+\.\S+/;
      isValidFrom = re.test(e.target.value)
    }
    if (name === 'password') {
      const isValidPass = e.target.value.length > 6;
      const isValidPassNum = /\d{1}/.test(e.target.value);
      isValidFrom = isValidPass && isValidPassNum
    }
    if (isValidFrom) {
      const formUser = { ...user }
      formUser[e.target.name] = e.target.value
      setUser(formUser)
    }
  }

  const SignUpSubmit = (e) => {
    const userInfo = { ...user }
    if (user.email && user.password) {
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          userInfo.succes = 'Account created'
          userInfo.isLogged = false
          setUser(userInfo);
          userInfo.error = ''

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          userInfo.error = 'Email already taken'
          userInfo.isLogged = true
          setUser(userInfo)
        });
    }
    e.preventDefault();
  }


  return (
    <div style={{ padding: '5%', width: '20%', position: 'relative', left: '35%', }} >
      <h3> Sign Up Please </h3>
      {user.isLogged === false ? <p style={{ color: 'green' }} > {user.succes}   </p>
        : <p style={{ color: 'red' }} > {user.error}   </p>}
      <form action="" onSubmit={SignUpSubmit} >
        <input onChange={handleUserChange} name='name' className='input' type="text" placeholder='Your Name' aria-required />
        <br />  <br />
        <input onChange={handleUserChange} name='email' className='input' type="email" placeholder='Your Email' aria-required />
        <br />  <br />
        <input onChange={handleUserChange} name='password' className='input' type="password" placeholder='Password' />
        <br />  <br />
        <input className='submit' type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default SignUp
