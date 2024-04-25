/**
 *
 * @param {{name: string, price: string, stocked: boolean}}product
 * @constructor
 */

export function ProductRow({product}) {
    const styles = product.stocked ? undefined : {color: 'red'}
    return <tr
        className={'bg-white border-b dark:bg-gray-800 dark:border-gray-700'}>
        <th scope="row" style={styles}
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {product.name}
        </th>
        <td className="px-6 py-4">
            {product.price}
        </td>
    </tr>
}