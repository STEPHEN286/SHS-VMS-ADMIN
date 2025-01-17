import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className='flex min-h-screen'>
        <Sidebar />
      <div className='flex-1 ml-64'>
        <Header />
        <main className='p-4'>
            <Outlet />
        </main>
      </div>
    </div>
  )
}
