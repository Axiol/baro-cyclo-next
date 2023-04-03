'use client'

import { signIn } from 'next-auth/react'

const Login = () => {
  return (
    <button onClick={() => signIn('github')}>Se connecter avec GitHub</button>
  )
}

export default Login
