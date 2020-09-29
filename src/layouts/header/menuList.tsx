import { Menu } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const { SubMenu } = Menu

const menus = [
  {
    name: 'Posts',
    path: '/posts'
  },
  {
    name: 'XYZ',
    path: null,
    subMenu: [
      {
        name: 'Contact',
        path: '/contact'
      },
      {
        name: 'Register',
        path: '/register'
      }
    ]
  },
  {
    name: 'About',
    path: '/about'
  }
]

const MenuList = () => {
  const { pathname } = useRouter()

  return (
    <Menu mode="horizontal" selectedKeys={[pathname]}>
      {menus.map((item, index) => {
        return item.subMenu ? (
          <SubMenu key={index} title={item.name}>
            {item.subMenu.map((subItem, index2) => (
              <Menu.Item key={subItem.path}>
                <Link href={subItem.path}>
                  <a>{subItem.name}</a>
                </Link>
              </Menu.Item>
            ))}
          </SubMenu>
        ) : (
          <Menu.Item key={item.path}>
            <Link href={item.path}>
              <a>{item.name}</a>
            </Link>
          </Menu.Item>
        )
      })}
    </Menu>
  )
}

export default MenuList
