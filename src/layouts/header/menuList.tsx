import { Menu } from 'antd'
import Link from 'next/link'
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
        name: 'DDD',
        path: '/ddd'
      }
    ]
  },
  {
    name: 'About',
    path: '/about'
  }
]

const MenuList = () => {
  return (
    <Menu mode="horizontal">
      {menus.map((item, index) => {
        return item.subMenu ? (
          <SubMenu key={index} title={item.name}>
            {item.subMenu.map((subItem, index2) => (
              <Menu.Item key={subItem.name + index2}>
                <Link href={subItem.path}>
                  <a>{subItem.name}</a>
                </Link>
              </Menu.Item>
            ))}
          </SubMenu>
        ) : (
          <Menu.Item key={item.name + index}>
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
