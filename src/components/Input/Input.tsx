import style from './input.module.css';
import plusIcon from '../../assets/plus.svg';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Task } from '../Task/Task';
import clipboard from '../../assets/clipboard.png';



export function Input() {
  const [newTextTodo, setNewTextTodo] = useState('');
  const [toDo, setToDo] = useState([''])

  function handleTextToDo(event: ChangeEvent<HTMLInputElement>) {
    setNewTextTodo(event.target.value)
  }

  function handleCreateNewToDo(event: FormEvent) {
    event.preventDefault();

    setToDo([...toDo, newTextTodo]);
    setNewTextTodo(" ");
  }

  return (
    <div>
      <form className={style.insertTask} onSubmit={handleCreateNewToDo}>
        <input type='text' name='newToDo' onChange={handleTextToDo} value={newTextTodo} placeholder="Adicione uma nova tarefa"/>
        <button type='submit'>
          <p>Criar</p>
          <img src={plusIcon} alt="" />  
        </button>
      </form>

      <section className={style.Container}>
        <div className={style.headerContainer}>
          <div className={style.headerToDo}>
            <div>
              <p>Tarefas criadas</p>
              <span>0</span>
            </div>
            <div>
              <p>Concluídas</p>
              <span>0</span>
            </div>
          </div>
        </div>

        <div className={style.mainContainer}>
          <div className={style.thereAreNoTasks}>
            <img src={clipboard} alt="task vazia" />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>

          <div>
            {toDo.map((item) => {
              return (
                <Task
                  textoTarefa={item}
                />
              )
            })}
          </div>
        </div>        
      </section>


    </div>
    
  )
}