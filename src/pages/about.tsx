import Link from 'next/link'

const AboutPage: React.FC = () => (
  <div className="about-page">
    <div className="container">
      <div className="about">
        <h1>About</h1>
        <p>This is the about page</p>
        <p>
          <Link href="/">Go home</Link>
        </p>
      </div>
    </div>
  </div>
)

export default AboutPage
