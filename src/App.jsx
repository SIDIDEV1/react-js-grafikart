import {useReducer} from "react";
import {useTodos} from "./components/hooks/useTodos.js";


function App() {
    const {states, clearCompleted, removeTodo, toggleTodo} = useTodos()
    return <div className="max-w-xl mx-auto text-center">
        <ul>
            {states.todos.map(todo => (
                <li key={todo.name}>
                    <input type={"checkbox"} checked={todo.checked}
                           onChange={() => toggleTodo(todo)}/>
                    {todo.name}
                    <button
                        onClick={() => removeTodo(todo)}
                        className="bg-red-600 text-white p-2 rounded"
                    >
                        Supprimer
                    </button>
                </li>
            ))}
        </ul>

        <button
            onClick={clearCompleted}
            className="bg-red-400 text-white p-1 mt-5 rounded"
        >
            Supprimer les tâches complètes
        </button>
    </div>
}

export default App
