export function Button({variant, ...props}) {
    const newProps = {
        ...props,
        className: `bg-${variant}-500 px-6 py-2 rounded hover:bg-${variant}-700 text-white`
    }

    if (props.href) {
        return <a {...newProps}/>
    }
    return <button {...newProps}/>

}