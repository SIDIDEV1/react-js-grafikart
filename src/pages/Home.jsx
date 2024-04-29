import {useDocumentTitle} from "../hooks/useDocumentTitle.js";
import {Spinner} from "../components/Spinner.jsx";
import {useFetch} from "../hooks/useFetch.js";
import {Alert} from "../components/Alert.jsx";
import {Card} from "../components/Card.jsx";
import {useTheme} from "../hooks/useTheme.jsx";
import {motion} from "framer-motion";

export function Home() {
    useDocumentTitle('Mon titre')
    const {data, loading, errors} = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=2000')

    if (loading) {
        return <Spinner/>
    }

    if (errors) {
        return <Alert>{errors.toString()}</Alert>
    }

    return <div>
        <h1 className="mb-10">Home</h1>
        <motion.div
            whileHover={{scale: 1.2, rotate: 90}}
            whileTap={{background: "yellow", borderRadius: 100, rotate: -90}}
            className="flex text-2xl font-extrabold justify-center items-center bg-blue-300 w-20 h-20">
            1
        </motion.div>
        <ThemeSwitcher/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map(post => (<div key={post.id}>
                <Card
                    image={`https://picsum.photos/id/${post.id}/500/150`}
                    title={post.title}
                    description={post.body}
                    href={`#post:${post.id}`}
                    buttonLabel="Voir l'article"
                />
            </div>))}
        </div>
    </div>
}


function ThemeSwitcher() {
    const {theme, toggleTheme} = useTheme()
    return <button onClick={toggleTheme}>
        changer de theme {theme}
    </button>
}