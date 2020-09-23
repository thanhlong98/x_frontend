import { ROUTES } from '@constants'
import Link from 'next/link'

const RegisterPage = () => (
  <div>
    <h1>Register</h1>
    <p>This is the register page</p>
    <p>
      <Link href={ROUTES.HOME_PAGE}>Go home</Link>
      <Link href={ROUTES.LOGIN_PAGE}>Go Login</Link>
    </p>
  </div>
)

export default RegisterPage
