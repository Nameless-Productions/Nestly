import { loginForm } from '@/lib/users/login'
import React from 'react'

export default function LoginPage() {
  return (
    <div className='text-center'>
        <div className='border-2 w-fit mx-auto p-5 rounded-xl'>
            <p className='text-2xl font-bold mb-4'>Login</p>
            <form action={loginForm}>
                <input type="text" name='username' className='input mb-3' placeholder='Username' required />
                <br />
                <input type="password" name='password' className='input mb-3' placeholder='Password' required />

                <br />

                <input type="submit" value="Login" className='btnNormal' />
            </form>
        </div>
    </div>
  )
}
