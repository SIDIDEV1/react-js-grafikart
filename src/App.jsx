import {useEffect, useRef, useState} from "react";
import {Input} from "./components/forms/Input.jsx";

function App() {
    const ref = useRef(null)
    const [prefix, setPrefix] = useState('')
    ref.current = prefix

    useEffect(() => {
        const timer = setInterval(() => {
            console.log(ref.current)
        }, 1000);

        return () => {
            clearInterval(timer)
        }
    }, []);
    return <div className="p-4 max-2xl mx-auto">
        <Input type="text" value={prefix} onChange={setPrefix}/>
        <p ref={ref}>n Strict Mode, React will call your calculation function twice in order
            to help you find accidental
            impurities. This is development-only behavior and does not affect production. If your calculation function
            is pure (as it should be), this should not affect your logic. The result from one of the calls will be
            ignored.</p>
    </div>

}

export default App
