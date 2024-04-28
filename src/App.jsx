import {useHashNavigation} from "./hooks/useHashNavigation.js";
import {Home} from "./pages/Home.jsx";
import {Single} from "./pages/Single.jsx";
import {Contact} from "./pages/Contact.jsx";
import {NotFound} from "./pages/NotFound.jsx";
import {Header} from "./components/Header.jsx";

function App() {
    const {page} = useHashNavigation()

    const pageContent = getPageContent(page)

    return <div className="bg-gray-200 h-full">
        <Header page={page}/>
        <div className="max-w-7xl px-4 py-8 mx-auto">
            {pageContent}
        </div>
    </div>
}


function getPageContent(page) {
    switch (page) {
        case 'home' :
            return <Home/>;
        case 'post' :
            return <Single/>
        case 'contact' :
            return <Contact/>
        default:
            return <NotFound page={page}/>
    }

}

export default App
