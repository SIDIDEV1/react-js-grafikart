/**
 *
 * @param {string} name
 */

export function ProductCategoryRow({name}) {
    return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" colSpan={2}
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {name}
        </th>
    </tr>
}