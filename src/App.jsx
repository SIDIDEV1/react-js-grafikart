import {useHashNavigation} from "./components/hooks/useHashNavigation.js";
import {Home} from "./components/pages/Home.jsx";
import {Single} from "./components/pages/Single.jsx";
import {Contact} from "./components/pages/Contact.jsx";
import {NotFound} from "./components/pages/NotFound.jsx";

function App() {
    const {page} = useHashNavigation()

    const pageContent = getPageContent(page)

    return <div>
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
