import {useFetch} from "../hooks/useFetch.js";
import {Spinner} from "../components/Spinner.jsx";
import {Alert} from "../components/Alert.jsx";
import {useDocumentTitle} from "../hooks/useDocumentTitle.js";
import {Button} from "../components/Button.jsx";
import {Modal} from "../components/Modal.jsx";
import {useToggle} from "../hooks/useToggle.js";
import {EditPostModal} from "./Single/EditPostModal.jsx";

export function Single({postId}) {
    const {loading, data: post, errors} = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    useDocumentTitle(post?.title)
    const [editing, toggleEditing] = useToggle(false)

    if (loading) {
        return <Spinner/>
    }

    if (errors) {
        return <Alert>{errors.toString()}</Alert>
    }

    throw new Error('ErrorBoundary')
    return <div>
        <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
            <img className="w-full h-48 object-cover" src={`https://picsum.photos/id/${postId}/1000/1000`}
                 alt={post.id}/>

            <div className="p-5">
                <h3 className="text-xl font-semibold tracking-tight text-gray-800">{post.title}</h3>
                <p className="mt-2 text-gray-600">{post.body}</p>

                <Button variant="red" onClick={toggleEditing}>
                    Modifier
                </Button>

                {editing &&
                    <EditPostModal post={post} onClose={toggleEditing}/>
                }

                <p>
                    <a href={`#post:${post.id + 1}`}>Page suivante</a>
                </p>
            </div>
        </div>
    </div>
}