import style from './containerTasks.module.css';
import clipboard from '../../assets/clipboard.png';
import { Task } from '../Task/Task';
import { ChangeEvent, FormEvent, useState } from 'react';
import plusIcon from '../../assets/plus.svg';



export function ContainerTasks() {
  const [newTextTodo, setNewTextTodo] = useState('');
  const [toDo, setToDo] = useState<string[]>([]);
  const [contadorToDoCriado, setContadorToDoCriado] = useState(0);
  const [contadorTarefaConcluida, setContadorTarefaConcluida] = useState(0);

  function handleTextToDo(event: ChangeEvent<HTMLInputElement>) {
    setNewTextTodo(event.target.value)
  }

  function handleCreateNewToDo(event: FormEvent) {
    event.preventDefault();

    setToDo([...toDo, newTextTodo]);
    setNewTextTodo(" ");
    setContadorToDoCriado(contadorToDoCriado + 1);
  }

  function deleteTask(taskToDelete: string) {
    const taskWithoutDeleteOne = toDo.filter((item) => {
      return item !== taskToDelete;
    });

    setToDo(taskWithoutDeleteOne);
    setContadorToDoCriado(contadorToDoCriado - 1)
    setContadorTarefaConcluida(contadorTarefaConcluida - 1)
  }

  function handleTarefaConcluida(event: any) {
    if (event === false) {
      return setContadorTarefaConcluida(contadorTarefaConcluida + 1)
    } else if (event === true) {
      return setContadorTarefaConcluida(contadorTarefaConcluida - 1)
    }
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
              <span>{contadorToDoCriado}</span>
            </div>
            <div>
              <p>Concluídas</p>
              <span>{contadorTarefaConcluida} de {contadorToDoCriado}</span>
            </div>
          </div>
        </div>

        <div className={`${style.containerTasks} ${contadorToDoCriado !== 0 ? style.hidden : ''} `}>

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
              onDeleteTask={deleteTask}
              onChangeTarefaConcluida={handleTarefaConcluida}
            />
          ))}
        </div>
      </section>
    </>
  )
}