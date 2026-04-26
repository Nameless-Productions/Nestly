import { db } from '@/lib/db';
import { createSiteForm } from '@/lib/sites/createSite'
import { getSites } from '@/lib/sites/getSites';
import { headers } from 'next/headers'
import React from 'react'

export default async function DashboardPage() {
  const username = await (await headers()).get("x-username");
  const user = await db.users.findUnique({
    where: {
      username: username!
    }
  })

  const sites = await getSites(user?.id!);
  return (<>
    <p className='text-2xl font-bold'>Hello, {username}!</p>
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

    {sites.map((s) => (
      <div>
        <p>{s.title}</p>
        <br />
        <p>Link: <a href={`https://${s.id}n3stly.site`}>https://{s.id}n3stly.site</a></p>
      </div>
    ))}
  </>)
}
