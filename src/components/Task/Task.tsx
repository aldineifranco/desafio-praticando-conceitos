import style from './task.module.css';
import Delete from '../../assets/deleteIcon.svg';

export function Task() {
  return (
    <div className={style.taskDefault}>
      <input type="radio" />
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <img src={Delete} alt="" />
    </div>
  )
}