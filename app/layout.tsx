import Link from 'next/link'
import React from 'react'
import "./globals.css"
import { DM_Mono, Sekuya, Space_Grotesk } from "next/font/google"

const logoFont = Sekuya({
  subsets: ["latin"],
  weight: "400"
})

const mainFont = Space_Grotesk({
  subsets: ["latin"]
})

const navLinkFont = DM_Mono({
  subsets: ["latin"],
  weight: "400"
})

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body className='bg-neutral-800 text-neutral-300'>
        <nav className={`flex border-b-2 p-1 space-x-3 items-center bg-neutral-800`}>
          <Link href="/" className={`${logoFont.className} text-2xl font-bold`}>Nestly</Link>

          <Link href="/" className={`${navLinkFont.className} text-xl`}>Home</Link>          
        </nav>
        <main className={`${mainFont.className} m-2`}>
          {children}
        </main>
      </body>
    </html>
  )
}
