import { createSiteForm } from '@/lib/sites/createSite'
import { headers } from 'next/headers'
import React from 'react'

export default async function DashboardPage() {
  return (<>
    <p className='text-2xl font-bold'>Hello, {(await headers()).get("x-username")}!</p>
    <br />

    <p className='text-xl'>Create site</p>
    <form action={createSiteForm}>
      <label htmlFor="title">Title:</label> <br />
      <input type="text" placeholder='Title' id='title' name='title' className='input' required />
      <br />
      <label htmlFor="html">HTML file:</label> <br />
      <input type="file" name='html' id='html' accept='.html,text/html' className='input' required />
      <br />
      <input type="submit" value="Create" className='btnNormal mt-3' />
    </form>
  </>)
}
