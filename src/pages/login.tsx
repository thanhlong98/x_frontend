import { ROUTES } from '@constants'
import Link from 'next/link'

const LoginPage = () => (
  <div>
    <h1>Login</h1>
    <p>This is the login page</p>
    <p>
      <Link href={ROUTES.HOME_PAGE}>Go home</Link>
      <Link href={ROUTES.REGISTER_PAGE}>Go Register</Link>
    </p>
  </div>
)

export default LoginPage
