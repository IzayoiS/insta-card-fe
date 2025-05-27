import Layout from '@/layout/Layout'
import React from 'react'
import { Outlet } from 'react-router-dom'

function ProtectedRouteLayout() {
  return (
      <main >
          <Layout>
              <Outlet/>
          </Layout>
    </main>
  )
}

export default ProtectedRouteLayout