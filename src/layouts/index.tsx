import React from 'react'
import { ROUTES } from '@constants'
import { useRouter } from 'next/router'
import Header from './header'
import Footer from './footer'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const isShowHeaderFooter = () =>
    ![ROUTES.LOGIN_PAGE, ROUTES.REGISTER_PAGE].includes(router.pathname)

  return (
    <>
      {isShowHeaderFooter() && <Header />}
      <main>{children}</main>
      {isShowHeaderFooter() && <Footer />}
    </>
  )
}

export default Layout
