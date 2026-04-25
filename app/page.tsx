import Link from 'next/link'
import React from 'react'

export default function MainPage() {
  return (<div className='text-center'>
    <p className='font-bold text-3xl'>Your site, live in</p>
    <p className='font-bold text-3xl text-green-300'>Under 30 seconds</p>
    <br />
    <p>Drop your <span className='text-green-200'>HTML</span> file and get a public URL. <br />No bill at the end of the month and minimal conifg.</p>
    <br />
    <Link href="/dashboard" className='simpleBtn'>Deploy your fist site</Link>

    <br />

    <p className='mt-4 border border-gray-500 p-3 rounded-xl bg-zinc-800 w-fit mx-auto'><span className='text-white font-bold'>yoursite</span>.n3stly.site</p>

    <br />

    <p className="text-sm text-muted-foreground uppercase tracking-widest mb-6">How it works</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="p-5 rounded-xl border border-border">
        <p className="text-sm font-medium text-green-600 mb-2">01</p>
        <p className="font-medium mb-1">Drop your file</p>
        <p className="text-sm text-muted-foreground">Drag your HTML file you made and write in basic info</p>
      </div>
      <div className="p-5 rounded-xl border border-border">
        <p className="text-sm font-medium text-green-600 mb-2">02</p>
        <p className="font-medium mb-1">Get your URL</p>
        <p className="text-sm text-muted-foreground">Instant public link you can easily copy and share</p>
      </div>
      <div className="p-5 rounded-xl border border-border">
        <p className="text-sm font-medium text-green-600 mb-2">03</p>
        <p className="font-medium mb-1">Update anytime</p>
        <p className="text-sm text-muted-foreground">Re-upload a new file and update it almost instantly</p>
      </div>
    </div>
  </div>)
}
