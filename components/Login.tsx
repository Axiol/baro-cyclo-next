'use client'

import { signIn } from 'next-auth/react'

const Login = () => {
  return (
    <>
      <button onClick={() => signIn('github')}>Se connecter avec GitHub</button>
      <button onClick={() => signIn('twitter')}>
        Se connecter avec Twitter
      </button>
    </>
  )
}

export default Login
