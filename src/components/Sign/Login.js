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


  const googleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {

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

  const handleLoginChange = (e) => {
    const { name, value } = e.target;

    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser)
  }


  const loginForm = (e) => {
    const userInfo = { ...user }
    if (user.email && user.password) {
      signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          userInfo.success = 'Login Successful'
          userInfo.isLogged = false
          setUser(userInfo)
          console.log(userInfo.success);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          userInfo.error = 'Wrong info'
          userInfo.isLogged = true
          setUser(userInfo)
        });
    }

    e.preventDefault();
  }

  return (
    <div style={{ padding: '5%', width: '20%', position: 'relative', left: '35%', }} >

      <h3> Login to the form </h3>
      {user.isLogged === false ? <p style={{ color: 'green', marginTop: '10px', marginBottom: '10px' }} > {user.success}   </p>
        : <p style={{ color: 'red' }} > {user.error}   </p>}

      <form action="" onSubmit={loginForm} >
        <input onChange={handleLoginChange} name='email' className='input' type="text" placeholder='Email' />
        <br />  <br />
        <input onChange={handleLoginChange} name='password' className='input' type="password" placeholder='Password' />
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
