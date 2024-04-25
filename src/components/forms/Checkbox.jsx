/**
 *
 * @param {string} label
 * @param {boolean} checked
 * @param {(e: string) => void} onChange
 * @param {string} id
 */
export function Checkbox({label, checked, onChange, id}) {
    return <div className="flex items-center mb-4">
        <input
            id={id}
            type="checkbox" checked={checked}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={e => onChange(e.target.checked)}
        />
        <label htmlFor={id} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            {label}
        </label>
    </div>
}