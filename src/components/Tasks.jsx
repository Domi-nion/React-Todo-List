import React from 'react'


const Tasks = ({task, toggleTask, deleteItem}) => {

  return (
   <div>
      {task.done === false && (
         <div className={'tasks ' + (task.done ? 'done' : '')}>
            <input type="checkbox" checked={task.done} onChange={() => toggleTask(task.id)} />
            <div>
               <span><p>{task.name}</p></span>
            </div>
            <button onClick={() => deleteItem(task.id)}>x</button>
         </div>
      )}
      
      
   </div>
   
  )
}

export default Tasks
