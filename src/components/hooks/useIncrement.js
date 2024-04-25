import {useState} from "react";

/**
 *
 * @param {string} initial
 */
export function useIncrement(initial = 0) {
    const [state, setState] = useState(initial);

    return [
        state,
        () => setState(v => v + 1),
        () => setState(v => v - 1)
    ]
}