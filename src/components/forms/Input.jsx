/**
 *
 * @param {string} placeholder
 * @param {string} value
 * @param {string} type
 * @param {(e: string) => void} onChange
 */
import {useId} from "react";

export function Input({type, label, ...props}) {
    const id = useId()
    const InputComponent = type === 'textarea' ? 'textarea' : 'input'
    return <div>
        <div className="mb-5">
            {label &&
                <label htmlFor={id}
                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            }
            <InputComponent {...props} id={id}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
        </div>
    </div>
}