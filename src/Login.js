import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
  const [state, dispatch] = useStateValue()

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result)
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user /* push user into datalayer */,
        })
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  return (
    <div className="login">
      <div className="login__container">
        <img src="/images/slack.png" alt="" />
        <h1> Sign in to Clever Programmer </h1>{' '}
        <p> cleverprogrammer.slack.com </p>{' '}
        <Button onClick={signIn}> Sign in with Google </Button>{' '}
      </div>{' '}
    </div>
  )
}

export default Login
