import {useState} from "react";


export function useIncrement({base = 0, max = Infinity, min = -Infinity}) {
    const [state, setState] = useState(base);

    return {
        count: state,
        increase: () => setState(v => v < max ? v + 1 : v),
        decrease: () => setState(v => v > min ? v - 1 : v)
    }
}