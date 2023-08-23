export interface CardToDo {
  textoTarefa: string;
  onDeleteTask: (taskDefault: string) => void;
  onChangeTarefaConcluida: (event: boolean) => void;
}