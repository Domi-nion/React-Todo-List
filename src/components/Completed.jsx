import React from 'react'

const Completed = ({task, toggleTask, onDelete}) => {
   const handleClick = () => {
      toggleTask(task.id)
   }
  return (
    <div>
      <div className='tasks done'>
         <input type="checkbox" checked={task.done} onChange={handleClick} />
         <div>
            <span><p>{task.name}</p></span>
         </div>
         <button onClick={() => onDelete(task.id)}>x</button>
      </div>
    </div>
  )
}

export default Completed
