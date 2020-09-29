import { Col, Menu, Row } from 'antd'
import Link from 'next/link'
import MenuList from './menuList'
import styles from './style.module.scss'
import UserAuth from './userAuth'

const Header: React.FC = () => {
  return (
    <header id={styles.header} className="container">
      <Row className={styles.headerContent} justify="space-between">
        <Col className={styles.headerBegin}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </Col>
        <Col className={styles.headerMiddle}>
          <MenuList />
        </Col>
        <Col className={styles.headerEnd}>
          <UserAuth />
        </Col>
      </Row>
    </header>
  )
}

export default Header
