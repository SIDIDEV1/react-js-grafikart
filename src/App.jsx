import {useToggle} from "./components/hooks/useToggle.js";
import {useIncrement} from "./components/hooks/useIncrement.js";


function App() {
    const [checked, toggleCheck] = useToggle()
    const [count, increase, decrease] = useIncrement(10)

    return <div className="p-4 max-w-2xl mx-auto">
        <input type="checkbox" checked={checked} onChange={toggleCheck}/>
        {checked && 'Je suis coché'}


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
