import React from 'react'
import Tasks from './Tasks'

const TaskContainer = ({tasks, toggleTask, deleteItem}) => {
  return (
    <div className='unCompletedTask'>
      {tasks.map(task => (
            <Tasks task={task} toggleTask={toggleTask} key={task.id} deleteItem={deleteItem}/>
         ))}
    </div>
  )
}

export default TaskContainer
