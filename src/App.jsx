import {useReducer} from "react";

function reducer(state, action) {
    if (action.type === 'REMOVE_TODO') {
        return {
            ...state,
            todos: state.todos.filter(v => v !== action.payload)
        }
    }
    if (action.type === 'TOGGLE_TODO') {
        return {
            ...state,
            todos: state.todos.map(todo => todo === action.payload ? {
                ...todo,
                checked: !todo.checked
            } : todo)
        }
    }

    if (action.type === 'CLEAR_COMPLETED') {
        return {
            ...state,
            todos: state.todos.filter(todo => !todo.checked)
        }
    }
    return state
}

function App() {
    const [states, dispatch] = useReducer(reducer, {
        todos: [
            {name: "One", checked: false},
            {name: "Two", checked: true},
            {name: "Three", checked: false},
        ]
    })

    return <div className="max-w-xl mx-auto text-center">
        <ul>
            {states.todos.map(todo => (
                <li key={todo.name}>
                    <input type={"checkbox"} checked={todo.checked}
                           onChange={() => dispatch({type: 'TOGGLE_TODO', payload: todo})}/>
                    {todo.name}
                    <button
                        onClick={() => dispatch({type: 'REMOVE_TODO', payload: todo})}
                        className="bg-red-600 text-white p-2 rounded"
                    >
                        Supprimer
                    </button>
                </li>
            ))}
        </ul>

        <button
            onClick={() => dispatch({type: 'CLEAR_COMPLETED'})}
            className="bg-red-400 text-white p-1 mt-5 rounded"
        >
            Supprimer les tâches complètes
        </button>
    </div>
}

export default App
