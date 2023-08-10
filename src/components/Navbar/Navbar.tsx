import style from './navbar.module.css';
import logo from '../../assets/logo-rocket.svg'

export function Navbar() {
  return (
    <div className={style.sidebar}>
      <img src={logo} alt="logo-sidebar-rocketseat" />
      <div className={style.nomeLogo}>
        <p>to</p>
        <p>do</p>
      </div>
    </div>
  )
}