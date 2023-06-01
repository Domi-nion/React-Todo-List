import React from 'react'
import Completed from './Completed'

const CompleteContainer = ({tasks, toggleTask, deleteItem}) => {

   const completed = tasks.filter(task => task.done).length
   const total = tasks.length
   const percentage = completed / total * 100

   const message = () => {

      if (percentage === 0) {
         return "Do at Least One Task"
      }
      if (percentage === 100) {
         return "Nice Job for Today"
      }
      if (tasks.length === 0) {
         return "No Item"
      }
      return "Keep moving it"
   }

  return (
    <div className='completedTask'>
      <h2>{completed + '/' + total}</h2>
      <h2>{message()}</h2>
      {tasks.map(task => {
         return task.done === true ? <Completed task={task} toggleTask={toggleTask} key={task.id} onDelete={deleteItem} /> : ''
      })}
    </div>
  )
}

export default CompleteContainer
