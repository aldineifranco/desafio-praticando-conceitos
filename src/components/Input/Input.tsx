import style from './input.module.css';
import plusIcon from '../../assets/plus.svg';

export function Input() {
  return (
    <div>
      <form className={style.insertTask}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <a href='#'>
          <p>Criar</p>
          <img src={plusIcon} alt="" />  
        </a>
      </form>
    </div>
  )
}