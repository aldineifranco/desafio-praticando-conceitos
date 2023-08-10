import style from './sidebar.module.css';
import logo from '../../assets/logo-rocket.svg'

export function Sidebar() {
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