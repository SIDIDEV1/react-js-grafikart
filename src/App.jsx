import {useToggle} from "./components/hooks/useToggle.js";
import {useIncrement} from "./components/hooks/useIncrement.js";
import {useDocumentTitle} from "./components/hooks/useDocumentTitle.js";
import {useState} from "react";
import {Input} from "./components/forms/Input.jsx";


function App() {
    const [checked, toggleCheck] = useToggle()
    const {count, increase, decrease} = useIncrement({
        base: 0,
        min: 5,
        max: 10
    })

    const [state, setState] = useState('');
    useDocumentTitle(state ? `Whooooww ${state}` : null)

    return <div className="p-4 max-w-2xl mx-auto">
        <input type="checkbox" checked={checked} onChange={toggleCheck}/>
        {checked && 'Je suis coché'}

        <Input type="text" placeholder="tapez votre nom ici" value={state} onChange={setState}/>
        <div>
            count : {count}
            <div>
                <button className="bg-blue-200 p-2 rounded" onClick={increase}>increase</button>
            </div>
            <div>
                <button className="bg-red-200 p-2 rounded" onClick={decrease}>decrease</button>
            </div>
        </div>
    </div>

}

export default App
