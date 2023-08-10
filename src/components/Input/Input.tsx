import style from './input.module.css';
import plusIcon from '../../assets/plus.svg';

export function Input() {
  return (
    <div>
      <form className={style.insertTask}>
        <input type="text" />
        <button>
          Criar
          <img src={plusIcon} alt="" />  
        </button>
      </form>
    </div>
  )
}