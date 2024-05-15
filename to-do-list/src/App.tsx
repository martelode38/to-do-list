import { Header } from './components/Header/Header'
import { NewTask } from './components/NewTask/NewTask'
import { Task } from './components/Task/Task'
import './global.css'

function App() {

  return (
    <div>
      <Header/>
      
      <NewTask/>

      <Task/>
      
    </div>
  )
}

export default App
