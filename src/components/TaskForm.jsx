import React, { useState } from 'react'

const TaskForm = ({onAdd}) => {

   const [text, setText] = useState("")
   const handleSubmit = (e) => {
      if (text === "") {
         return
      }
      e.preventDefault()
      onAdd(text)
      setText('')
   }

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
         <input type="text" placeholder='Your Next Task...' value={text} onChange={ev => setText(ev.target.value)} />
         <button className='addBtn'>+</button>
      </form>
    </div>
  )
}

export default TaskForm
