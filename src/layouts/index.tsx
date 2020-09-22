import React from 'react'
import { ROUTES } from '@constants'
import { useRouter } from 'next/router'
import Header from './header'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  return (
    <>
      {router.pathname === ROUTES.LOGIN_PAGE ||
      router.pathname === ROUTES.REGISTER_PAGE ? null : (
        <Header />
      )}
      <main>{children}</main>
    </>
  )
}

export default Layout
