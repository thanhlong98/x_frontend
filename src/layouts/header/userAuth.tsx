import { UserOutlined } from '@ant-design/icons'
import { Avatar, Dropdown, Menu } from 'antd'
import Link from 'next/link'
import React from 'react'

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

const UserAuth = () => {
  return (
    <Dropdown
      overlay={authLink}
      placement="bottomCenter"
      trigger={['click']}
      arrow
    >
      <Avatar icon={<UserOutlined />} style={{ cursor: 'pointer' }} />
    </Dropdown>
  )
}

export default UserAuth
