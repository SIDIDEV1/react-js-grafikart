import {useEffect, useState} from "react";

export function useHashNavigation() {
    const [hash, setHash] = useState(location.hash)

    useEffect(() => {
        const handleChange = () => {
            setHash(location.hash)
        }
        window.addEventListener('hashchange', handleChange)
        return () => {
            removeEventListener('hashchange', handleChange)
        }
    }, []);

    const cleanHashed = hash.replace('#', '').toLowerCase()

    return {
        page: cleanHashed ? cleanHashed.split(':')[0] : 'home',
        param: cleanHashed.split(':')[1]
    }
}