import {useHashNavigation} from "./hooks/useHashNavigation.js";
import {Home} from "./pages/Home.jsx";
import {Single} from "./pages/Single.jsx";
import {Contact} from "./pages/Contact.jsx";
import {NotFound} from "./pages/NotFound.jsx";
import {Header} from "./components/Header.jsx";
import {ErrorBoundary} from "react-error-boundary";
import {Button} from "./components/Button.jsx";
import {useState} from "react";
import {ThemeContext} from "./hooks/useTheme.jsx";

function App() {
    const {page, param} = useHashNavigation()

    const pageContent = getPageContent(page, param)
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return <div className="bg-gray-200 h-full">
        <Header page={page}/>
        <button onClick={toggleTheme}>Changer de theme : {theme}</button>

        {/*<Button variant='yellow' onClick={toggleTheme}> Changer theme : {theme}</Button>*/}
        <ThemeContext.Provider value={theme}>
            <div className="max-w-7xl px-4 py-8 mx-auto">
                <ErrorBoundary FallbackComponent={Fallback}>
                    {pageContent}
                </ErrorBoundary>
            </div>
        </ThemeContext.Provider>
    </div>
}

function Fallback({error, resetErrorBoundary}) {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre style={{color: "red"}}>{error.toString()}</pre>
            <Button variant="yellow" onClick={resetErrorBoundary}>
                Reactualiser
            </Button>
        </div>
    );
}

function getPageContent(page, param) {
    switch (page) {
        case 'home' :
            return <Home/>;
        case 'post' :
            return <Single postId={param}/>
        case 'contact' :
            return <Contact/>
        default:
            return <NotFound page={page}/>
    }

}

export default App
