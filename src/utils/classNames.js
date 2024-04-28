export function activeClassIf(condition, className) {

    if (!condition) {
        return className
    }
    if (!className) {
        return 'text-red-600'
    }
    
    return `text-red-600 ${className}`
}