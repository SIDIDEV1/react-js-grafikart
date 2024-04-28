import {useState} from "react";
import {useToggle} from "../hooks/useToggle.js";
import {activeClassIf} from "../utils/classNames.js";

/**
 *
 * @param {string} page
 */
export function Header({page}) {
    const [show, toggleShow] = useToggle(false)

    return <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a href="#" className="flex items-center">
                    <span
                        className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MON APP</span>
                </a>
                <div className="flex items-center lg:order-2">
                    <button onClick={toggleShow} data-collapse-toggle="mobile-menu-2" type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clipRule="evenodd"></path>
                        </svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>

                <div
                    className={`justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${!show ? 'hidden' : ''}`}
                    id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <a href="#"
                               className={activeClassIf(page === 'home', 'block py-2 pr-4 pl-3 text-gray-700 border-b\n' +
                                   '                                border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent\n' +
                                   '                                lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400\n' +
                                   '                                lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white\n' +
                                   '                                 lg:dark:hover:bg-transparent dark:border-gray-700')}
                               aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#contact"
                               className={activeClassIf(page === 'contact', 'block py-2 pr-4 pl-3 text-gray-700 border-b\n' +
                                   '                                border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent\n' +
                                   '                                lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400\n' +
                                   '                                lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white\n' +
                                   '                                 lg:dark:hover:bg-transparent dark:border-gray-700')}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

}