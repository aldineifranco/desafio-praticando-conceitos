import style from './task.module.css';
import {Trash} from 'phosphor-react';
import { CardToDo } from '../../interface/CardToDo';
import { useState } from 'react';

export function Task({ textoTarefa, onDeleteTask }: CardToDo) {
  const [ tarefaConcluida, setTarefaConcluida ] = useState({
    selecionado: false
  });  

  function handleDeleteTask() {
    onDeleteTask(textoTarefa);
  }

  function handleCheckedChange(event: any) {
    const { name, checked } = event.target;
    setTarefaConcluida({
      selecionado: name === 'selecionado' ? checked : tarefaConcluida.selecionado 
    })
    console.log(tarefaConcluida)
  }


  return (
    <div className={style.taskDefault} >
      <div className={style.checkboxContainer}>
        <label>
          <input 
            type="checkbox"
            checked={tarefaConcluida.selecionado}
            name='selecionado'
            onChange={handleCheckedChange}
            />
          <span className={tarefaConcluida.selecionado ? style.tarefaConcluida : ''}>{textoTarefa}</span> 
        </label>
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