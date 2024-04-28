import {useHashNavigation} from "./components/hooks/useHashNavigation.js";

function App() {
    const {page} = useHashNavigation()
    return <div>
        Page : {page}
        <p></p><br/>
        <a href="#">Home</a><br/>
        <a href="#contact">Contact</a><br/>
        <a href="#post">Post</a><br/>
    </div>
}

export default App
