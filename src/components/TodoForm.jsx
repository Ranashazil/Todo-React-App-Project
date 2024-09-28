import React, { useState } from 'react'
import { Todo2 } from '../contexts/Todo';
function TodoForm2() {
    const [todo, setTodo] = useState("")
    const {addTodo} = Todo2()
    const add = (e) => {
      e.preventDefault()
      if (!todo) return
      addTodo({ todo, completed: false})
      setTodo("")
    }
  return (
      <form onSubmit={add}  className="flex">
          <input
              type="text"
              placeholder="Write Something for todo..."
              className="w-full border border-blue/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-yellow-600 text-white shrink-0">
              submit
          </button>
      </form>
  );
}
export default TodoForm2;