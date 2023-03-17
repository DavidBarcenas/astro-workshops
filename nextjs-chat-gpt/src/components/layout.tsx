import Head from 'next/head'
import { ReactNode } from 'react'
import Aside from './aside'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Chat GPT Clone</title>
      </Head>
      <div className='w-full relative bg-gptgray h-screen'>
        <Aside />
        {children}
      </div>
    </>
  )
}
