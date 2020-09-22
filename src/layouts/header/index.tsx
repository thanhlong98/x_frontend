import { UserOutlined } from '@ant-design/icons'
import { Avatar, Col, Dropdown, Menu, Row } from 'antd'
import Link from 'next/link'
import MenuList from './menuList'
import styles from './style.module.scss'

const authLink = (
  <Menu>
    <Menu.Item>
      <Link href="/login">
        <a>Login</a>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link href="/register">
        <a>Register</a>
      </Link>
    </Menu.Item>
  </Menu>
)

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
          <Dropdown
            overlay={authLink}
            placement="bottomCenter"
            trigger={['click']}
            arrow
          >
            <Avatar icon={<UserOutlined />} style={{ cursor: 'pointer' }} />
          </Dropdown>
        </Col>
      </Row>
    </header>
  )
}

export default Header
