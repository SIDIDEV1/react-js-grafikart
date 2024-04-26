import {useCallback, useReducer} from "react";

function todosReducer(state, action) {
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


export function useTodos() {
    const [states, dispatch] = useReducer(todosReducer, {
        todos: [
            {name: "One", checked: false},
            {name: "Two", checked: true},
            {name: "Three", checked: false},
        ]
    })

    return {
        states: states,
        toggleTodo: useCallback(
            (todo) => dispatch({type: 'TOGGLE_TODO', payload: todo}),
            []),
        removeTodo: useCallback(
            (todo) => dispatch({type: 'REMOVE_TODO', payload: todo}),
            [],
        ),
        clearCompleted: useCallback(
            () => dispatch({type: 'CLEAR_COMPLETED'}), []
        ),

    }
}

