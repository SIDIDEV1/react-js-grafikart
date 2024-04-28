export function Card({image, title, description, href, buttonLabel}) {
    const showLabel = !!(href && buttonLabel)
    return <div
        className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

        {image && <a href="#">
            <img className="rounded-t-lg" src={image} alt={title}/>
        </a>}
        <div className="p-5">
            {title && <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy
                    {title}</h5>
            </a>}
            {description &&
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise
                    technology
                    {description}</p>}
            {showLabel &&
                <a href={href}
                   className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {buttonLabel}
                </a>}
        </div>
    </div>

}