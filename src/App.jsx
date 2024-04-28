import {useHashNavigation} from "./hooks/useHashNavigation.js";
import {Home} from "./pages/Home.jsx";
import {Single} from "./pages/Single.jsx";
import {Contact} from "./pages/Contact.jsx";
import {NotFound} from "./pages/NotFound.jsx";
import {Header} from "./components/Header.jsx";

function App() {
    const {page} = useHashNavigation()

    const pageContent = getPageContent(page)

    return <div>
        <Header page={page}/>
        Page : {page}
        <p></p><br/>
        <a href="#">Home</a><br/>
        <a href="#contact">Contact</a><br/>
        <a href="#post">Post</a><br/>

        {pageContent}
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
