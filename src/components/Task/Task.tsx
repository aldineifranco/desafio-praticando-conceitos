import style from './task.module.css';
import Delete from '../../assets/deleteIcon.svg';
import {Trash} from 'phosphor-react';
import { CardToDo } from '../../interface/CardToDo';

export function Task({ textoTarefa, onDeleteTask }: CardToDo):JSX.Element {

  function handleDeleteTask() {
    onDeleteTask(textoTarefa);
  }

  
  return (
    <div className={style.taskDefault} >
      <div className={style.checkboxContainer}>
        <input type="checkbox" />
        <label>{textoTarefa}</label>
      </div>
      <button
        onClick={handleDeleteTask}
        title='deletar tarefa'
        >
      <Trash size={20} />
      </button>
    </div>
  )
}