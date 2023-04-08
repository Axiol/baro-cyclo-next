'use client'

import { signIn } from 'next-auth/react'

const Login = () => {
  return (
    <>
      <p className='text-center font-bold text-2xl mb-4'>
        Pour laisser un avis, veuillez vous connecter
      </p>
      <div className='text-center mb-3'>
        <button className='btn' onClick={() => signIn('github')}>
          Se connecter avec GitHub
        </button>
      </div>
      <div className='text-center mb-3'>
        <button className='btn' onClick={() => signIn('twitter')}>
          Se connecter avec Twitter
        </button>
      </div>
      <div className='text-center mb-3'>
        <button className='btn' onClick={() => signIn('facebook')}>
          Se connecter avec Facebook
        </button>
      </div>
      <div className='text-center'>
        <button className='btn' onClick={() => signIn('google')}>
          Se connecter avec Google
        </button>
      </div>
    </>
  )
}

export default Login
