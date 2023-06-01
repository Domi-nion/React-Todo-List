import { useEffect, useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import CompleteContainer from './components/CompleteContainer';
import TaskContainer from './components/TaskContainer';


const getLocalStorage = () => {
   let tasks = localStorage.getItem('tasks')
   if (tasks) {
      return (tasks = JSON.parse(localStorage.getItem("tasks")))
   }else{
      return []
   }
}

function App() {

   const [tasks, setTask] = useState(getLocalStorage())
   const addTask = (name) => {
      setTask(prev => {
         return [...prev, {name: name, done: false, id: Date.now()}]
      })
   }

   const deleteItem = (id) => {
      setTask(prev => {
         return prev.filter(task => task.id !== id)
      })
   }


   useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks))
   }, [tasks])
 
   const toggleTask = (id) => {
      const newTask = [...tasks]
      const task = newTask.find(task => task.id === id)
      task.done = !task.done
      setTask(newTask)
     
   }


  return (
    <div className="App">
      <TaskForm onAdd={addTask} />
      <main>
         <TaskContainer tasks={tasks} toggleTask={toggleTask} deleteItem={deleteItem}/>
         <CompleteContainer tasks={tasks} toggleTask={toggleTask} deleteItem={deleteItem} />
      </main>
    </div>
  );
}

export default App;
