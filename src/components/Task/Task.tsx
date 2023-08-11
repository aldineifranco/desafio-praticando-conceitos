import style from './task.module.css';
import Delete from '../../assets/deleteIcon.svg';
import { CardToDo } from '../../interface/CardToDo';

export function Task({ textoTarefa }: CardToDo) {
  return (
    <div className={style.taskDefault} >
      <div className={style.checkboxContainer}>
        <input type="checkbox"/>
        <label>{textoTarefa}</label>
      </div>
        <img src={Delete} alt="" />
    </div>
  )
}