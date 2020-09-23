import MenuList from './menuList'
import styles from './style.module.scss'

const Header: React.FC = () => {
  return (
    <header id={styles.header} className="container">
      <MenuList />
    </header>
  )
}

export default Header
