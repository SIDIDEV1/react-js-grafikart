import {Modal} from "../../components/Modal.jsx";
import {Input} from "../../components/forms/Input.jsx";
import {Button} from "../../components/Button.jsx";

export function EditPostModal({post, onClose, onSave}) {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return <Modal onClose={onClose}>
        <h1 className="text-2xl text-center font-extrabold mb-10">{`Editer l'article`}</h1>

        <form onSubmit={handleSubmit} className="p-5">
            <Input name="title" placeholder="title" label="title" defaultValue={post.title}/>
            <Input name="title" label="title" type="textarea" defaultValue={post.body}/>
            <div className="flex gap-10">
                <Button type="submit" variant="green">
                    Modifier
                </Button>
                <Button type="submit" variant="gray" onClick={onClose}>
                    Annuler
                </Button>
            </div>

        </form>
    </Modal>
}