import {useEffect, useRef} from "react";
import {createPortal} from "react-dom";

export function Modal({children, onClose}) {
    const modalRef = useRef();

    useEffect(() => {
        modalRef.current.showModal()
    }, []);

    const handleClose = (e) => {
        e.preventDefault()
        onClose?.()
    }

    return createPortal(
        <dialog
            style={{
                width: 'calc(100vw - 2rem)',
                maxWidth: 600
            }}
            ref={modalRef}
            onClose={handleClose}
            onCancel={handleClose}>
            {children}
        </dialog>, document.body)
}