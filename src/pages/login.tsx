import Link from "next/link";

const LoginPage = () => (
  <>
    <h1>Login</h1>
    <p>This is the login page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </>
);

export default LoginPage;
