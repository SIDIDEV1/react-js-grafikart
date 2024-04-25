/**
 *
 * @param {string} placeholder
 * @param {string} value
 * @param {string} type
 * @param {(e: string) => void} onChange
 */

export function Input({placeholder, value, onChange, type}) {
    return <div>
        <input
            type={type}
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={placeholder}
            value={value}
            onChange={e => onChange(e.target.value)}
        />
    </div>
}