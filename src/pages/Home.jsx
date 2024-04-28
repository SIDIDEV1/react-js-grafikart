import {useDocumentTitle} from "../hooks/useDocumentTitle.js";
import {Spinner} from "../components/Spinner.jsx";
import {useFetch} from "../hooks/useFetch.js";
import {Alert} from "../components/Alert.jsx";
import {Card} from "../components/Card.jsx";

export function Home() {
    useDocumentTitle('Mon titre')
    const {data, loading, errors} = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=2000')

    return <div>
        <h1 className="mb-10">Home</h1>
        {errors && <Alert>{errors.toString()}</Alert>}
        {loading && <Spinner/>}
        {data && <div className="grid grid-cols-4 gap-4">
            {data.map(post => (<div key={post.id}>
                <Card
                    image={`https://picsum.photos/id/${post.id}/500/150`}
                    title={post.title}
                    description={post.body}
                    href={`#post:${post.id}`}
                    buttonLabel="Voir l'article"
                />
            </div>))}
        </div>}
    </div>
}