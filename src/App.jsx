import {Input} from "./components/forms/Input.jsx";
import {Checkbox} from "./components/forms/Checkbox.jsx";
import {ProductRow} from "./components/products/ProductRow.jsx";
import {ProductCategoryRow} from "./components/products/ProductCategoryRow.jsx";

const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
]

function App() {
    return <div className="max-w-2xl mx-auto p-4">
        <SearchBar/>
        <ProductTable products={PRODUCTS}/>
    </div>
}


function SearchBar() {
    return <div>
        <div className="flex flex-col gap-2 mb-4">
            <Input placeholder="Rechercher..." value="null" onChange={() => null}/>
            <Checkbox id="checkbox" label={`N'afficher que les produits en stock`} checked={false}
                      onChange={() => null}/>
        </div>
    </div>
}


function ProductTable({products}) {
    const rows = []
    let lastCategory = null
    for (let product of products) {
        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow key={product.category} name={product.category}/>)
        }
        lastCategory = product.category
        rows.push(<ProductRow key={product.name} product={product}/>)
    }

    return <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Prix
                </th>
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </table>
    </div>
}

export default App
