import React from 'react'
import './login.css'
import { Button } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase.config';
import { contextAPI2 } from '../../App';

const Login = () => {

  const [user, setUser] = React.useContext(contextAPI2);


  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setUser((preValue) => {
      return {
        ...preValue,
        [name]: value
      }
    })
  }


  const googleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        //  console.log(result);

        const { displayName, email, photoURL } = result.user;

        const signInData = {
          isLogged: false,
          name: displayName,
          email: email,
          photoURL: photoURL
        }
        setUser(signInData)
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

  const loginForm = (e) => {
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const { isLogged, name, email, photoURL } = userCredential.user;

        const signIn = {
          isLogged: false,
          name: name,
          email: email,
          photoURL: photoURL
        }
        setUser(signIn);

        console.log('signed in sucessful' + user);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error to sign in: ' + errorMessage);

      });
    e.preventDefault();
  }

  return (
    <div style={{ padding: '5%', width: '20%', position: 'relative', left: '35%', }} >

      <h3> Login to the form </h3>

      <form action="" onSubmit={loginForm} >
        <input onChange={handleLoginChange} name='email' className='input' type="text" placeholder='Email' />
        <br />  <br />
        <input onChange={handleLoginChange} name='password' value={user.password} className='input' type="password" placeholder='Password' />
        <br />  <br />
        <input className='submit' type="submit" value="submit" />
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
