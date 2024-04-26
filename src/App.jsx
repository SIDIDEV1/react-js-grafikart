import {useFetch} from "./components/hooks/useFetch.js";

function App() {
    // https://jsonplaceholder.typicode.com/posts?_limit=8&_delay=3000

    const {
        loading,
        data,
        errors
    } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=8&_delay=3000')

    return <div className="p-4 max-w-2xl mx-auto">
        {loading && <div>Loading...</div>}
        {data &&
            <div>
                {JSON.stringify(data)}
            </div>
        }
        {errors && <div className="text-2xl text-red-400">{errors.toString()}</div>}
    </div>

}

export default App
