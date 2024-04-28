import {useEffect, useRef, useState} from "react";
import {useRefSync} from "./useRefSync.js";

export function useFetch(url, options) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null);
    const [errors, setErrors] = useState(null);
    const optionRef = useRefSync(options)

    useEffect(() => {
        fetch(url, {
            ...optionRef.current,
            headers: {
                'Accept': 'application/json; charset=UTF-8',
                ...optionRef.current?.headers
            }
        })
            .then(r => r.json())
            .then(data => {
                setData(data)
            })
            .catch((err) => {
                setErrors(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [url]);
    return {
        loading, data, errors
    }
}