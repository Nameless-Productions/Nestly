import { createUserForm } from '@/lib/users/createUser'
import React from 'react'

export default function RegisterForm() {
  return (<>
    <div className='border-2 w-fit mx-auto p-5 rounded-xl'>
        <p className='text-2xl font-bold mb-4'>Register</p>
        <form action={createUserForm}>
            <input type="text" name='username' className='input mb-3' placeholder='Username' required />
            <br />
            <input type="email" name='email' className='input mb-3' placeholder='Email' required />
            <br />
            <input type="password" name='password' className='input mb-3' placeholder='Password' required />

            <br />

            <input type="submit" value="Register" className='btnNormal' />
        </form>
    </div>
  </>)
}
