import style from './App.module.css'

import { Navbar } from "./components/Navbar/Navbar"
import { ContainerTasks } from './components/ContainerTasks/ContainerTasks'

function App() {
  return (
    <>
      <Navbar />
      <ContainerTasks />
    </>
  )
}

export default App
