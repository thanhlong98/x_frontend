import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>{" "}
      <Link href="/about">
        <a>About</a>
      </Link>{" "}
      <Link href="/login">
        <a>Login</a>
      </Link>{" "}
      <Link href="/register">
        <a>Register</a>
      </Link>{" "}
    </nav>
  );
};

export default Navbar;
