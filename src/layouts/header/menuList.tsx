import Link from 'next/link'
import React from 'react'
import styles from './menuList.module.scss'

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
    <div className={styles.menuContent}>
      {menus.map((menu, i) => (
        <Link key={i} href={menu.path}>
          {menu.name}
        </Link>
      ))}
    </div>
  )
}

export default MenuList
