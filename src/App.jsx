import {createPortal} from "react-dom";
import {ProductCategoryRow} from "./components/products/ProductCategoryRow.jsx";
import {ProductRow} from "./components/products/ProductRow.jsx";
import {ErrorBoundary} from "./components/ErrorBoundary.jsx";

function App() {
    return <div className=" relative bg-blue-100 m-10 h-[300px] overflow-hidden overflow-y-auto">
        <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
            Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme
            assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait
            que survivre cinq
        </p>
        <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
            Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme
            assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait
            que survivre cinq
        </p>
        <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
            Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme
            assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait
            que survivre cinq
        </p>
        <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
            Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme
            assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait
            que survivre cinq
        </p>
        <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
            Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme
            assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait
            que survivre cinq
        </p>

        <ErrorBoundary fallback={<p className="text-2xl text-red-100">Woooooooo</p>}>
            <ProductRow/>
        </ErrorBoundary>

        <Modal/>
    </div>
}


function Modal() {
    return createPortal(
        <div className="absolute bg-white top-0 right-0 p-4 border border-2">
            <h2>Mon modal</h2>
        </div>, document.body
    )
}

export default App
