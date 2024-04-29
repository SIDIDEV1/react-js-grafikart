import {createContext, useState} from "react";

export const ThemeContext = createContext('light')
const [theme, setTheme] = useState('light')
const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
}

export function ThemeContextProvider({children}) {
    return <ThemeContext.Provider value={theme}>
        <button onClick={toggleTheme}>Changer de theme : {theme}</button>
        {children}
    </ThemeContext.Provider>

}