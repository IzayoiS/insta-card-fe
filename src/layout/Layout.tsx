import React, { type ReactNode } from 'react'
import { Sidebar } from './Sidebar'

function Layout({children}:{children:ReactNode}) {
  return (
      <div className='flex'>
          <Sidebar />
          {children}
      </div>
  )
}

export default Layout