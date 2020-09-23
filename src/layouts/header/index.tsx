import MenuList from './menuList'
import './style.module.less'

const Header: React.FC = () => {
  return (
    <header className="container">
      <MenuList />
    </header>
  )
}

export default Header
