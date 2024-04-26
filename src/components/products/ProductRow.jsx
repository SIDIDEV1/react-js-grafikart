/**
 *
 * @param {{name: string, price: string, stocked: boolean}}product
 * @constructor
 */
import {useEffect} from "react";

export function ProductRow({product = {name: 'hdsk', price: '1$', stocked: false}}) {
    const styles = product.stocked ? undefined : {color: 'red'}

    useEffect(() => {
        throw new Error('LOllllll')
    }, []);

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