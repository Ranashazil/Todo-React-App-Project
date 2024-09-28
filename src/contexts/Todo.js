import {createContext, useContext} from "react"
export const Todo1 = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggling: (id) => {}
})
export const Todo2 = () => {
    return useContext(Todo1)
}
export const TodoProvider = Todo1.Provider