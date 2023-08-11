import style from './containerTasks.module.css';
import clipboard from '../../assets/clipboard.png';
import { Task } from '../Task/Task';
import { CardToDo } from '../../interface/CardToDo';

export function ContainerTasks({ textoTarefa }: CardToDo) {
  return (
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

      <Task textoTarefa={textoTarefa}/>

      <div className={style.containerTasks}>
        <img src={clipboard} alt="task vazia" />
        <div>
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
     
    </section>
  )
}