import {useState} from "react";

/**
 *
 * @param {string} initial
 */
export function useIncrement(initial = 0) {
    const [state, setState] = useState(initial);

    return {
        count: state,
        increase: () => setState(v => v + 1),
        decrease: () => setState(v => v - 1)
    }
}