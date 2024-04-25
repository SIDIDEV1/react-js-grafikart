import {useState} from "react";

function useToggle(initial) {
    const [state, setState] = useState(initial)
    const toggleState = () => setState(v => !v)

    return [state, toggleState]
}

function App() {
    const [checked, toggleCheck] = useToggle()

    return <div className="p-4 max-w-2xl mx-auto">
        <input type="checkbox" checked={checked} onChange={toggleCheck}/>

        {checked && 'Je suis coché'}
    </div>

}

export default App
