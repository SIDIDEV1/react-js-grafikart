import {Button} from "./Button.jsx";

export function Card({image, title, description, href, buttonLabel}) {
    const showLabel = !!(href && buttonLabel)
    return <div
        className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

        {image && <a href="#">
            <img className="rounded-t-lg" src={image} alt={title}/>
        </a>}
        <div className="p-5">
            {title && <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
            </a>}
            {description &&
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>}
            {showLabel &&
                <Button href={href} variant="blue">
                    {buttonLabel}
                </Button>
            }
        </div>
    </div>

}