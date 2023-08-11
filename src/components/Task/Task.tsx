import style from './task.module.css';
import Delete from '../../assets/deleteIcon.svg';

export function Task() {
  return (
    <div className={style.taskDefault} >
      <div className={style.checkboxContainer}>
        <input type="checkbox"/>
        <label>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>
      </div>
        <img src={Delete} alt="" />
    </div>
  )
}