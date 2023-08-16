import style from './containerTasks.module.css';
import clipboard from '../../assets/clipboard.png';
import { Task } from '../Task/Task';
import { ChangeEvent, FormEvent, useState } from 'react';
import plusIcon from '../../assets/plus.svg';
import { CardToDo } from '../../interface/CardToDo';


export function ContainerTasks() {
  const [newTextTodo, setNewTextTodo] = useState('');
  const [toDo, setToDo] = useState([])

  function handleTextToDo(event: ChangeEvent<HTMLInputElement>) {
    setNewTextTodo(event.target.value)
  }

  function handleCreateNewToDo(event: FormEvent) {
    event.preventDefault();

    setToDo([...toDo, newTextTodo]);
    setNewTextTodo(" ");
  }

  return (
    <>
      <section>
        <form className={style.insertTask} onSubmit={handleCreateNewToDo}>
          <input
            type='text'
            name='newToDo'
            onChange={handleTextToDo}
            value={newTextTodo}
            placeholder="Adicione uma nova tarefa" />
          <button type='submit'>
            <p>Criar</p>
            <img src={plusIcon} alt="" />
          </button>
        </form>
      </section>

      <section>
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


        <div className={style.containerTasks}>
          <div>
            <img src={clipboard} alt="task vazia" />
            <div>
              <p>Você ainda não tem tarefas cadastrad</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        </div>

        <div>
          {toDo.map((item, index) => (
            <Task key={index}
              textoTarefa={item}
            />
          ))}
        </div>
      </section>
    </>
  )
}