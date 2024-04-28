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
    return {
        page: hash.replace('#', '').toLowerCase() || 'home'
    }
}