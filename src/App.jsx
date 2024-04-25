import {Input} from "./components/forms/Input.jsx";
import {useEffect, useState} from "react";

function App() {

    const [count, setCount] = useState(5)
    const [timeLeft, setTimeLeft] = useState(count)


    const handleChange = (v) => {
        setCount(v)
        setTimeLeft(v)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(v => {
                if (v <= 1) {
                    clearInterval(timer)
                    return 0
                }
                return v - 1
            })
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [count]);

    return <div className="p-4 max-2xl mx-auto">
        <Input
            type="number"
            placeholder='Tapez une valeur'
            value={count}
            onChange={handleChange}
        />

        <p className="mt-10 text-2xl">
            Décompte : {timeLeft}
        </p>
    </div>

}

export default App
