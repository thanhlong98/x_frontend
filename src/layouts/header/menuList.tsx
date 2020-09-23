import Link from 'next/link'
import React from 'react'

const menus = [
  {
    name: 'Posts',
    path: '/posts'
  },
  {
    name: 'About',
    path: '/about'
  }
]

const MenuList = () => {
  return (
    <div>
      {menus.map((menu, i) => (
        <Link key={i} href={menu.path}>
          {menu.name}
        </Link>
      ))}
    </div>
  )
}

export default MenuList
