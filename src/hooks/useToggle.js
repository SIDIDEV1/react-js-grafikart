import {useState} from "react";

/**
 *
 * @param {boolean} initial
 */
export function useToggle(initial) {
    const [state, setState] = useState(initial)
    const toggleState = () => setState(v => !v)

    return [state, toggleState]
}