import { headers } from 'next/headers'
import React from 'react'

export default async function DashboardPage() {
  return (<>
    <p className='text-2xl font-bold'>Hello, {(await headers()).get("x-username")}!</p>
  </>)
}
