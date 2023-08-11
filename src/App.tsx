import style from './App.module.css'

import { Navbar } from "./components/Navbar/Navbar"
import { Input } from "./components/Input/Input"
import { ContainerTasks } from './components/ContainerTasks/ContainerTasks'

function App() {
  return (
    <>
      <Navbar />
      <Input />
    </>
  )
}

export default App
