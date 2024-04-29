import {useTheme} from "../hooks/useTheme.jsx";

export function Button({variant, ...props}) {
    const newProps = {
        ...props,
        className: `bg-${variant}-500 px-6 py-2 rounded hover:bg-${variant}-700 text-white`
    }
    const {theme} = useTheme()

    return <button>
        {theme}
    </button>

    if (props.href) {
        return <a {...newProps}/>
    }

    return <button {...newProps}/>

}