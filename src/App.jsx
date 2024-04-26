import {useReducer} from "react";

function reducer(state, action) {
    if (action.type === 'REMOVE_TODO') {
        return {
            ...state,
            todos: state.todos.filter(v => v !== action.payload)
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
                <li onClick={() => dispatch({type: 'REMOVE_TODO', payload: todo})} key={todo.name}> {todo.name}</li>))}
        </ul>
    </div>
}

export default App
